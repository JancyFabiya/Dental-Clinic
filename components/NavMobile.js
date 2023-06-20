import ReactWhatsapp from "react-whatsapp";


const NavMobile = () => {

  const handleCall = () => {
    const phoneNumber = '+91 7676945766';

    window.location.href = `tel:${phoneNumber}`;
  }
  return (
    <nav className="bg-white w-full p-4">
      <ul className="flex flex-col gap-y-6">
       
            <li>
   
      <ReactWhatsapp number="+91 7676945766" message="Hello">
        <a className="text-[#18c3c9] hover:text-accent-hover cursor-pointer">
          Whatsapp
        </a>
        </ReactWhatsapp>
    </li>
     <li>
      <a onClick={handleCall} className="text-[#18c3c9] hover:text-accent-hover cursor-pointer">
      Call Now
      </a>
    </li>
        
      </ul>
    </nav>
  )
};

export default NavMobile;
