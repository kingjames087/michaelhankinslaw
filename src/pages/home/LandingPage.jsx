import Footer from "../../component/footer/Footer"
import Section1 from "./homeComponents/Section1/Section1"
import HeroSection from "./homeComponents/hero/HeroSection"
import Section2 from "./homeComponents/section2/Section2"
import Section3 from "./homeComponents/section3/Section3"
import Section4 from "./homeComponents/section4/Section4"
import Section5 from "./homeComponents/section5/Section5"
import Section6 from "./homeComponents/section6/Section6"


const LandingPage = () => {
  return (
    <div className="">
        <HeroSection/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Footer/>
    </div>
  )
}

export default LandingPage