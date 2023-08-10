import Header from '../components/Header'
import Image from 'next/image';
import { motion } from 'framer-motion'
import { staggerContainer, girlAnim, fadeInDown } from '../variants'
const Hero = ({ heroData, headerData, navData }) => {
  const { title,  girlImg } = heroData

  return (
    <section className='bg-hero bg-no-repeat bg-left-top min-h-[800px] lg:min-h-[950px] lg:mb-80'>

      <motion.div
       variants={staggerContainer}
        initial='initial'
        animate='animate'
        className="container mx-auto relative min-h-[800px] lg:min-h-[950px]">

       

        <motion.h1
          variants={fadeInDown}
          // className='h1 max-w-[740px] text-white pt-[12rem] '>
          className='h1 max-w-[740px] text-white pt-[16rem] text-4xl md:text-5xl lg:text-6xl'>

          {title}
        </motion.h1>

        

        <motion.div
          variants={girlAnim}
          className='hidden lg:flex absolute bottom-0 '>

          <Image src={girlImg} width={406} height={695} />

        </motion.div>

       
      </motion.div>
    </section>
  )
};

export default Hero;
