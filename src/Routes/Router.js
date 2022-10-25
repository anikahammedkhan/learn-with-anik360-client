import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Courses from "../Components/Courses/Courses";
import Faq from "../Components/Faq/Faq";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/', element: <Main />, children: [
            { path: '/', element: <Home /> },
            { path: '/courses', element: <Courses /> },
            { path: '/faq', element: <Faq /> },
            { path: '/blog', element: <Blog></Blog> },
            { path: '/login', element: <Login></Login> },
            { path: '*', element: <h1>404 Not Found</h1> }
        ]
    },
]);

