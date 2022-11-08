import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Layout = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='px-8 m-0 md:px-16'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Layout;