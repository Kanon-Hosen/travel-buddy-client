import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { BsFacebook, BsGoogle } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../config/Firebase';
const Register = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSignUp = (e) => {
        e.preventDefault();
        setLoading(true);
        const name = e.target.name.value;
        const email = e.target.email.value;
        const image = e.target.image.value;
        const password = e.target.password.value;

        createUserWithEmailAndPassword(auth, email, password)
            .then(currentUser => {
                console.log(currentUser);
                updateProfile(auth.currentUser, {
                    displayName: name , photoURL: image
                }).then(() => {
                    e.target.reset();
                    setLoading(false);
                    navigate('/')
                })
            })
            .catch(err => {
                console.log(err.message);
                e.target.reset();
                setLoading(false);
        })
    }
    // google::::::::::::::::::::

    const hanedleGoogle = () => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then(() => {
                console.log('Success')
                navigate('/')
        })
    }
    return (
        <div className='flex items-center justify-center w-full h-full my-10'>
                        <div className={`${loading ? 'visible' : 'hidden'} absolute top-16 flex items-center justify-center w-full h-screen bg-gray-900 bg-opacity-20`}>
            <div role="status" className='z-50'>
    <svg className="inline z-50 mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
</div>
</div>
            <div className='w-96 shadow p-6'>
                <h1 className='text-4xl font-bold mb-8'>Sign up</h1>
                <div>
                    <form onSubmit={handleSignUp} className='flex flex-col gap-2'>
                        <label htmlFor="username">Username</label>
                        <input name='name' className='border p-3 border-gray-500 rounded mb-2' type="text" required placeholder='Username' />
                        <label htmlFor="image">Image url</label>
                        <input name='image' className='border p-3 border-gray-500 rounded mb-2' type="text" required placeholder='Image url' />
                        <label htmlFor="Email">Email</label>
                        <input name='email' className='border p-3 border-gray-500 rounded mb-2' type="email" required placeholder='Enter your email' />
                        <label htmlFor="password">Password</label>
                        <input name='password' className='border p-3 border-gray-500 rounded mb-5' type="password"required placeholder='Enter your password' />
                        <button type="submit" className='btn bg-green-500 px-4 py-4 text-white font-semibold text-base border-none rounded'>Sign up</button>
                    </form>
                    <p className='text-center mt-5 font-semibold'>Or register with </p>
                    <div className='mt-3 flex items-center justify-center gap-8'>
                        <div onClick={hanedleGoogle} className='flex items-center text-base font-semibold gap-1 cursor-pointer hover:text-green-500 transition-colors'>
                            <BsGoogle></BsGoogle>
                            <p>Google</p>
                        </div>
                        <div className='flex items-center text-base font-semibold gap-1 cursor-pointer hover:text-green-500 transition-colors'>
                            <BsFacebook></BsFacebook>
                            <p>Facebook</p>
                        </div>
                    </div>
                    <p className='mt-3 text-center text-sm'>Already have an account ? <Link className='font-semibold hover:underline transition-all' to='/login'>Sign in</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;