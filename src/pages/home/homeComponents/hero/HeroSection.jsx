import "./HeroSection.css";
import Navbar from "../../../../component/navbar/Navbar";

const HeroSection = () => {
  return (
    <div className="home-bg">
      {/* <div className="fixed top-0 left-0 w-full  bg-[#16163F] opacity-70 " /> */}

    <div className="z-50 relative pt-3 pb-28">
        
      <Navbar />
      <div className="py-24 text-center text-white">
        <h4 className="text-xl py-5">FORMER ASSISTANT STATE’S ATTORNEY OF ST. CLAIR COUNTY</h4>
        <h1 className="text-white text-2xl lg:text-6xl w-full lg:w-1/2 mx-auto ">LAW OFFICE OF MICHAEL A. HANKINS</h1>
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
