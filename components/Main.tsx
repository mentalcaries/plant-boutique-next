import logo from '../public/images/pb-logo.png';
import { motion } from 'framer-motion';
import Image from 'next/image';

function Main() {
  return (
    <motion.section
      className="main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <motion.div className="main__content">
        <Image
          src={logo}
          alt="PB Logo with Golden Leaves"
          className="main__logo"
          width={240}
        />
        <h1 className="main__title">Chic Handcrafted Plant Decor</h1>
        <p className="main__subtitle">Welcome to the Plant Boutique</p>
      </motion.div>
    </motion.section>
  );
}
export default Main;
