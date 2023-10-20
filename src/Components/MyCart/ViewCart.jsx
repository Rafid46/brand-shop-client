import swal from "sweetalert";

/* eslint-disable react/prop-types */
const ViewCart = ({ product }) => {
  const handleDelete = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/product/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // if (data.deletedCount > 0) {
        //   swal("Poof! Your imaginary file has been deleted!", {
        //     icon: "success",
        //   });
        // }
        console.log("deleted");
      });
    //   } else {
    //     swal("Your imaginary file is safe!");
    //   }
    // });
  };
  console.log(product);
  const { _id, name, details, image, description, price, brand, rating } =
    product;
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
              <button className="btn  text-2xl font-semibold bg-blue-200 ">
                {price}
              </button>
              <button
                onClick={() => handleDelete(_id)}
                className="btn font-semibold bg-red-500 "
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCart;
