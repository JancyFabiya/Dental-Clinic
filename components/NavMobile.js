import Link from "next/link";
import ReactWhatsapp from "react-whatsapp";


const NavMobile = ({ navData }) => {

  const handleCall = () => {
    const phoneNumber = '+91 7760021889';

    window.location.href = `tel:${phoneNumber}`;
  }
  return (
    <nav className="bg-white w-full p-4">
      <ul className="flex flex-col gap-y-6">
        {/* {navData.map((item, idx) => {

          const { name, href } = item
          return ( */}
            <li>
   
      <ReactWhatsapp number="+91 7760021889" message="Hello">
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
            {/* <li key={idx}>
              <Link href={href}>
                <a className="text-accent-hover hover:text-accent">{name}</a>
              </Link>
            </li> */}
          {/* )
        })} */}
      </ul>
    </nav>
  )
};

export default NavMobile;
