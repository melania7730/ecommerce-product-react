import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AllProvider from "./context/ContextAll.jsx";
import Reducer from "./pages/reducer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <AllProvider>
      <App />
    </AllProvider> */}
    <Reducer />
  </React.StrictMode>
);
