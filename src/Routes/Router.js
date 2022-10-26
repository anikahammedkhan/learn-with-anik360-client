import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Courses from "../Components/Courses/Courses";
import CoursesLayout from "../Components/CoursesLayout/CoursesLayout";
import Error from "../Components/Error/Error";
import Faq from "../Components/Faq/Faq";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import SingleCourses from "../Components/SingleCourses/SingleCourses";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/', element: <Main />, children: [
            { path: '/', element: <Home /> },
            {
                path: '/courses',
                element: <CoursesLayout />,
                loader: () => fetch('https://learn-with-anik360-server.vercel.app/courseData/'),
                children: [
                    {
                        path: '/courses',
                        element: <Courses />,
                        loader: () => fetch('https://learn-with-anik360-server.vercel.app/courseData/'),
                    },
                    {
                        path: '/courses/:courseId',
                        element: <SingleCourses />,
                        loader: ({ params }) => fetch(`https://learn-with-anik360-server.vercel.app/courseData/${params.courseId}`),
                    }
                ]
            },
            { path: '/faq', element: <Faq /> },
            { path: '/blog', element: <Blog /> },
            { path: '/login', element: <Login /> },
            { path: '/register', element: <Register /> },
            { path: '*', element: <Error /> }
        ]
    },
]);

