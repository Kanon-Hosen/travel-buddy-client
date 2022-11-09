import React, { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsHeart } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import { auth } from "../config/Firebase";

const DetailsServ = () => {
  document.title = "Details service"
  const { id } = useParams();
  const [service, setService] = useState({});
  const [user, loading] = useAuthState(auth);
  const [reviews, setReview] = useState([]);
  const [refres, setRefres] = useState();
  console.log("🚀 ~ file: DetailsServ.js ~ line 15 ~ DetailsServ ~ reviews", reviews)
  const location = useLocation();
  useEffect(() => {
    fetch(`http://localhost:5000/review/${id}`)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, [id, refres]);

  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);
  const review = [...reviews].reverse();
  console.log("🚀 ~ file: DetailsServ.js ~ line 17 ~ DetailsServ ~ review", review)

  // loader added
  if (loading) {
    return (
      <div
        className={`${
          loading ? "visible" : "hidden"
        } absolute top-16 left-0 z-50 flex items-center justify-center w-full h-screen bg-gray-900 bg-opacity-20`}
      >
        <div role="status" className="z-50">
          <svg
            className="inline z-50 mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  const handleDelete = (id) => {
    const procced = window.confirm('Delete your review');

    if (procced) {
      fetch(`http://localhost:5000/review/${id}`, {
        method: "DELETE"
      }).then(res => res.json())
        .then(() => {
        setRefres(!refres)
      })
    } else {
      return;
    }
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-5 my-5 w-full justify-between">
        <div className="md:w-1/2 w-full">
          <img className="w-full" src={service.image} alt="" />
        </div>
        <div className="md:w-1/2 w-full">
          <h1 className="text-2xl font-bold text-black">{service.title}</h1>
          <div className="flex items-center gap-1 my-4">
            <div
              className={` ${
                review[0]?._id ? "bg-green-500" : "bg-transparent"
              } w-5 h-5 rounded-full border-2 border-green-500 `}
            ></div>
            <div
              className={` ${
                review[0]?._id ? "bg-green-500" : "bg-transparent"
              } w-5 h-5  rounded-full border-2 border-green-500 `}
            ></div>
            <div
              className={` ${
                review[0]?._id ? "bg-green-500" : "bg-transparent"
              } w-5 h-5  rounded-full border-2 border-green-500 `}
            ></div>
            <div
              className={` ${
                review[0]?._id ? "bg-green-500" : "bg-transparent"
              } w-5 h-5  rounded-full border-2 border-green-500`}
            ></div>
            <div
              className={` ${
                review[0]?._id ? "bg-green-500" : "bg-transparent"
              } w-5 h-5 rounded-full border-2 border-green-500`}
            ></div>
            <div className="text-sm text-gray-600 font-semibold ml-2 underline">
              {review.length} review{" "}
            </div>
          </div>
          <p className="text-base my-5 text-gray-600">{service.des}</p>
          <p className="mt-3 -mb-1 text-gray-600">from</p>
          <div className="flex items-center justify-between">
            <p className="text-4xl font-bold">${service.price}</p>
            <button className="bg-green-500 px-7 py-4 rounded-full text-white font-semibold">
              Checkout
            </button>
          </div>
          <p className="-mt-1 text-gray-600">per day</p>
        </div>
      </div>

      <div className="my-10">
        <div>
          {user ? (
            <div>
              {
                <div>
                  <h1 className="my-10 text-3xl font-semibold">Contribute</h1>
                  <Link
                    to={`/${id}/writereview`} state={{from: location}}
                    className="border-black border-2 px-5 py-4 rounded-full text-black font-semibold my-6 hover:bg-black hover:text-gray-50 transition-colors"
                  >
                    Write a review
                  </Link>
                </div>
              }
            </div>
          ) : (
            <div className="">
              <h1 className="text-3xl font-semibold my-4">
                Please login to add a review
              </h1>
              <Link
                to="/login"
                className="px-5 py-3 bg-black rounded-full text-gray-50 mt-5"
              >
                Sign in
              </Link>
            </div>
          )}
        </div>
        <h1 className="text-2xl font-bold my-10 border-b-2">Reviews</h1>
        <div>
          {review[0]?._id ? (
            <div className="flex flex-col gap-5">
              {review.map((r) => {
                const rating = parseInt(r.rating);
                console.log(rating);
                return (
                  <div key={r._id} className="flex flex-col">
                    <div className="flex  gap-8">
                      <div className="w-16 bg-gray-500 h-16 rounded-full">
                        <img
                          className="w-full object-cover ring-2 h-full rounded-full shadow"
                          src={r?.image}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col w-4/5">
                        <p className="text-base font-semibold">{r?.username}</p>
                        <div className="flex gap-1 mt-3">
                          {[...Array(rating)].map((rating, i) => {
                            return (
                              <div
                                key={i}
                                className="w-5 h-5 rounded-full bg-green-500 flex  flex-col "
                              ></div>
                            );
                          })}
                        </div>
                        <div className="my-6">
                          <p className="text-base font-semibold ">
                            {r.reviewTitle}
                          </p>
                          <p className="mt-4 text-sm ">{r.reviewDes}</p>
                          {user?.displayName === r.username ? (
                            <div className="mt-6 flex items-center gap-7">
                              <Link to={`/editreview/${r._id}`} state={{from: location}} className="font-semibold text-base hover:underline transition-colors cursor-pointer">
                                Edit
                              </Link>
                              <p onClick={()=> handleDelete(r._id)} className="font-semibold text-base hover:underline transition-colors cursor-pointer">
                                Delete
                              </p>
                            </div>
                          ) : (
                            <div className="flex items-center gap-8 text-2xl">
                              <button className=" font-bold text-xl text-black  mt-5 rounded-full">
                                <BsHeart></BsHeart>
                              </button>
                              <button className=" font-bold text-xl text-black  mt-5 rounded-full">
                                <FaRegCommentDots className="focus:bg-red-500"></FaRegCommentDots>
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center">
              <p className="text-3xl font-semibold my-4 mb-10">
                No reviews yet. Be the first to share your thoughts!
              </p>
              <Link
                to={`/${id}/writereview`} state={{from: location}}
                className="bg-black text-gray-50 px-5 py-3 rounded-full"
              >
                Write a review
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsServ;
