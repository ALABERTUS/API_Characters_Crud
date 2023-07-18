import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import ShowCharacters from "../componentes/ShowCharacters.jsx"
import CreateCharacter from "../componentes/CreateCharacter.jsx";
import EditCharacter from "../componentes/EditCharacter.jsx"
import DeleteCharacter from "../componentes/DeleteCharacter.jsx"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/characters",
        element: <ShowCharacters/>
    },
    {
        path: "/create",
        element: <CreateCharacter/>
    },
    {
    path: "/edit/:id",
    element: <EditCharacter/>
    },
    {
        path: "/delete/:id",
            element: <DeleteCharacter/>
        }
   
])