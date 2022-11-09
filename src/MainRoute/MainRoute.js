import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddService from '../pages/AddService';
import Blog from '../pages/Blog';
import DetailsServ from '../pages/DetailsServ';
import EditReview from '../pages/EditReview';
import EditService from '../pages/EditService';
import Home from '../pages/Home';
import Layout from '../pages/Layout';
import Login from '../pages/Login';
import MyReview from '../pages/MyReview';
import Register from '../pages/Register';
import Services from '../pages/Services';
import WriteReview from '../pages/WriteReview';
import PrivateRoute from '../privateRoute/PrivateRoute';

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
                    element:<PrivateRoute><AddService></AddService></PrivateRoute>
                },
                {
                    path: '/blog',
                    element:<Blog></Blog>
                },
                {
                    path: '/:id/writereview',
                    element:<PrivateRoute><WriteReview></WriteReview></PrivateRoute>
                },
                {
                    path: '/editservice/:id',
                    element:<PrivateRoute><EditService></EditService></PrivateRoute>
                },
                {
                    path: '/myreview',
                    element:<PrivateRoute><MyReview></MyReview></PrivateRoute>
                },
                {
                    path: '/editreview/:id',
                    element:<PrivateRoute><EditReview></EditReview></PrivateRoute>
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