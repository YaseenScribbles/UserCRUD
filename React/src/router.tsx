import { createBrowserRouter } from "react-router-dom";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Users from "./pages/Users";
import UserForm from "./pages/UserForm";
import Layout from "./components/layout";
import Dashboard from "./Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/users",
                element: <Users />,
            },
            {
                path: "/user-form",
                element: <UserForm />,
            },
            {
                path:"/dashboard",
                element:<Dashboard />
            }
        ],
    },
    {
        path: "/login",
        element: <LogIn />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
]);

export default router;
