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
      <section className="mt-10 mb-10">
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
      </section>
    </div>
  );
};

export default BrandSection;
