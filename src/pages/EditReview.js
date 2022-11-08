import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router';
import { auth } from '../config/Firebase';

const EditReview = () => {
    const { id } = useParams()
    const [user] = useAuthState(auth)
    const navigate = useNavigate();
    const [review, setReview] = useState({});
    const from = `/services/${review.reviewSerId}` || '/';

    console.log("🚀 ~ file: EditReview.js ~ line 15 ~ EditReview ~ review", review)
    useEffect(() => {
        fetch(`http://localhost:5000/editreview/${id}`)
            .then(res => res.json())
        .then(data => setReview(data))
    },[id])
    const handleEdit = (e) => {
        e.preventDefault();
        const rating = e.target.rating.value;
        const reviewDes = e.target.des.value;
        const reviewTitle = e.target.title.value;
        const username = e.target.name.value;
        const image = e.target.image.value;
        const review = {
          rating,
          username,
          image,
          reviewDes,
          reviewTitle,
        };

        fetch(`http://localhost:5000/editreview/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body:JSON.stringify(review)
        })
            .then(() => {
                navigate(from)
            console.log("update success")
        })
    }
    return (
        <div className="my-10">
        <div className="my-10 border-b-2 ">
          <h1 className="font-semibold text-xl my-4 ">Rate Your Experience</h1>
        </div>
        <form onSubmit={handleEdit} className="flex flex-col gap-5">
          <label htmlFor="rating">Choose Rating:</label>
  
          <select name="rating" className="p-4 border-2" required>
            <option value="1">1 star rating</option>
            <option value="2">2 star rating</option>
            <option value="3">3 star rating</option>
            <option value="4">4 star rating</option>
            <option value="5" selected>
              5 star rating
            </option>
          </select>
          <label htmlFor="name">User name</label>
          <input
            required
            type="text"
            className="border-2 p-4 pointer-events-none bg-gray-200"
            name="name"
            placeholder="Your name"
            defaultValue={user?.displayName}
          />
          <label htmlFor="image">Image url</label>
          <input
            required
            type="text"
            className="border-2 p-4 pointer-events-none bg-gray-200"
            name="image"
            placeholder="Your image"
            defaultValue={user?.photoURL}
          />
          <label htmlFor="des">Review title</label>
          <textarea
                    required
                    defaultValue={review.reviewTitle}
            className="border-2 p-4 resize-none"
            name="title"
            id=""
            cols="2"
            rows="1"
            placeholder="Review title"
          ></textarea>
          <label htmlFor="des">Leave a review</label>
          <textarea
                    required
                    defaultValue={review.reviewDes}
            className="border-2 p-4 resize-none"
            name="des"
            id=""
            cols="4"
            rows="4"
            placeholder="What was your favorite part of your exprience?"
          ></textarea>
          <div className="w-72">
            <button className="px-10 py-3 w-full mt-3 bg-black text-gray-50">
              Update
            </button>
          </div>
        </form>
      </div>
    );
};

export default EditReview;