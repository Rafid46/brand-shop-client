/* eslint-disable react/no-unknown-property */
import { useLoaderData } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Banner from "./Components/Homepage/Banner";
import BrandSection from "./Components/Homepage/BrandSection";
import banner2 from "./assets//12983062_5109267.jpg";
import { motion } from "framer-motion";
function Home() {
  const brands = useLoaderData();
  return (
    <>
      <div
        style={{ backgroundImage: `url(${banner2})` }}
        className="bg-cover bg-fixed bg-center h-[600px]"
      >
        <div className="">
          <div>
            <NavBar></NavBar>
          </div>
          <Banner></Banner>
        </div>
      </div>
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-4  bg-full bg-fixed bg-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 1,
        }}
        // style={{ backgroundImage: `url(${banner3})` }}
      >
        {brands.map((brandss) => (
          <BrandSection key={brandss._id} brandss={brandss}></BrandSection>
        ))}
      </motion.div>
      {/* extra section */}
      {/* <section className="mb-30">
        <div className="flex flex-col lg:flex-row justify-between w-50 h-96 mx-auto">
          <div className="carousel-item">
            <img className="w-[500px]" src={banner4} />
          </div>
          <div className="carousel-item">
            <img className="w-[540px]" src={banner5} />
          </div>
          <div className="carousel-item">
            <img className="w-[540px]" src={banner6} />
          </div>
        </div>
      </section> */}
      <hr className="border-1 max-w-screen-lg mx-auto border-black lg:mt-10 lg:mb-10" />
      {/* extra section 2 */}
      <section className="">
        <div className="flex flex-wrap justify-between mt-50">
          <h1 className="text-3xl mt-30 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text leading-relaxed">
            Technology plays a pivotal role in shaping our world, affecting how
            we live, work, and interact. It has led to significant advancements
            in various industries, improved efficiency, and transformed the way
            we communicate and access information. Additionally, technology
            continues to evolve rapidly, driving innovation and opening up new
            possibilities for the future.
          </h1>
        </div>
      </section>
      <hr className="border-1 max-w-screen-lg mx-auto border-black mt-10 mb-10" />
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
      <div></div>
    </>
  );
}

export default Home;
