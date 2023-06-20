import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import { fadeInUp, footerTruckAnim, staggerFooterContainer } from '../variants';


const Footer = ({ footerData }) => {

  const { truckImg,  text, logo, links } = footerData
  return (
    <footer className="bg-darkblue  lg:bg-transparent lg:bg-footer lg:bg-no-repeat lg:bg-left-bottom lg:min-h-[738px] pt-12 lg:pt-0 relative">
      <motion.div
        variants={staggerFooterContainer}
        initial='initial'
        whileInView={'animate'}
        viewport={{ once: false, amount: 0.1 }}
        className="container mx-auto lg:min-h-[738px] flex flex-col justify-between">
        <motion.div
          variants={footerTruckAnim}
          className="hidden lg:flex absolute -top-24 -left-[6.8%]">
          <Image src={truckImg} width={430} height={210} />
        </motion.div>
        <div className="hidden lg:flex absolute z-10 top-[22px] left-0">
        </div>
        <motion.div
          variants={fadeInUp}
          className="flex flex-col lg:flex-row items-center lg:pr-[95px] lg:gap-x-[95px] gap-y-10 lg:gap-y-0">
          <div className="text-white flex-1 border-l-[10px] border-accent-hover py-4 lg:mt-24">
            <p className="max-w-[330px] text-[20px] leading-[30px] ml-[40px]">{text}</p>
          </div>
          
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8019794885086!2d77.61535507499192!3d12.920445187390243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158cd9700275%3A0x42d9ce0156faee18!2sDr.%20Akshay&#39;s%20wecare%20multispeciality%20Dental%20clinic%20and%20Orthodontic%20center!5e0!3m2!1sen!2sin!4v1686921496200!5m2!1sen!2sin"
           width="600" 
           height="450" 
         
            loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"></iframe>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="py-[120px] flex flex-col lg:flex-row justify-between lg:pr-24">
          <div className="mb-6 mx-auto lg:mb-0 lg:mx-0">
            <Link href={'/'}>
              <a>
                <Image src={logo} width={170} height={41} />
              </a>
            </Link>
          </div>
          <ul className="flex flex-col items-center lg:flex-row gap-y-4 lg:gap-y-0 gap-x-[100px] text-center">
            {links.map((item, idx) => {
              return (
                <li className="text-white font-light hover:text-accent-hover" key={idx}><Link href={item.href}>{item.name}</Link></li>
              )
            })}
          </ul>
        </motion.div>
      </motion.div>
    </footer>
  )
};

export default Footer;
