import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Services = () => {
    const [services, setServices] = useState([]);
    const { id } = useParams();
    console.log("🚀 ~ file: Services.jsx ~ line 8 ~ Services ~ id", id)


  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data.data.slice(0, 3)));
  }, []);
  return (
    <div className="my-8">
          <h1 className="font-semibold text-3xl">Ways to tour Dhaka Division</h1>
          <p className="text-gray-600 text-sm">Book these experiences for a close-up look at Dhaka Division.</p>
      <div className="my-4 grid grid-cols-1 gap-6 md:grid-cols-3 h-screen w-full">
        {services.map((service) => {
          return (
            <div
              key={service._id}
              className=" cursor-pointer hover:shadow transition-shadow h-fit p-4 overflow-hidden"
            >
              <PhotoProvider>
                <PhotoView src={service.image}>
              <img
                className="w-full bg-gray-200 h-64"
                src={service.image}
                alt=""
                    />
                  </PhotoView>
                </PhotoProvider>

              <div className="mt-3 p-3">
                <h1 className="text-xl font-semibold hover:underline transition-all">
                  {service.title}
                </h1>
                <p className="my-2 text-sm ">{service.des.slice(0, 100)}...</p>
                <p className="font-semibold text-base mb-3">
                  form <span className="font-bold ">${service.price}</span> per
                  adult
                </p>
              </div>
              <Link
                to={`/services/${service._id}`}
                className="mt-3 px-4 py-3 bg-green-500 text-white font-semibold rounded-full text-sm"
              >
                View detaills
              </Link>
            </div>
          );
        })}
          </div>
          <div className="text-center my-4">
          <Link to='/services' className="px-8 border-2 border-black  py-3 hover:bg-black rounded-full text-black font-semibold hover:text-gray-50 transition-all">See all</Link>
        </div>
    </div>
  );
};

export default Services;
