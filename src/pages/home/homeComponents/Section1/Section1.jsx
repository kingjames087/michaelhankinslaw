import React from 'react'
import lawImg from '../../../../assets/law1.webp'

const Section1 = () => {
  return (
    <div>

      <div className='w-11/12 mx-auto max-w-screen-2xl py-14'>
      <div className='flex flex-col lg:flex-row gap-14 items-center justify-center'>
            <img className='w-[469px] h-[605px]' src={lawImg} alt="" />
            <div>
                <h1 className=' text-2xl lg:text-4xl text-[#16163F] border-l-4 ps-1 border-yellow-400  '>PROVIDING YOU WITH THE LEGAL REPRESENTATION YOU DESERVE</h1>
                <p className='text-[#4A4A4A] text-xl pt-4'>We will work hard for you to achieve the best possible outcome. We specialize in the following practice areas:</p>
                <ul className='py-5 text-[#4A4A4A] list-disc ps-4'>
                    <li className='text-xl'>Criminal Defense</li>
                    <li className='text-xl'>Probates, Wills, & POAs</li>
                    <li className='text-xl'>DUI</li>
                    <li className='text-xl'>Family Law</li>
                    <li className='text-xl'>Traffic Law</li>
                    <li className='text-xl'>Child Custody</li>
                    <li className='text-xl'>Divorce</li>
                    <li className='text-xl'>Personal Injury Law</li>
                </ul>
                <button className=' py-4 px-5 bg-black text-white hover:bg-blue-900 '> REQUEST A FREE CONSULTATION</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Section1