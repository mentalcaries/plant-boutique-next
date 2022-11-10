import './ProductCard.css';
import {motion} from 'framer-motion';
import {Product} from '../../utils/types';

// fix type
type Props = {
  product: any;
  onOpen: () => void;
  onCardClick: (object: Product) => void;
};

function ProductCard({onOpen, product, onCardClick}: Props): JSX.Element {
  function handleClickProduct() {
    onOpen();
    onCardClick(product);
  }

  return (
    <article className="card" onClick={handleClickProduct}>
      <img src={product.coverImage} alt="Product" className="card__image" />
      <motion.div
        className="card__overlay"
        initial={{opacity: 0}}
        whileHover={{opacity: 1, x: 0}}
        transition={{duration: 0.4}}
      >
        <h2 className="card__title">{product.title}</h2>
      </motion.div>
    </article>
  );
}

export default ProductCard;