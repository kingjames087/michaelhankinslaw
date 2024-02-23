import Navbar from "../../../../component/navbar/Navbar"
import './HeroSection.css'


const HeroSection = () => {
  return (
    <div className="hero-bg">
      <div className="">
      <Navbar/>
      </div>
      <div className="w-11/12 mx-auto max-w-screen-2xl z-50 py-16">

        <h1 className="text-4xl text-center text-white py-16"> CONTACT US </h1>
      </div>
    </div>
  )
}

export default HeroSection