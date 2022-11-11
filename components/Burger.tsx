import { MouseEvent, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Burger = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function toggleMenu() {
    setMenuIsOpen(!menuIsOpen);
  }

  function handleOutsideClick(event: MouseEvent): void {
    if (
      menuIsOpen &&
      (event.target as Element).className === 'burger__overlay'
    ) {
      toggleMenu();
    }
  }

  useEffect(() => {
    const closeByEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuIsOpen(false);
      }
    };

    menuIsOpen && document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
  }, [menuIsOpen]);

  return (
    <motion.nav
      className="burger"
      initial={{ opacity: 0, x: 250 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button
        className={`hamburger hamburger--vortex ${
          menuIsOpen ? 'is-active' : ''
        }`}
        type="button"
        onClick={toggleMenu}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <AnimatePresence>
        {menuIsOpen && (
          <motion.div
            className="burger__overlay"
            onClick={handleOutsideClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.05 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              className={`burger__items 
            }`}
            >
              {[
                ['Home', '/'],
                ['About', 'about'],
                ['Collection', 'collection'],
                ['Order', 'order'],
                ['Contact', 'contact'],
              ].map(([title, url]) => (
                <li className="burger__item" key={title} onClick={toggleMenu}>
                  <Link href={url} className="burger__link">
                    {title}
                  </Link>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Burger;
