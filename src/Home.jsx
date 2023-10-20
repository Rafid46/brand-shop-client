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
      <footer>
        <footer className="footer p-10 bg-neutral text-neutral-content">
          <nav>
            <header className="footer-title">Services</header>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </footer>
    </>
  );
}

export default Home;
