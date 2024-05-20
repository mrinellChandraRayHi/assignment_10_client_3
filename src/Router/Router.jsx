import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import AllArtAndCraftItems from "../Pages/AllArtAndCraftItems";
import AddCraftItem from "../Pages/AddCraftItem";
import MyArtAndCraftList from "../Pages/MyArtAndCraftList";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import ErrorPage from "../ErrorPage/ErrorPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/allArtAndCraftItems',
                element:<AllArtAndCraftItems/>,
                loader:()=>fetch('http://localhost:5000/crafts')
            },
            {
                path:'/addCraftItem',
                element:<AddCraftItem/>
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