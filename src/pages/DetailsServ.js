import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";

const DetailsServ = () => {
  const { id } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);
  return (
    <div className="flex gap-5 my-5 w-full justify-between">
      <div className="w-1/2">
        <img className="w-full" src={service.image} alt="" />
      </div>
      <div className="w-1/2">
        <h1>{service.title}</h1>
        <div className="flex items-center gap-1 mb-1">
          <div
            className={` ${
              service.review ? "bg-green-500" : "bg-transparent"
            } w-3 h-3 rounded-full border-2 border-green-500 `}
          ></div>
          <div
            className={` ${
              service.review ? "bg-green-500" : "bg-transparent"
            } w-3 h-3  rounded-full border-2 border-green-500 `}
          ></div>
          <div
            className={` ${
              service.review ? "bg-green-500" : "bg-transparent"
            } w-3 h-3  rounded-full border-2 border-green-500`}
          ></div>
          <div
            className={` ${
              service.review ? "bg-green-500" : "bg-transparent"
            } w-3 h-3 rounded-full border-2 border-green-500`}
          ></div>
          <div className="text-sm text-gray-600 font-semibold ml-2"> 1 </div>
              </div>
              <p>{service.des}</p>
              <div>
                  <p>{service.price}</p>
                  <button>Checkout</button>
              </div>
      </div>
    </div>
  );
};

export default DetailsServ;
