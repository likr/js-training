import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "highlight.js/styles/github.css";

import { createRoot } from "react-dom/client";
import { setupIonicReact } from "@ionic/react";
import App from "./App";

setupIonicReact();
createRoot(document.getElementById("content")).render(<App />);
