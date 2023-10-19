/* eslint-disable react/prop-types */
const ViewCart = ({ product }) => {
  console.log(product);
  const { name, details, image, description, price, brand, rating } =
    product.data;
  return (
    <div>
      <div className="">
        <div className="card card-side w-96 bg-base-100 shadow-xl">
          <figure>
            <img className="w-[300px] h-[300px]" src={image} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl font-semibold">{name}</h2>
            <p>{rating}</p>
            <p>{description}</p>
            <div className="card-actions justify-end">
              <button className="btn  text-2xl font-semibold bg-green-400 ">
                {price}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCart;
