import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./pages/_layout/defaultLayout";
import { Home } from "./pages/app/home";


export const Router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            { path: '/', element: <Home />}
        ]
    }
])
