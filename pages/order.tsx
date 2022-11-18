import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import background from '../public/images/order.jpg';

import instagram from '../public/images/ig.gif';
import mail from '../public/images/mail.svg';

const Order = () => {
  return (
    <motion.section
      className="order"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.3,  duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <div className="order__image">
        <Image
          src={background}
          alt="Coloured plant pots"
          fill
          style={{ objectFit: 'cover' }}
          priority={true}
        />
        {/* Photo by <a href="https://unsplash.com/es/@magali_merzougui?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Magali Merzougui</a>*/}
      </div>
      <div className="order__content">
        <div className="order__container">
          <h2 className="order__title">How To Order</h2>
          {/* <p className="order__subtitle">We're still growing!</p> */}
          <p className="order__subtitle">
            You want plant accessories. We have plant accessories. Let&apos;s
            chat on Instagram or via our Contact Form!
          </p>
          <div className="order__icons">
            <a
              href="https://instagram.com/theplantboutiquett"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={instagram} alt="Instagram" className="order__icon" />
            </a>
            <Link href="/contact">
              <Image src={mail} alt="Email" className="order__icon" />
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Order;
