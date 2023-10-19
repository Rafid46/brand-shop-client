/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { Carousel } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import image1 from "../../assets/gsmarena_020.jpg";
import image2 from "../../assets/isolated-phone-grey-background.jpg";
import image3 from "../../assets/modern-smartphone-with-simple-environment.jpg";
const BrandDetails = () => {
  const [data, setData] = useState([]);
  //   const { name, price, image } = data;
  const { brand } = useParams();
  const { _id } = data;
  useEffect(() => {
    fetch(`http://localhost:5000/added/${brand}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        // if (brand === null) {
        //   alert("no data");
        // }
        //   console.log(data);
        // if (data.insertedId) {
        //   swal("Product added", "", "success");
        // }
        // form.reset();
      });
  }, [brand]);
  return (
    <div>
      <div className="carousel max-w-screen-md mr-50 lg:ml-96 mx-auto mt-10">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={image1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={image2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={image3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={image1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {data?.map((brandDetail) => (
          <div className="">
            <div className="card w-80 glass max-w-screen-3xl mx-auto mt-10">
              <figure>
                <img src={brandDetail.image} />
              </figure>
              <div className="flex items-center justify-between mx-5">
                <div className="card-body">
                  <h2 className="card-title">{brandDetail.name}</h2>
                  <h2 className="card-title text-3xl font bold">
                    {brandDetail.brand}
                  </h2>
                </div>
                <div>
                  <p className="card-title">Price: {brandDetail.price}</p>
                  <p className="card-title">Rating: {brandDetail.rating}</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <button className="btn w-1/2 bg-purple-300 mb-5">
                  Details
                </button>
                <Link to={`updateProduct/brand/${brandDetail._id}`}>
                  <button className="btn  bg-green-500 mb-5">Update</button>
                </Link>
                {/* <Link to="/updateProduct">
                  <button className="btn  bg-green-500 mb-5">Update</button>
                </Link> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandDetails;
