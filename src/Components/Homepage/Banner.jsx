const Banner = () => {
  return (
    <div>
      <h1 className="text-7xl font-bold text-center">
        <span className="mb-10 text-7xl font-bold text-center bg-gradient-to-r from-[rgb(0,3,178)] to-[rgba(255,255,255,1)] bg-clip-text text-transparent">
          Inspiring Innovation
        </span>
        <br />
        <div className="mt-10">
          <span className="text-7xl font-bold text-center bg-gradient-to-r from-[rgb(0,3,178)] to-[rgba(255,255,255,1)] bg-clip-text text-transparent">
            and Discovery
          </span>
        </div>
      </h1>
      <div className="flex justify-center mt-10">
        <button className="btn text-white border-2 rounded-none text-center bg-transparent">
          Check More
        </button>
      </div>
    </div>
  );
};

export default Banner;
