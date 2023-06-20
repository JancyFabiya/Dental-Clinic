import Link from "next/link";
import ReactWhatsapp from "react-whatsapp";

const Nav = ({navData, header}) => {
  const handleCall = () => {
    const phoneNumber = '+91 7760021889';

    window.location.href = `tel:${phoneNumber}`;
  }
  return(
   <nav className='flex items-center'>
  <ul className='flex gap-[66px]'>
  {/* {navData.map((item,idx)=> { */}

    {/* const {name,href} = item */}
    {/* return( */}
     {/* <li key={idx}> */}
     <li>
      {/* <Link href={href}> */}
      {/* <Link> */}
      <ReactWhatsapp number="+91 7760021889" message="Hello">
        <a className={` ${header ? 'text-primary' : 'text-white' } cursor-pointer hover:text-accent-hover transition`}>
          {/* {name} */}
          Whatsapp
        </a>
        </ReactWhatsapp>
      {/* </Link> */}
    </li>
    {/* <li>
      <a onClick={handleCall} className={` ${header ? 'text-primary' : 'text-white' } cursor-pointer hover:text-accent-hover transition`}>
      Call Now
      </a>
    </li> */}
    {/* <li>
      <a className={` ${header ? 'text-primary' : 'text-white' } cursor-pointer hover:text-accent-hover transition`}>
      Get Directions
      </a>
    </li> */}
    {/* ) */}
  {/* })} */}

  </ul>
  </nav>
  )
};

export default Nav;
