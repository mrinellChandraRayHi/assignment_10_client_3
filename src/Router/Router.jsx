import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import AllArtAndCraftItems from "../Pages/AllArtAndCraftItems";
import AddCraftItem from "../Pages/AddCraftItem";
import MyArtAndCraftList from "../Pages/MyArtAndCraftList";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import PrivateRouter from "../PrivateRouter/PrivateRouter";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/allArtAndCraftItems',
                element:<PrivateRouter><AllArtAndCraftItems/></PrivateRouter>
            },
            {
                path:'/addCraftItem',
                element:<PrivateRouter><AddCraftItem/></PrivateRouter>
            },
            {
                path:'/myArtAndCraftList',
                element:<PrivateRouter><MyArtAndCraftList/></PrivateRouter>
            },
            {
                path:'/signUp',
                element:<SignUp/>
            },
            {
                path:'/signIn',
                element:<SignIn/>
            }
        ]
    },
]);