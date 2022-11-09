import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/Firebase";
import {useAuthState} from 'react-firebase-hooks/auth'
import { signOut } from "firebase/auth";
const Navbar = () => {
	const [user, loading] = useAuthState(auth);
	const handleLogout = () => {
		signOut(auth)
		.then(() => {
			console.log('Log out')
		})
	}
  return (
      <div className=''>
          <header className="  bg-white text-gray-900 px-8 md:px-16 shadow ">
              <div className="container flex justify-between h-16 mx-auto">
                  <Link className="flex h-full items-center text-xl">
                      <p>Travel advisor</p>
                  </Link>
		<ul className="items-stretch hidden space-x-3 lg:flex">
			<li className="flex">
				<Link to='/' className="font-medium flex items-center px-4 -mb-1 border-b-2 border-transparent text-black">Home</Link>
			</li>
			<li className="flex">
				<Link to='/services' className="font-medium flex items-center px-4 -mb-1 border-b-2 border-transparent">Services</Link>
			</li>
			<li className="flex">
				<Link to='/blog' className="font-medium flex items-center px-4 -mb-1 border-b-2 border-transparent">Blog</Link>
			</li>
					  {
						  user ? <li className="flex">
						  <Link to='/myreview' className="font-medium flex items-center px-4 -mb-1 border-b-2 border-transparent">My review</Link>
					  </li>: ''
			}
		</ul>
				  {
					  user ? <div className="flex gap-4 items-center text-gray-50">
						  <Link to='/addservice' className="bg-green-500 px-4 py-3 rounded-full text-sm">Add service</Link>
						  <button onClick={handleLogout} className=" bg-black px-4 py-3 rounded-full text-sm">Sign out</button>
					  </div> : <div className="items-center flex-shrink-0 hidden lg:flex">
					  <Link to='/login' className="self-center px-8 py-3 font-semibold rounded-full bg-black text-gray-50">Sign in</Link>
				  </div>
		}
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-900">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
    </div>
  );
};

export default Navbar;
