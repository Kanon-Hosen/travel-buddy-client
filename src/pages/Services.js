import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => setServices(data.data))
    },[])
    return (
        <div className='my-5'>
            <div>
                <Link to='/addservice' className='px-5 py-3 cursor-pointer bg-black text-gray-50 rounded-full'>Add service</Link>
            </div>
            <div className='my-7 grid grid-cols-3 gap-6'>
                {
                    services.map(service => {
                        return (
                            <div key={service._id} className='p-4'>  
                                <img className='w-full bg-gray-200 h-64' src={service.image} alt="" />
                                <div className='mt-3'>
                                    <h1 className='text-xl font-semibold'>{service.title}</h1>
                                    <p className='my-2 text-sm '>{service.des}</p>
                                    <div className='flex items-center gap-1 mb-1'>
                                        <div className={` ${service.review ? 'bg-green-500': 'bg-transparent'} w-3 h-3 rounded-full border-2 border-green-500 `}></div>
                                        <div className={` ${service.review ? 'bg-green-500': 'bg-transparent'} w-3 h-3  rounded-full border-2 border-green-500 `}></div>
                                        <div className={` ${service.review ? 'bg-green-500': 'bg-transparent'} w-3 h-3  rounded-full border-2 border-green-500`}></div>
                                        <div className={` ${service.review ? 'bg-green-500': 'bg-transparent'} w-3 h-3 rounded-full border-2 border-green-500`}></div>
                                        <div className='text-sm text-gray-600 font-semibold ml-2'> 1 </div>
                                    </div>
                                    <p className='font-semibold text-base'>form <span className='font-bold'>${service.price}</span> per adult</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Services;