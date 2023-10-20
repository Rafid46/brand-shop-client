import { useLoaderData } from "react-router-dom";
import NavBar from "../NavBar";
import ViewCart from "./ViewCart";
import { useState } from "react";

const MyCart = () => {
  const myCartProduct = useLoaderData();
  const [user, setUser] = useState();
  //   const { name, price, rating } = myCartProduct;
  //   console.log(myCartProduct);
  return (
    <div>
      <NavBar></NavBar>
      <section className="max-w-screen-xl mx-auto ml-16 lg:ml-20">
        <p className="text-4xl font-semibold text-center mb-10 text-blue-900">
          My Cart
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {myCartProduct.map((product) => (
            <ViewCart key={myCartProduct._id} product={product}></ViewCart>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyCart;
