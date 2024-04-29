import "@ionic/vue/css/core.css";
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";
import "highlight.js/styles/github.css";

import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("content")).render(<App />);
