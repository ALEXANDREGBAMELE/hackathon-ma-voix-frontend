import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import MainLayout from "./components/MainLayout.jsx";
import Sondage from "./page/Sondage.jsx";
import Candidats from "./page/Candidats.jsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <MainLayout />,
            },
            {
                path: "/sondage",
                element: <Sondage />,
            },
            {
                path: "/candidats",
                element: <Candidats />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#027314",
                    borderRadius: "10px",
                },
            }}
        >
            <RouterProvider router={router} />
        </ConfigProvider>
    </React.StrictMode>
);
