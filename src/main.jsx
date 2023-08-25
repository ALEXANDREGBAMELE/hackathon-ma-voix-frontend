import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import MainLayout from "./components/MainLayout.jsx";
import Sondage from "./page/Sondage.jsx";
import Candidats from "./page/Candidats.jsx";
import Register from "./page/Register.jsx";
import Login from "./page/Login.jsx";
import CandidatDetails from "./page/candidatDetail/CandidatDetails.jsx";
import { store } from "./store";
import { Provider } from "react-redux";
import Resultat from "./page/Resultat.jsx";
import ProfilCandidat from "./page/profilCandidat/ProfilCandidat.jsx";
import ProfilUtilisateur from "./page/profilUtilisateur/ProfilUtilisateur.jsx";

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
                path: "/candidats",
                element: <Candidats />,
            },
            {
                path: "/candidat/:id",
                element: <CandidatDetails />,
            },
            {
                path: "/candidats/:commune",
                element: <CandidatDetails />,
            },
            {
                path: "/sondage",
                element: <Sondage />,
            },
            {
                path: "/resultat",
                element: <Resultat />,
            },
            
            {
                path: "profil/utilisateur",
                element: <ProfilUtilisateur />,
            },
        ],
    },
    {
        path: "/profil/candidat",
        element: <ProfilCandidat />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/candidats",
        element: <Candidats />,
        children: [
            {
                path: "/candidats/:id",
                element: <CandidatDetails />,
            },
            {
                path: "/candidats/:commune/",
                element: <CandidatDetails />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#027314",
                        colorPrimaryBg: "#ff7200",
                        borderRadius: "10px",
                    },
                }}
            >
                <RouterProvider router={router} />
            </ConfigProvider>
        </Provider>
    </React.StrictMode>
);
