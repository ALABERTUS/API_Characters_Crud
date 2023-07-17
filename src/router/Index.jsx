import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import ShowCharacters from "../componentes/ShowCharacters";
import CreateCharacter from "../componentes/CreateCharacter";
import EditCharacter from "../componentes/EditCharacter";
import DeleteCharacter from "../componentes/DeleteCharacter";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    
    {        
        path: "/Characters",
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