import {motion} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import instagram from '../public/images/ig.gif';
import mail from '../public/images/mail.svg';

function Order() {
  return (
    <motion.section
      className="order"
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {duration: 0.5}}}
      exit={{opacity: 0, transition: {duration: 0.3}}}
    >
      <div className="order__content">
        <h2 className="order__title">How To Order</h2>
        {/* <p className="order__subtitle">We're still growing!</p> */}
        <p className="order__subtitle">
          You want plant accessories. We have plant accessories. Let&apos;s chat on
          Instagram or via our Contact Form!
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
    </motion.section>
  );
}

export default Order;
