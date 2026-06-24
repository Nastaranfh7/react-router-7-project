import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./router"; // اسم فایل روتری که می‌سازیم

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
