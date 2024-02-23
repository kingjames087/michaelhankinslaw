import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Footer from '../../component/footer/Footer'
import Section6 from '../home/homeComponents/section6/Section6'
import HeroSection from './contactContent/hero/HeroSection'
import Section2 from './contactContent/section2/Section2'

const ContactPage = () => {
  return (
    <div>
      <HeroSection/>
      <Section2/>
      <Section6/>
      <Footer/>
    </div>
  )
}

export default ContactPage