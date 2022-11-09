import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div>
            <div className='my-5 relative'>
                <img src="https://static.tacdn.com/img2/brand/home/homemar2022_dt_trans@2x.webp" alt="" />
                <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex item-center justify-center'>
                <div className='flex flex-col z-10 text-white items-center justify-center text-center space-y-2'>
                        <h1 className='font-semibold text-5xl text-green-50'>Planning a trip?</h1>
                        <p className='text-xl font-semibold text-gray-100'> Want someone to share the journey with? </p>
                        <p className='text-sm font-semibold pb-6'>
                        Your travel companion is just a click away.
                        </p>
                        <Link to='/services' className='hover:bg-green-600 transition-colors bg-green-500 font-semibold px-6 py-3 rounded-full'>View service</Link>
                </div>
            </div>
            </div>

        </div>
    );
};

export default Hero;