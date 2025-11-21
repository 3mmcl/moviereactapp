import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);

/////////////pushing changes
// This pushes the file changes to the repo but DOES NOT update your deployed app.
// In Terminal, add all the files, commit and push them.

// git add .
// git commit -m "Custom Message related to change"
// git push -u origin main

////////////// Re-deploy your App
// This pushes the file changes to the repo but DOES NOT update your deployed app.

// In Terminal (It will take about a minute for the deployed app to update)

// npm run deploy
