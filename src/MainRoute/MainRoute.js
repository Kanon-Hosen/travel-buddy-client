import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddService from '../pages/AddService';
import Blog from '../pages/Blog';
import DetailsServ from '../pages/DetailsServ';
import Home from '../pages/Home';
import Layout from '../pages/Layout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Services from '../pages/Services';
import WriteReview from '../pages/WriteReview';

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
                    path: '/register',
                    element:<Register></Register>
                },
                {
                    path: '/',
                    element:<Home></Home>
                },
                {
                    path: '/addservice',
                    element:<AddService></AddService>
                },
                {
                    path: '/blog',
                    element:<Blog></Blog>
                },
                {
                    path: '/:id/writereview',
                    element:<WriteReview></WriteReview>
                },
                {
                    path: '/services/:id',
                    element:<DetailsServ></DetailsServ>
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