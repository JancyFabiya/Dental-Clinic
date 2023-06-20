import Image from "next/image";
import Accordion from '../components/Accordion';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, staggerAccordionContainer, staggerTextContainer } from '../variants';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft,
         faCircleChevronRight,
         faCircleXmark  
 } from "@fortawesome/free-solid-svg-icons";

const Faq = ({ faqData }) => {
  const { pretitle, title, boyImg, accordions, gallery } = faqData
  const [loading,setLoading] = useState(true)

  // const [sliderNumer, setSlideNumber] = useState(0)
  // const [openModal, setOpenModal] = useState(false)
  // const handleOpenModal = (index)=>{
  //   setSlideNumber(index)
  //   setOpenModal(true)
  // }

  const [openModal, setOpenModal] = useState(false);
const [selectedImageIndex, setSelectedImageIndex] = useState(0);
const [direction, setDirection] = useState(null);

const handleOpenModal = (index) => {
  setSelectedImageIndex(index);
  setOpenModal(true);
};

const prevSlide = ()=>{
  selectedImageIndex === 0 ? setSelectedImageIndex(gallery.length -1 ) : setSelectedImageIndex(selectedImageIndex -1)
}

const nextSlide = ()=>{
  selectedImageIndex + 1 === gallery.length ? setSelectedImageIndex(0) : setSelectedImageIndex(selectedImageIndex + 1)
}

  return (
    <section className='min-h-[1150px] lg:bg-fag bg-no-repeat bg-right-top lg:pt-40 lg-pb-24 mb-[60px] lg:mb-[160px]'>
     

      <div className='container mx-auto'>
        <motion.div
        variants={staggerTextContainer}
        initial='initial'
        whileInView={'animate'}
        viewport={{once:false, amount:0.6}}
         className='relative flex flex-col lg:flex-row justify-center lg:justify-start items-center pt-8 pb-16 lg:pt-16 lg:pb-32'>
        
         <motion.div
          variants={fadeInRight}
          className='lg:max-w-[45%]'>
          {/* <h3 className='h3'>{pretitle}</h3> */}
          <h2 className='lead'>{title}</h2>
         </motion.div>
         <motion.div
         variants={fadeInLeft}
          className='lg:absolute lg:-right-16 lg:-top-16'>
          <Image src={boyImg} width={708} height={498} />
         </motion.div>
        </motion.div>


<div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
 {/* {openModal &&
      <div className='sliderWrap'>
      <FontAwesomeIcon icon={faCircleXmark} className="btnClose"/>
      <FontAwesomeIcon icon={faCircleChevronLeft} className="btnPrev"/>
      <FontAwesomeIcon icon={faCircleChevronRight} className="btnNext"/>

      
      
      
      </div>
      } */}
      {openModal && (
  <div className="sliderWrap">
    <FontAwesomeIcon
      icon={faCircleXmark}
      className="btnClose"
      onClick={() => setOpenModal(false)}
    />
    <FontAwesomeIcon
      icon={faCircleChevronLeft}
      className="btnPrev"
      // onClick={() => setDirection("prev")}
      onClick={prevSlide}
    />
    <FontAwesomeIcon
      icon={faCircleChevronRight}
      className="btnNext"
      // onClick={() => setDirection("next")}
      onClick={nextSlide}
    />
<div className="fullScreenImage">
<img src={gallery[selectedImageIndex].image} alt=""/>
</div>
   
  </div>
)}
  <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
   {gallery.map((glry,idx)=> {
    return(
      <div key={idx} className=" w-full overflow-hidden rounded-lg ">
      <Image src={glry.image}  width={708} height={498} className={`group-hover:opacity-75 duration-700 ease-in-out ${loading ? 'grayscale blur-2xl scale-110' : 'grayscale-0 blur-0 scale-100'} `}
        onLoadingComplete={()=>setLoading(false)}
        onClick={()=>handleOpenModal(idx)}
      />
      </div>
    )
   })}
  </div>
</div>

        {/* <motion.div
        variants={staggerAccordionContainer}
        initial='initial'
        whileInView={'animate'}
        viewport={{once: false, amount:0.4}}
         className='grid grid-cols-1 lg:grid-cols-2 gap-x-[20px] gap-y-[10px]'>
          {accordions.map((accordion, idx)=> {
            return(
              <Accordion accordion={accordion} key={idx}/>
            )
          })}
        </motion.div> */}
      </div>
    </section>
  )
};

export default Faq;
