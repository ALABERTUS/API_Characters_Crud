import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import CreateCharacter from "../componentes/CreateCharacter.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/create",
        element: <CreateCharacter/>
    }
])