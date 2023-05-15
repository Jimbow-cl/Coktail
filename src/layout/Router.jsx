import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import Recette from "../Recette";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,

    },
    {
        path: "/recette",
        element: <Recette />,

    },
])


export default router