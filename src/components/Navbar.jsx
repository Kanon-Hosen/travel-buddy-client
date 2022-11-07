import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <div className=''>
          <header className="  bg-white text-gray-900 px-8 md:px-16 shadow ">
              <div className="container flex justify-between h-16 mx-auto">
                  <Link className="flex h-full items-center text-xl">
                      <p>Travel advisor</p>
                  </Link>
		<ul className="items-stretch hidden space-x-3 lg:flex">
			<li className="flex">
				<Link className="font-medium flex items-center px-4 -mb-1 border-b-2 border-transparent text-black">Home</Link>
			</li>
			<li className="flex">
				<Link className="font-medium flex items-center px-4 -mb-1 border-b-2 border-transparent">Services</Link>
			</li>
			<li className="flex">
				<Link className="font-medium flex items-center px-4 -mb-1 border-b-2 border-transparent">Blog</Link>
			</li>
		</ul>
		<div className="items-center flex-shrink-0 hidden lg:flex">
			<button className="self-center px-8 py-3 font-semibold rounded-full bg-black text-gray-50">Sign up</button>
		</div>
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
