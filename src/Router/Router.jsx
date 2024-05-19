import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import AllArtAndCraftItems from "../Pages/AllArtAndCraftItems";
import AddCraftItem from "../Pages/AddCraftItem";
import MyArtAndCraftList from "../Pages/MyArtAndCraftList";


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
            }
        ]
    },
]);