
import { Link } from 'react-router-dom'
import call from '../../assets/call-nav.svg'
import clock from '../../assets/clock-nav.svg'
import location from '../../assets/maps-and-flags -nav.svg'

const Navbar = () => {
  return (
    <div className='text-white'>
       <div className='max-w-screen-2xl mx-auto w-11/12'>
       <div className='flex justify-between items-center '>
        <div className='flex items-center justify-center gap-1' >
            <img className='w-3 h-3 gap-4 text-white' src={call} alt="" />
            <p className='pr-2'>(217)2433434</p>
            <img className='w-3 h-3' src={clock} alt="" />
            <p>Monday - Friday: 8:00 AM - 4:30 PM</p>
        </div>
        <div>
          <Link to="/">
          <img className='w-80' src="https://michaelhankinslaw.com/wp-content/uploads/2023/05/michael-hankins-law-office-jacksonville-il-logo-new.png" alt="" />
          </Link>
        </div>
        <div className='flex gap-1 justify-center items-center'>
            <img className='w-3 h-3' src={location} alt="" />
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