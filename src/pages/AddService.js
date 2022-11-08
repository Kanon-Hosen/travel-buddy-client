import React from 'react';
import { useNavigate } from 'react-router';

const AddService = () => {
    const navigate = useNavigate();

    const handlePost = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const des = e.target.description.value;
        const image = e.target.image.value;
        const price = e.target.price.value;
        const service = { title, des, price, image };
        try {
            fetch('http://localhost:5000/services/', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(service)
            })
            e.target.reset()
            navigate('/services')
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div className='flex w-full h-screen items-center justify-center'>
            <div className='w-96 shadow p-5'>
                <form onSubmit={handlePost} className='flex flex-col gap-3 w-full'>
                    <label htmlFor="title">Title</label>
                    <input name='title' className='p-3 border-2 ' type="text" placeholder='Service title' required/>
                    <label htmlFor="description">Description</label>
                    <input name='description' className='p-3 border-2 ' type="text" placeholder='Service description' required />
                    <label htmlFor="description">Price</label>
                    <input name='price' className='p-3 border-2 ' type="text" placeholder='Service price' required />
                    <label htmlFor="image">Image url</label>
                    <input name='image' className='p-3 border-2 ' type="text" placeholder='Service image' required />
                    <button type='submit' className='bg-black text-gray-50 p-4 rounded-full mt-4'>Add Service</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;