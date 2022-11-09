import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {FiEdit2} from 'react-icons/fi'
import { BsFillTrashFill } from 'react-icons/bs';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/Firebase';
const Services = () => {
    const [user] = useAuthState(auth)
    const [services, setServices] = useState([]);
    const [refres, setRefres] = useState(false);
    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => setServices(data.data))
    }, [refres])
    
    // Delete services :::::::::::::::::::::::::::::
    const handleDelete = (id) => {
        const proced = window.confirm("Delete Service");

        if (proced) {
            fetch(`http://localhost:5000/service/${id}`, {
                method:"DELETE"
            }).then(res => res.json())
                .then(() => {
                setRefres(!refres)
            })
        } else {
            return
        }
    }
    return (
        <div className='my-5'>
            <div className='my-7 grid grid-cols-3 gap-6'>
                {
                    services.map(service => {
                        return (
                            <Link  key={service._id} className='p-4 h-full hover:shadow'>  
                                <img className='cursor-pointer w-full bg-gray-200 h-64' src={service.image} alt="" />
                                <div className='mt-3'>
                                    <h1 className='text-xl font-semibold'>{service.title}</h1>
                                    <p className='my-2 text-sm '>{service.des.slice(0, 100)}...</p>
                                    <p className='font-semibold text-base'>form <span className='font-bold'>${service.price}</span> per adult</p>
                                </div>
                                <Link to={`/services/${service._id}`}><button className="mt-5 px-4 py-3 bg-green-500 text-white font-semibold rounded-full text-sm">View details</button></Link>
                                {
                                    user ? <div className='flex items-center gap-5 text-xl mt-5'>
                                        <Link to={`/editservice/${service._id}`} className='px-5 py-5 bg-gray-200 text-black rounded-full'>
                                    <FiEdit2></FiEdit2>
                                        </Link>
                                        <Link onClick={()=>handleDelete(service._id)} className='px-5 py-5 bg-gray-200 text-black rounded-full'>
                                    <BsFillTrashFill></BsFillTrashFill>
                                        </Link>
                                </div> : ''
                                }
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Services;