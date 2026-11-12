import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

try {
  const theme = window.localStorage.getItem("henix-theme") === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = theme;
  document.documentElement.classList.toggle("dark", theme === "dark");
} catch {
  // The default theme remains available when browser storage is disabled.
}

createRoot(document.getElementById("root")!).render(<App />);
