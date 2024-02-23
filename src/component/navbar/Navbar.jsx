
import { Link } from 'react-router-dom'
import call from '../../assets/call-nav.svg'
import clock from '../../assets/clock-nav.svg'
import location from '../../assets/maps-and-flags -nav.svg'
import menu from '../../assets/menu.svg'
import close from '../../assets/arrow.svg'
import { useState } from 'react'


const Navbar = () => {
  const [active, setActive] = useState(false)

  const showMenu = active ? "flex " : "hidden"
  const setBg = active ? "bg-[#16163F]" : "bg-none"
  return (
    <div className='text-white pt-3 '>
       <div className='max-w-screen-2xl mx-auto w-[95%] text-[1rem]'>
       <div className='flex flex-col lg:flex-row justify-between items-center '>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-1' >
          <div className='flex gap-2 items-center'>
          <img className='w-3 h-3 text-white' src={call} alt="" />
            <p className='pr-1 text-sm lg:text-[18px]'>(217)368-5931</p>
          </div>
          <div className='flex gap-2 items-center'>     
            <img className='w-3 h-3' src={clock} alt="" />
            <p className='text-sm lg:text-[18px]'>Monday - Friday: 8:00 AM - 4:30 PM</p>
            </div>
            <div className='block lg:hidden'>
            <div className='flex gap-1 items-center justify-center'>
            <div className=''><img className='w-3 h-3 self-center' src={location} alt="" /></div>
            <p className='text-center text-sm lg:text-[18px]'>301 W. State Street Jacksonville, Illinois 62650</p>
        </div>
            </div>
        </div>
        <div>
          <Link to="/">
          <img className='w-80' src="https://michaelhankinslaw.com/wp-content/uploads/2023/05/michael-hankins-law-office-jacksonville-il-logo-new.png" alt="" />
          </Link>
        </div>
       <div className='hidden lg:block'>
       <div className='flex  gap-1 justify-center items-center'>
            <img className='w-3 h-3' src={location} alt="" />
            <p className='text-[18px]'>301 W. State Street Jacksonville, Illinois 62650</p>
        </div>
       </div>
        </div>

        <div className='py-5 flex flex-col lg:flex-row justify-center items-center'>
          <div className='bg-[#16163F] p-2 rounded-md block lg:hidden mb-4'>
           <a href="#" onClick={()=>{
            setActive(!active)
           }}>  {!active ?  <img className='w-5 h-5' src={menu} alt="" /> : <img className='w-5 h-5'  src={close} alt="" />}</a>

          </div>
          <div className={`${showMenu} ${setBg} lg:block w-full flex-col`}>
          <ul className='memu-links flex flex-col lg:bg-none lg:flex-row items-center justify-center  gap-5 py-5 lg:py-0'>
                <li className=''>HOME</li>
                <li className=''>CUSTODY</li>
                <li className=''>CRIMINAL DEFENCE</li>
                <li className=''>DIVORCE</li>
                <li className=''>FAMILY-LAW</li>
                <li className=''>PROBATE, WILLS & ESTATE</li>
                <li className=''>TRAFIC LAW</li>
                <li className=''>PERSONAL INJURY</li>
                <Link to="/contactus" > <li>CONTACT US</li></Link>
            </ul>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Navbar