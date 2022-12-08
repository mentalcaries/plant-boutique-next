import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <a
          href="https://instagram.com/theplantboutiquett"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="/images/ig.png"
            alt="instagram logo"
            className="footer__icon"
            width={28}
            height={28}
          />
        </a>
        <p className="footer__text">
          &copy; {new Date().getFullYear()} The Plant Boutique
        </p>
      </div>
    </footer>
  );
};

export default Footer;
