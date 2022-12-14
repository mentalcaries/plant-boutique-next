import logo from '../public/images/pb-logo.png';
import { motion } from 'framer-motion';
import hero from '../public/images/hero.jpg';
import Image from 'next/image';

function Main() {
  return (
    <motion.section
      className="main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <motion.div
        className="main__content"
        initial={{ opacity: 0, y: 75 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="main__container">
          <Image
            src={logo}
            alt="PB Logo with Golden Leaves"
            className="main__logo"
            width={240}
          />
          <h1 className="main__title">Chic Handcrafted Plant Decor</h1>
          <p className="main__subtitle">Welcome to the Plant Boutique</p>
        </div>
      </motion.div>
    </motion.section>
  );
}
export default Main;
