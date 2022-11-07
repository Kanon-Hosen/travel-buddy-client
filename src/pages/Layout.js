import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const Layout = () => {
    return (
        <div >
            <Navbar></Navbar>
            <div className='px-8 md:px-16'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;