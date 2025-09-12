import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./landing/App.jsx";
import "@fontsource/source-code-pro";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
