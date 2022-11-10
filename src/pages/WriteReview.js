import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useNavigate, useParams } from "react-router";
import { auth } from "../config/Firebase";

const WriteReview = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  document.title = "Write Review";

  const { id } = useParams();
  const [service, setService] = useState({});
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(`https://server-phi-azure.vercel.app/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, [id]);

  const handleReview = (e) => {
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
      reviewSerId: id,
    };
    try {
      fetch(`https://server-phi-azure.vercel.app/review`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review),
      }).then(() => {
        navigate(from, { replace: true });
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="my-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-5">
        <img className="md:w-56 w-full" src={service.image} alt="" />
        <div>
          <h1 className="md:text-base text-xl font-semibold my-4">
            {service.title}
          </h1>
          <p className="text-sm">{service.des}</p>
        </div>
      </div>
      <div className="my-10 border-b-2 ">
        <h1 className="font-semibold text-xl my-4 ">Rate Your Experience</h1>
      </div>
      <form onSubmit={handleReview} className="flex flex-col gap-5">
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
          className="border-2 p-4"
          name="name"
          placeholder="Your name"
          defaultValue={user?.displayName}
        />
        <label htmlFor="image">Image url</label>
        <input
          required
          type="text"
          className="border-2 p-4"
          name="image"
          placeholder="Your image"
          defaultValue={user?.photoURL}
        />
        <label htmlFor="des">Review title</label>
        <textarea
          required
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
          className="border-2 p-4 resize-none"
          name="des"
          id=""
          cols="4"
          rows="4"
          placeholder="What was your favorite part of your exprience?"
        ></textarea>
        <div className="w-72">
          <button className="px-10 py-3 w-full mt-3 bg-black text-gray-50">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default WriteReview;
