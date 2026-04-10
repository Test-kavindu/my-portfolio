import { createRoot } from "react-dom/client";
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/600.css';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/cabin/400.css';
import '@fontsource/cabin/500.css';
import '@fontsource/cabin/600.css';
import App from "./App.tsx";
import "./index.css";

// Apply theme before render to prevent flash
const stored = localStorage.getItem("theme");
if (stored === "light") {
  document.documentElement.classList.remove("dark");
} else {
  document.documentElement.classList.add("dark");
  if (!stored) localStorage.setItem("theme", "dark");
}

createRoot(document.getElementById("root")!).render(<App />);
