import { motion } from 'framer-motion';
import Link from 'next/link';
import Burger from '../components/Burger';

function Header() {
  return (
    <header className="header" id="header">
      <div className="header__content">
        <Link href="/">
          <motion.img
            src="./images/pb-logo.png"
            alt="Plant Boutique Logo"
            className="header__logo"
            initial={{ opacity: 0, x: -250 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
        </Link>

        <motion.nav
          className="header__nav"
          initial={{ opacity: 0, x: 250 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="header__items">
            {[
              ['Home', '/'],
              ['About', 'about'],
              ['Collection', 'collection'],
              ['Order', 'order'],
              ['Contact', 'contact'],
            ].map(([title, url]) => (
              <motion.li
                key={title}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400 }}
                whileTap={{ scale: 0.9 }}
                className="header__item"
              >
                <Link
                  href={url}
                  className="header__link"
                  // style={({ isActive}) =>({textDecoration: isActive? 'underline':''})}
                >
                  {title}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
        <Burger />
      </div>
    </header>
  );
}
export default Header;
