/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import NavBar from "../NavBar";
import ViewCart from "./ViewCart";
import { useState } from "react";
import Swal from "sweetalert2";

const MyCart = () => {
  const myCartProduct = useLoaderData();
  console.log(myCartProduct);
  const [products, setProducts] = useState(myCartProduct);
  //   const { name, price, rating } = myCartProduct;
  //   console.log(myCartProduct);
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://brand-shop-server-sandy-five.vercel.app/product/${_id}`,
          {
            method: "DELETE",
            headers: {
              "content-type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setProducts(products.filter((item) => item._id !== _id));
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div>
      <NavBar></NavBar>
      <section className="max-w-screen-xl mx-auto ml-16 lg:ml-20">
        <p className="text-4xl font-semibold text-center mb-10 text-blue-900">
          My Cart
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <ViewCart
              key={product._id}
              product={product}
              handleDelete={handleDelete}
            ></ViewCart>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyCart;
