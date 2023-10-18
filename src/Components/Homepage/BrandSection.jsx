/* eslint-disable react/prop-types */
const BrandSection = ({ brandss }) => {
  const { brand, image } = brandss;
  return (
    <div>
      <section className="mt-10 mb-10">
        <div className="card w-96 h-[400px] rounded-none glass">
          <figure>
            <img className="" src={image} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center text-3xl font-semibold">
              {brand}
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandSection;
