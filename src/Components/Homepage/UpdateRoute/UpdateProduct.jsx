/* eslint-disable no-unused-vars */
import swal from "sweetalert";
import NavBar from "../../NavBar";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const loader = useLoaderData();
  const { _id, name } = loader;
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
    const updateProducts = {
      name,
      description,
      price,
      type,
      rating,
      brand,
      image,
    };
    console.log(updateProducts);
    fetch(`http://localhost:5000/brand/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProducts),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          swal("Product updated", "", "success");
        }
        form.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const { image, description, rating, price, brand, type, details } = loader;
  return (
    <div>
      <NavBar></NavBar>
      {/* // main div */}
      <section className="max-w-screen-sm mx-auto mb-10">
        <h1 className="text-4xl text-center my-10 font-semibold">
          UPDATE PRODUCTS
        </h1>
        <h1 className="text-3xl font-semibold">{name}</h1>
        <form onSubmit={handleUpdateProduct}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-5 ml-32 lg:ml-0">
            <div>
              <label className="label">
                <span className="label-text text-xl font-semibold">Name</span>
              </label>
              <label className="">
                <input
                  defaultValue={name}
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
                  defaultValue={image}
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
                  defaultValue={brand}
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
                  defaultValue={type}
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
                  defaultValue={price}
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
                  defaultValue={description}
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
                  defaultValue={rating}
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
                  defaultValue={details}
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
