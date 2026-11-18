import { Router, type IRouter } from "express";
import healthRouter from "./health";
import publicStorageRouter from "./public-storage";

const router: IRouter = Router();

router.use(healthRouter);
router.use(publicStorageRouter);

export default router;
