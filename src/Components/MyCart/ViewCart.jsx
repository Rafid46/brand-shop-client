/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const ViewCart = ({ product, handleDelete }) => {
  const { _id, name, details, image, description, price, brand, rating } =
    product;
  return (
    <div>
      <div className="">
        <div className="card card-side w-96 bg-base-100 shadow-xl">
          <figure>
            <img className="" src={image} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl font-semibold">{name}</h2>
            <p>{rating}</p>
            <p>{description}</p>
            <div className="card-actions justify-end">
              <button className="btn  text-2xl font-semibold bg-blue-200 ">
                {price}
              </button>
              <button
                onClick={() => handleDelete(_id)}
                className="btn font-semibold bg-red-500 "
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCart;
