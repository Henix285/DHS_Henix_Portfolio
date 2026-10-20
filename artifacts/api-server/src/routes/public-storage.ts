import { Router, type Request, type Response } from "express";
import { ObjectStorageService } from "../lib/objectStorage";

const router = Router();
const objectStorageService = new ObjectStorageService();

async function servePublicObject(req: Request, res: Response) {
  try {
    const rawPath = req.params.filePath;
    const filePath = Array.isArray(rawPath) ? rawPath.join("/") : rawPath;

    if (
      !filePath ||
      filePath.split("/").some((segment) => segment === "." || segment === "..")
    ) {
      res.status(400).json({ error: "Invalid asset path" });
      return;
    }

    const file = await objectStorageService.searchPublicObject(filePath);
    if (!file) {
      res.status(404).json({ error: "File not found" });
      return;
    }

    const [metadata] = await file.getMetadata();
    const size = Number(metadata.size ?? 0);
    const contentType = String(metadata.contentType ?? "application/octet-stream");

    res.setHeader("Accept-Ranges", "bytes");
    res.setHeader("Content-Type", contentType);
    res.setHeader("Cache-Control", "public, max-age=86400, stale-while-revalidate=604800");
    res.setHeader("X-Content-Type-Options", "nosniff");

    const rangeHeader = req.headers.range;
    if (rangeHeader) {
      const range = /^bytes=(\d*)-(\d*)$/i.exec(rangeHeader.trim());
      if (!range || size <= 0 || (!range[1] && !range[2])) {
        res.setHeader("Content-Range", `bytes */${size}`);
        res.status(416).end();
        return;
      }

      let start = range[1] ? Number(range[1]) : Math.max(size - Number(range[2]), 0);
      let end = range[2] && range[1] ? Number(range[2]) : size - 1;
      if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start >= size || end < start) {
        res.setHeader("Content-Range", `bytes */${size}`);
        res.status(416).end();
        return;
      }
      end = Math.min(end, size - 1);

      res.status(206);
      res.setHeader("Content-Range", `bytes ${start}-${end}/${size}`);
      res.setHeader("Content-Length", String(end - start + 1));
      if (req.method === "HEAD") {
        res.end();
        return;
      }

      file.createReadStream({ start, end }).on("error", () => {
        if (!res.headersSent) res.status(500);
        res.end();
      }).pipe(res);
      return;
    }

    if (size > 0) res.setHeader("Content-Length", String(size));
    if (req.method === "HEAD") {
      res.end();
      return;
    }

    file.createReadStream().on("error", () => {
      if (!res.headersSent) res.status(500);
      res.end();
    }).pipe(res);
  } catch {
    if (!res.headersSent) {
      res.status(500).json({ error: "Failed to serve public asset" });
    } else {
      res.end();
    }
  }
}

router.get("/storage/public-objects/*filePath", servePublicObject);
router.head("/storage/public-objects/*filePath", servePublicObject);

export default router;
