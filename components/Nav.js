import Link from "next/link";
import ReactWhatsapp from "react-whatsapp";

const Nav = ({navData, header}) => {
  const handleCall = () => {
    const phoneNumber = '+91 7676945766';

    window.location.href = `tel:${phoneNumber}`;
  }
  return(
   <nav className='flex items-center'>
  <ul className='flex gap-[66px]'>
 
     <li>
     
      <ReactWhatsapp number="+91 7676945766" message="Hello">
        <a className={` ${header ? 'text-primary' : 'text-white' } cursor-pointer hover:text-accent-hover transition`}>
       
          Whatsapp
        </a>
        </ReactWhatsapp>
    </li>
   

  </ul>
  </nav>
  )
};

export default Nav;
