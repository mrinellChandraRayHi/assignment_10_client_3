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
import UpdateCraftItems from "../Pages/UpdateCraftItems";
import Details from "../Pages/Details";


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
                element:<PrivateRouter><AllArtAndCraftItems/></PrivateRouter>,
                loader:()=>fetch('https://assignment-10-server-3.vercel.app/crafts')
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
                path:'/updateCraftItems/:id',
                element:<PrivateRouter><UpdateCraftItems/></PrivateRouter>,
                loader:({params})=>fetch(`https://assignment-10-server-3.vercel.app/crafts/${params.id}`)
            },
            {
                path:'/details/:id',
                element:<PrivateRouter><Details/></PrivateRouter>,
                loader:({params})=>fetch(`https://assignment-10-server-3.vercel.app/crafts/${params.id}`)
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