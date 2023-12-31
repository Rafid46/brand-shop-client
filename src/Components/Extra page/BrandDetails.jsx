/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { Carousel, Navbar } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import image1 from "../../assets/10122379_18001771.jpg";
import image2 from "../../assets/electronic-device-balancing-concept.jpg";
import image3 from "../../assets/electronic-devices-balancing-concept.jpg";
const BrandDetails = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState(" ");
  console.log(search);
  console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      setSearch(input);
    }
  };
  //   const { name, price, image } = data;
  const { brand } = useParams();
  // const { _id } = data;
  useEffect(() => {
    fetch(`http://localhost:5000/added/${brand}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        if (data.length === null) {
          alert("no data");
        }
        console.log(data);
        // if (data.insertedId) {
        //   swal("Product added", "", "success");
        // }
        // form.reset();
      });
  }, [brand]);
  return (
    <div>
      <Navbar></Navbar>
      {/* <div className="carousel   mx-auto mt-10">
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
      </div> */}
      <div className="flex justify-center mt-10">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            value={input}
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs rounded-none"
          />
          <button type="" className="btn bg-red-500">
            Search
          </button>
        </form>
      </div>
      {!data.length > 0 ? (
        <p className="text-4xl text-center font-bold">No data found</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {data
            ?.filter((brandDetail) =>
              brandDetail.name.toLowerCase().includes(search)
            )
            .map((brandDetail) => (
              <div key={brandDetail._id} className="w-100 m-auto">
                <div className="card w-auto  glass max-w-screen-3xl mx-auto mt-10">
                  <figure>
                    <img className="h-[350px]" src={brandDetail.image} />
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
                    <Link to={`/details/${brandDetail._id}`}>
                      <button className="btn  bg-purple-300 mb-5">
                        Details
                      </button>
                    </Link>
                    <Link to={`/updateProduct/${brandDetail._id}`}>
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
      )}
    </div>
  );
};

export default BrandDetails;
