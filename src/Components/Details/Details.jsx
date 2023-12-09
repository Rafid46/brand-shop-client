/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NavBar from "../NavBar";
import swal from "sweetalert";
import { AuthContext } from "../../Providers/AuthProviders";

const Details = () => {
  // const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const { name, brand, price, details, description, rating, image } = data;
  console.log(data);
  const handleAddToCart = () => {
    const mainCart = { ...data };
    delete mainCart._id;
    // const product = { data };
    fetch("http://localhost:5000/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(mainCart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal("added to my cart", "", "success");
        }
      });
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className="flex justify-center">
        <div className="card w-96 glass">
          <figure>
            <img src={image} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
              <button
                onClick={handleAddToCart}
                className="btn bg-orange-500 rounded-none"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
