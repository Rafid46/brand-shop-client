import { Link, useNavigate } from "react-router-dom";
/* eslint-disable react/prop-types */
const BrandSection = ({ brandss }) => {
  const { name, brand, image } = brandss;
  const navigate = useNavigate();
  const handleClick = () => {
    // navigate(`/brandDetails/${brand}`);
    navigate(`/brandDetails/${brand}`);
  };
  return (
    <div className="h-[600px]  max-w-screen-2xl mx-auto">
      {/* <section className="mt-10 mb-10">
        <div
          onClick={handleClick}
          className="card w-96 h-[400px] rounded-none glass"
        >
          <figure>
            <img className="" src={image} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center text-gray-100 text-4xl font-semibold">
              {brand}
            </h2>
          </div>
        </div>
      </section> */}
      <div
        onClick={handleClick}
        className="max-w-xs p-6 rounded-md shadow-md mt-10 mb-10 bg-gray-200 text-gray-50"
      >
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-2xl font-medium tracki uppercase text-violet-400">
            {brand}
          </span>
          <h2 className="text-xl font-semibold tracki">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
