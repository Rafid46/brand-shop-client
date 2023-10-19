/* eslint-disable no-unused-vars */
import swal from "sweetalert";
import NavBar from "../../NavBar";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  //   const loader = useLoaderData();
  //   const { _id, name } = loader;
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const price = form.price.value;
    const products = { name, description, price, type, rating, brand, image };
    console.log(products);
    // fetch(`http://localhost:5000/brand/${_id}`, {
    //   method: "Put",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(products),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     // if (data.insertedId) {
    //     //   swal("Product updated", "", "success");
    //     // }
    //     // form.reset();
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };
  return (
    <div>
      <NavBar></NavBar>
      {/* // main div */}
      <h1>{name}</h1>
      <p>update</p>
      <section className="max-w-screen-sm mx-auto mb-10">
        <h1 className="text-4xl text-center my-10 font-semibold">
          UPDATE PRODUCTS
        </h1>
        <h1>{name}</h1>
        <form onSubmit={handleUpdateProduct}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-5 ml-32 lg:ml-0">
            <div>
              <label className="label">
                <span className="label-text text-xl font-semibold">Name</span>
              </label>
              <label className="">
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered rounded-none  input-accent w-full max-w-xs"
                />
              </label>
            </div>
            <div>
              <label className="label">
                <span className="label-text text-xl font-semibold">Image</span>
              </label>
              <label className="">
                <input
                  name="image"
                  type="text"
                  placeholder="Image"
                  className="input input-bordered rounded-none  input-accent w-full max-w-xs"
                />
              </label>
            </div>
            <div>
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Brand Name
                </span>
              </label>
              <label className="">
                <input
                  name="brand"
                  type="text"
                  placeholder="Brand Name"
                  className="input input-bordered rounded-none  input-accent w-full max-w-xs"
                />
              </label>
            </div>
            <div>
              <label className="label">
                <span className="label-text text-xl font-semibold">Type</span>
              </label>
              <label className="">
                <input
                  name="type"
                  type="text"
                  placeholder="type"
                  className="input input-bordered rounded-none  input-accent w-full max-w-xs"
                />
              </label>
            </div>
            <div>
              <label className="label">
                <span className="label-text text-xl font-semibold">Price</span>
              </label>
              <label className="">
                <input
                  name="price"
                  type="text"
                  placeholder="price"
                  className="input input-bordered rounded-none  input-accent w-full max-w-xs"
                />
              </label>
            </div>
            <div>
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Short description
                </span>
              </label>
              <label className="">
                <input
                  name="description"
                  type="text"
                  placeholder="short description"
                  className="input input-bordered rounded-none  input-accent w-full max-w-xs"
                />
              </label>
            </div>
            <div>
              <label className="label">
                <span className="label-text text-xl font-semibold">Rating</span>
              </label>
              <label className="">
                <input
                  name="rating"
                  type="text"
                  placeholder="Rate 1 out of 5"
                  className="input input-bordered rounded-none  input-accent w-full max-w-xs"
                />
              </label>
            </div>
            <div>
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Details
                </span>
              </label>
              <label className="">
                <input
                  name="details"
                  type="text"
                  placeholder="details"
                  className="input input-bordered rounded-none  input-accent w-full max-w-xs"
                />
              </label>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className="btn border-none w-1/2 lg:w-full mt-10 btn-success">
              Update Products
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateProduct;