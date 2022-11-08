import React, { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { auth } from "../config/Firebase";

const DetailsServ = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  const [user] = useAuthState(auth)
  const [review, setReview] = useState([]);
  useEffect(() => {
      fetch(`http://localhost:5000/review/${id}`)
          .then(res => res.json())
      .then(data=>setReview(data))
   },[id])
  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);
  return (
    <div>
      <div className="flex gap-5 my-5 w-full justify-between">
        <div className="w-1/2">
          <img className="w-full" src={service.image} alt="" />
        </div>
        <div className="w-1/2">
          <h1 className="text-2xl font-bold text-black">{service.title}</h1>
          <div className="flex items-center gap-1 my-4">
            <div
              className={` ${
                review.reviewSerId  ? "bg-green-500" : "bg-transparent"
              } w-5 h-5 rounded-full border-2 border-green-500 `}
            ></div>
            <div
              className={` ${
                review.reviewSerId  ? "bg-green-500" : "bg-transparent"
              } w-5 h-5  rounded-full border-2 border-green-500 `}
            ></div>
            <div
              className={` ${
                review.reviewSerId  ? "bg-green-500" : "bg-transparent"
              } w-5 h-5  rounded-full border-2 border-green-500`}
            ></div>
            <div
              className={` ${
              review.reviewSerId ? "bg-green-500" : "bg-transparent"
              } w-5 h-5 rounded-full border-2 border-green-500`}
            ></div>
            <div className="text-sm text-gray-600 font-semibold ml-2 underline">{review.length} review </div>
          </div>
          <p className="text-base my-5 text-gray-600">{service.des}</p>
          <p className="mt-3 -mb-1 text-gray-600">from</p>
          <div className="flex items-center justify-between">
            <p className="text-4xl font-bold">${service.price}</p>
            <button className="bg-green-500 px-7 py-4 rounded-full text-white font-semibold">
              Checkout
            </button>
          </div>
          <p className="-mt-1 text-gray-600">per adult</p>
        </div>
      </div>

      <div className="my-10">
      <div>
          {
            user ? <div>
              <h1 className="my-10 text-3xl font-semibold">Contribute</h1>
              <Link to={`/${id}/writereview`} className="border-black border-2 px-5 py-4 rounded-full text-black font-semibold my-6 hover:bg-black hover:text-gray-50 transition-colors">Write a review</Link>
            </div> :
              <div className="">
                <h1 className="text-3xl font-semibold my-4">You need to Sign in first</h1>
                <Link to='/login' className="px-5 py-3 bg-black rounded-full text-gray-50 mt-5">Sign in</Link>
            </div>
          }
        </div>
        <h1 className="text-2xl font-bold my-10 border-b-2">Reviews</h1>
        <div>
          {
            review.reviewSerId ? <div>
              {
                review.map(r => {
                  return (
                    <div>
                      
                    </div>
                  )
                })
                }
            </div> : 
              <div className="text-center">
                <p className="text-3xl font-semibold my-4 mb-10">
               No reviews yet. Be the first to share your thoughts!
                </p>
                <Link to={`/${id}/writereview`} className="bg-black text-gray-50 px-5 py-3 rounded-full">Write a review</Link>
              </div>
          }
          </div>
      </div>
    </div>
  );
};

export default DetailsServ;
