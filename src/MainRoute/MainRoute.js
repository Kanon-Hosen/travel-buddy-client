import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../pages/Layout';
import Login from '../pages/Login';
import Services from '../pages/Services';

const MainRoute = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout></Layout>,
            children: [
                {
                    path: '/login',
                    element:<Login></Login>
                },
                {
                    path: '/',
                    element:<Home></Home>
                },
                {
                    path: '/services',
                    element:<Services></Services>
                }
            ]
        }
    ])
    return (
        <RouterProvider router={router}>
        </RouterProvider>
    );
};

export default MainRoute;