import {motion} from 'framer-motion';

import portrait from '../public/images/portrait.jpg';
import handpot from '../public/images/about2.jpg';
import painting from '../public/images/painting.jpg';
import Image from 'next/image';

const About = () => {
  return (
    <motion.section
      className="about"
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {duration: 0.5}}}
      exit={{opacity: 0, transition: {duration: 0.3}}}
    >
      <div className="about__overlay">
        <div className="about__photos">
          <span className="about__photo">
            <Image src={handpot} alt="" />
          </span>
          <span className="about__photo">
            <Image src={painting} alt="" />
          </span>
        </div>
        <div className="about__content">
          <Image src={portrait} alt="Our founder" className="about__image" />
          <h2 className="about__title">Sharing Our Plant Love With Everyone</h2>
          <p className="about__subtitle">By People Who Really Love Plants</p>
          <p className="about__paragraph">
            What started as a small project to build a wooden trellis for a hoya
            quickly blossomed (heh) into The Plant Boutique. Turns out, you all
            really love plants too!
          </p>
          <p className="about__paragraph">
            Since then, we&apos;ve expanded our line-up to include wire trellises,
            hanging planters as well as custom orders (Have you seen the sloth
            trellis?!). Take a look around, you might just find something for
            your plant babies!
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
