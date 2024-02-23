import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='text-white'>
       <div className='max-w-screen-2xl mx-auto w-11/12'>
       <div className='flex justify-between items-center '>
        <div className='flex' >
            <p>(217)2433434</p>
            <p>Monday - Friday: 8:00 AM - 4:30 PM</p>
        </div>
        <div>
            <img className='w-80' src="https://michaelhankinslaw.com/wp-content/uploads/2023/05/michael-hankins-law-office-jacksonville-il-logo-new.png" alt="" />
        </div>
        <div>
            <p>301 W. State Street Jacksonville, Illinois 62650</p>
        </div>
        </div>
        <div className='py-5'>
            <ul className='flex gap-5'>
                <li>HOME</li>
                <li>CUSTODY</li>
                <li>CRIMINAL DEFENCE</li>
                <li>DIVORCE</li>
                <li>FAMILY-LAW</li>
                <li>PROBATE, WILLS & ESTATE</li>
                <li>TRAFIC LAW</li>
                <li>PERSONAL INJURY</li>
                <Link to="/contactus" > <li>CONTACT US</li></Link>
            </ul>
        </div>
       </div>
    </div>
  )
}

export default Navbar