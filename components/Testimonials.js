import Slider from '../components/Slider';
import {motion} from 'framer-motion';
import {fadeInUp, staggerTextContainer} from '../variants';


const Testimonials = ({testimonialData}) => {
  const {pretitle, title, clients} = testimonialData

  const handleButtonClick = () => {
    window.open('https://www.google.com/search?hl=en-IN&gl=in&q=Dr.+Akshay%27s+wecare+multispeciality+Dental+clinic+and+Orthodontic+center,+VP+Rd,+Old+Madiwala,+Dollar+Scheme+Colony,+1st+Stage,+BTM+Layout,+Bengaluru,+Karnataka+560068&ludocid=4817107781599030808&lsig=AB86z5W0pGrYEFUfnI6hXtykqYWU#lrd=0x3bae158cd9700275:0x42d9ce0156faee18,3', '_blank');
  
  };

  return(
     <section className='relative min-h-[600px]'>
      <motion.div
       variants={staggerTextContainer}
        initial='initial'
        whileInView={'animate'}
        viewport={{once: false,amount: 0.6}}
         className='container mx-auto'>
        <div
       
         className='flex flex-col lg:flex-row'>
          <motion.div
          variants={fadeInUp}
           className='lg:w-[40%]'>
            <h3 className='h3'>{pretitle}</h3>
            <h2 className='h2 mb-6'>{title}</h2>
          </motion.div>
          <motion.div
          variants={fadeInUp}
           className='lg:w-[60%] lg:absolute lg:right-0'>
          <Slider clients={clients}/>
        </motion.div>
        </div>
            <motion.button 
          variants={fadeInUp}
            className='btn' onClick={handleButtonClick}>Write A Review</motion.button>

      </motion.div>
     </section>
  )
};

export default Testimonials;
