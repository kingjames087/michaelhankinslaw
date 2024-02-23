import React from 'react'
import img2 from '../../../../assets/michael-hankins-law-office-jacksonville-il-badge-02.png'
import img1 from '../../../../assets/American-Association-for-Justice-Logo-better-res-1536x591.png'
import img3 from '../../../../assets/michael-hankins-law-office-jacksonville-il-badge-03.webp'

const Section2 = () => {
  return (
    <div className='bg-[#16163F0D] py-12'>
      <div className='w-11/12 max-w-screen-2xl mx-auto '>
      <h1 className='text-4xl text-center font-medium'>YOUR ATTORNEY FOR CRIMINAL DEFENSE, FAMILY LAW MATTERS, TRAFFIC VIOLATIONS, DUI CHARGES & MORE IN JACKSONVILLE ILLINOIS AND THROUGHOUT MORGAN COUNTY</h1>

      <p className='text-[#4A4A4A] text-lg text-center py-6'>Have you been the victim of a crime? Ensure you hire an attorney with the experience needed to win your case. Call Michael A. Hankins Attorney at Law for advice on all your legal issues. We’re a local law firm that is in the Jacksonville, Illinois, area with quality legal advice on a range of law practices. Whether you’ve been the victim of a slip and fall, auto accident, or something worse – our firm can provide the representation you need to win your case. We’ve got over 32 years of trial experience, and we’re putting it to work for you – call today!</p>
      </div>

      <div className=' w-11/12 mx-auto flex flex-col lg:flex-row gap-10 justify-center items-center py-7'>
        <div className=' w-full lg:w-96 h-52 bg-white p-7 shadow-xl flex items-center border-t-4 border-[#6C6B7D] hover:border-yellow-300 transition-0.3'>
            <img src={img1} alt="" />
        </div>
        <div className=' w-full lg:w-96 h-52 bg-white p-7 shadow-xl flex items-center border-t-4 border-[#6C6B7D] hover:border-yellow-300 transition-0.3'>
            <img src={img2} alt="" />
        </div>
        <div className='w-full lg:w-96 h-52 bg-white p-7 shadow-xl flex items-center border-t-4 border-[#6C6B7D] hover:border-yellow-300 transition-0.3'>
            <img src={img3} alt="" />
        </div>
     
      </div>
    </div>
  )
}

export default Section2