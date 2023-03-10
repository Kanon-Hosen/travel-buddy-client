import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const EditService = () => {
  document.title = "Edit Service";

  const [service, setService] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://server-phi-azure.vercel.app/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);

  const handleEdit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const des = e.target.description.value;
    const image = e.target.image.value;
    const price = e.target.price.value;
    const service = { title, des, price, image };
    try {
      fetch(`https://server-phi-azure.vercel.app/service/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(service),
      });
      e.target.reset();
      navigate("/services");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <div className="w-96 shadow p-5">
        <form onSubmit={handleEdit} className="flex flex-col gap-3 w-full">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            defaultValue={service.title}
            className="p-3 border-2 "
            type="text"
            placeholder="Service title"
            required
          />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            defaultValue={service.des}
            className="p-3 border-2 resize-none "
            type="text"
            placeholder="Service description"
            required
          />
          <label htmlFor="description">Price</label>
          <input
            name="price"
            defaultValue={service.price}
            className="p-3 border-2 "
            type="text"
            placeholder="Service price"
            required
          />
          <label htmlFor="image">Image url</label>
          <input
            name="image"
            defaultValue={service.image}
            className="p-3 border-2 "
            type="text"
            placeholder="Service image"
            required
          />
          <button
            type="submit"
            className="bg-black text-gray-50 p-4 rounded-full mt-4"
          >
            Update Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditService;
