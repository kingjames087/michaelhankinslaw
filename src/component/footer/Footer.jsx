
import { Link } from 'react-router-dom';
import './Footer.css'
import email from '../../assets/email.png'
import call from '../../assets/call-nav.svg'
import location from '../../assets/maps-and-flags -nav.svg'
const Footer = () => {
  return (
   <div>
     <div className="footer-bg " >
      <div className="w-11/12 mx-auto max-w-screen-2xl flex items-center justify-center ">
      
      <Link>
      <img
          className="w-80 py-9"
          src="https://michaelhankinslaw.com/wp-content/uploads/2023/05/michael-hankins-law-office-jacksonville-il-logo-new.png"
          alt=""
        />
      </Link>
      </div>
   <div className="w-11/12 mx-auto max-w-screen-2xl z-50">
   <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 text-white text-center">
        <div>
          <h1 className=" text-yellow-400 text-2xl font-semibold">OUR OFFICE</h1>
          <div className='flex flex-col lg:flex-row items-center py-1 justify-center'>
            <img className='w-5 h-5' src={location} alt="" />
          <p className='py-4 hover:text-yellow-300'>301 W. State Street Jacksonville, IL 62650</p>
          </div>
          <div className='flex flex-col lg:flex-row items-center gap-2 justify-center'>
            <img className='w-5 h-5' src={call} alt="" />
            <p className='hover:text-yellow-300 text-center py-1'>(217)368-5931</p>
            </div>
           <div className='flex flex-col lg:flex-row gap-1 justify-center items-center'>
            <img className='w-4 h-4' src={email} alt="" />
           <a href="michaelhankinslaw@gmail.com" className='text-white text-xl'> michaelhankinslaw@gmail.com</a> 
           </div>
        </div>
        <div>
          <h1 className=" text-yellow-400 text-2xl font-semibold">PRACTICE AREAS</h1>
          <ul className='flex gap-2 py-4 flex-col'>
            <li className=' hover:text-yellow-300'>Child Custody</li>
            <li className='hover:text-yellow-300'>Criminal Defense</li>
            <li className='hover:text-yellow-300'>Divorce/Seperation</li>
            <li className='hover:text-yellow-300'>Family Law</li>
            <li className='hover:text-yellow-300'>Personal Injury Law</li>
            <li className='hover:text-yellow-300'>Probate, Wills, & Estate</li>
            <li className='hover:text-yellow-300'>Traffic Law</li>
            
          </ul>
        </div>
        <div>
          <h1 className=" text-yellow-400 text-2xl font-semibold">AREAS WE SERVE</h1>
          <ul className='flex gap-2 py-4 flex-col'>
            <li className='hover:text-yellow-300'>Brown County</li>
            <li className='hover:text-yellow-300'>Cass County</li>
            <li className='hover:text-yellow-300'>Greene County</li>
            <li className='hover:text-yellow-300'>Jersy County</li>
            <li className='hover:text-yellow-300'>Pittsfield, IL</li>
            <li className='hover:text-yellow-300'>Morgan County</li>
            <li className='hover:text-yellow-300'>Pike Cpounty</li>
            <li className='hover:text-yellow-300'>Schuyler County</li>
            <li className='hover:text-yellow-300'>Scott County</li>
          </ul>
        </div>
        <div>
          <h1 className=" text-yellow-400 text-2xl font-semibold">OFFICE HOURS</h1>
          <p className='py-4'>Monday - Friday</p>
          <p>8:00AM - 4:30PM</p>
        </div>
      </div>
   </div>
 
    </div>
   <div className='bg-black'>
   <div className='text-center py-7 w-11/12 mx-auto max-w-screen-2xl'>
      <p className='text-white text-sm'>&copy; 2024 Right Click Digital • All Rights Reserved.  </p>
    </div>
   </div>
   </div>
  );
};

export default Footer;
