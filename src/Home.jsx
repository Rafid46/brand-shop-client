import { useLoaderData } from "react-router-dom";
import NavBar from "./Components/NavBar";
import banner from "../src/assets/banner.jpg";
import Banner from "./Components/Homepage/Banner";
import BrandSection from "./Components/Homepage/BrandSection";

function Home() {
  const brands = useLoaderData();
  return (
    <>
      <div
        style={{ backgroundImage: `url(${banner})` }}
        className="bg-cover bg-fixed bg-center h-[600px]"
      >
        <div className="">
          <NavBar></NavBar>
          <Banner></Banner>
        </div>
      </div>
      <div className="grid grid-cols-1 ml-[90px] lg:ml-[140px] lg:grid-cols-3 gap-4 max-w-screen-xl mx-auto">
        {brands.map((brandss) => (
          <BrandSection key={brandss._id} brandss={brandss}></BrandSection>
        ))}
      </div>
    </>
  );
}

export default Home;
