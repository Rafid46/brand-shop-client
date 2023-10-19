import { useLoaderData } from "react-router-dom";
import NavBar from "./Components/NavBar";
import banner from "../src/assets/banner.jpg";
import Banner from "./Components/Homepage/Banner";
import BrandSection from "./Components/Homepage/BrandSection";
import banner2 from "./assets//12983062_5109267.jpg";
import banner3 from "./assets/banner.jpg";
function Home() {
  const brands = useLoaderData();
  return (
    <>
      <div
        style={{ backgroundImage: `url(${banner2})` }}
        className="bg-cover bg-fixed bg-center h-[600px]"
      >
        <div className="">
          <NavBar></NavBar>
          <Banner></Banner>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${banner3})` }}
        className="grid grid-cols-1 lg:grid-cols-3 bg-full bg-fixed bg-center"
      >
        {brands.map((brandss) => (
          <BrandSection key={brandss._id} brandss={brandss}></BrandSection>
        ))}
      </div>
    </>
  );
}

export default Home;
