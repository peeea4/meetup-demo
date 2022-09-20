import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { App } from "./pages/App";
import { GlobalStyles } from "./styles";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <HashRouter>
            <App />
            <GlobalStyles />
        </HashRouter>
    </React.StrictMode>,
);
