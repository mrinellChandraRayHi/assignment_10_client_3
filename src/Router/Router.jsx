import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import AllArtAndCraftItems from "../Pages/AllArtAndCraftItems";
import AddCraftItem from "../Pages/AddCraftItem";
import MyArtAndCraftList from "../Pages/MyArtAndCraftList";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";


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
                element:<AllArtAndCraftItems/>
            },
            {
                path:'/addCraftItem',
                element:<AddCraftItem/>
            },
            {
                path:'/myArtAndCraftList',
                element:<MyArtAndCraftList/>
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