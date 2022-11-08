import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router';
import { auth } from '../config/Firebase';

const WriteReview = () => {
    const { id } = useParams();
    const [service, setService] = useState({});
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => {
            setService(data)
        })
    }, [id])
    
    const handleReview = (e) => {
        e.preventDefault();

        const reviewDes = e.target.des.value;
        const reviewTitle = e.target.title.value;
        const review = {
            reviewDes,
            reviewTitle,
            reviewSerId: id
        }
        try {
            fetch(`http://localhost:5000/review`, {
                method: "POST",
                headers: {
                    "content-type":"application/json"
                },
                body: JSON.stringify(review)
            })
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div className='my-10'>
            <div className='flex items-center justify-between gap-5'>
                <img className='w-56' src={service.image} alt="" />
                <div>
                    <h1 className='text-base font-semibold my-4'>{service.title}</h1>
                    <p className='text-sm'>{service.des}</p>
                </div>
            </div>
            <div className='my-10 border-b-2 '>
                <h1 className='font-semibold text-xl my-4 '>Rate Your Experience</h1>
                <div className='flex items-center gap-1 mb-5'>
                    <div className='w-8 h-8 border-4 rounded-full border-green-500 cursor-pointer hover:bg-green-500 transition-colors'></div>
                    <div className='w-8 h-8 border-4 rounded-full border-green-500 cursor-pointer hover:bg-green-500 transition-colors'></div>
                    <div className='w-8 h-8 border-4 rounded-full border-green-500 cursor-pointer hover:bg-green-500 transition-colors'></div>
                    <div className='w-8 h-8 border-4 rounded-full border-green-500 cursor-pointer hover:bg-green-500 transition-colors'></div>
                    <div className='w-8 h-8 border-4 rounded-full border-green-500 cursor-pointer hover:bg-green-500 transition-colors'></div>
                </div>
            </div>
            <form onSubmit={handleReview} className='flex flex-col gap-5'>
       
                <label htmlFor="name">User name</label>
                <input type="text" className='border-2 p-4'  name='name' placeholder='Your name' defaultValue={user?.displayName}/>
                <label htmlFor="image">Image url</label>
                <input type="text" className='border-2 p-4' name='image' placeholder='Your image' defaultValue={user?.photoURL} />
                <label htmlFor="des">Review title</label>
                <textarea className='border-2 p-4 resize-none' name="title" id="" cols="2" rows="1" placeholder='Review title'></textarea>
                <label htmlFor="des">Leave a review</label>
                <textarea className='border-2 p-4 resize-none' name="des" id="" cols="4" rows="4" placeholder='What was your favorite part of your exprience?'></textarea>
                <div className='w-72'>
                <button className='px-10 py-3 w-full mt-3 bg-black text-gray-50'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default WriteReview;