import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";

import Layout from "../components/Layout";
import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';

import PATH from './paths'

const router= createBrowserRouter([
    {
        path : '/',
        element : <Layout/>,

        children : [
            {
                path: PATH.HOME,
                element: <HomePage/>
            },
            {
                path: PATH.SEARCH,
                element: <SearchPage/>
            }
        ]
    }
]);

export default router;