import styles from '../styles/order.module.css'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import background from '../public/images/order.jpg';
import instagram from '../public/images/ig.gif';
import mail from '../public/images/mail.svg';

const Order = () => {
  return (
    <section className={styles.order}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
        className={styles.order__image}
      >
        {/* <Image
          src={background}
          alt="Coloured plant pots"
          fill
          style={{ objectFit: 'cover' }}
          priority={true}
          placeholder="blur"
        /> */}
        {/* Photo by <a href="https://unsplash.com/es/@magali_merzougui?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Magali Merzougui</a>*/}
      </motion.div>
      <motion.div
        className={styles.order__content}
        initial={{ opacity: 0, y: 75 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <div className={styles.order__container}>
          <h2 className={styles.order__title}>How To Order</h2>
          <p className={styles.order__subtitle}>
            You want plant accessories. We have plant accessories. Let&apos;s
            chat on Instagram or via our Contact Form!
          </p>
          <div className={styles.order__icons}>
            <a
              href="https://instagram.com/theplantboutiquett"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={instagram} alt="Instagram" className={styles.order__icon}/>
            </a>
            <Link href="/contact">
              <Image src={mail} alt="Email" className={styles.order__icon} />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Order;
