import { signOut } from "firebase/auth";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation } from "react-router-dom";
import { auth } from "../config/Firebase";

const MyReview = () => {
  const [reviews, setReviews] = useState([]);
    const [refres, setRefres] = useState(false);
    
  console.log("🚀 ~ file: MyReview.js ~ line 9 ~ MyReview ~ reviews", reviews);
  const [user] = useAuthState(auth);
  useEffect(() => {
    fetch(`http://localhost:5000/myreview?name=${user?.displayName}&email=${user.email}`, {
      headers: {
        authorization:`Bearer ${localStorage.getItem('adviserToken')}`
      }
    })
      .then((res) => {
        if (res.status === 403 || res.status === 401) {
          signOut(auth)
            .then(() => {
            
          })
        }
        return res.json()
      })
      .then((data) => {
        setReviews(data);
      });
  }, [user?.displayName, refres]);
    const location = useLocation();
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
      <h1 className="font-bold text-2xl my-10 border-b-slate-200 py-3 border-b-2">
        My Review: <span>{reviews?.length}</span>
      </h1>
          <div className="flex flex-col gap-10">
              {reviews.map((review) => {
            const rating = parseInt(review.rating)
          return (
            <div key={review._id}>
              <h1 className="font-semibold text-xl">{review.reviewTitle}</h1>
              <div className="flex items-center gap-1 my-2">
                {[...Array(rating)].map((r, i) => {
                  return (
                    <div key={i} className="w-5 h-5 bg-green-500 rounded-full"></div>
                  );
                })}
                  </div>
                  <p className="text-sm my-4">{review.reviewDes}</p>
                  <div className="mt-6 flex items-center gap-7">
                              <Link to={`/editreview/${review._id}`} state={{from: location}} className="font-semibold text-base hover:underline transition-colors cursor-pointer">
                                Edit
                              </Link>
                              <p onClick={()=> handleDelete(review._id)} className="font-semibold text-base hover:underline transition-colors cursor-pointer">
                                Delete
                              </p>
                            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyReview;
