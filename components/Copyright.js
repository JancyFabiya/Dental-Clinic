
import {motion} from 'framer-motion'
import {fadeInUp} from '../variants'

const Copyright = () => {
  return(
     <motion.div
     variants={fadeInUp}
     initial='initial'
     whileInView={'animate'}
      className="h-[140px] text-white">
     <div className="container mx-auto h-full">
      <div className="flex justify-between itemms-center h-full lg:pr-24">
      <p>Copyright &copy; FabiyaBrothers</p>
     
      </div>
     </div>
     </motion.div>
  )
};

export default Copyright;
