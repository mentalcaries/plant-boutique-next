import { motion } from 'framer-motion';
import { Product } from '../utils/types';
import Image from 'next/image';

// fix type
type Props = {
  product: any;
  onOpen: () => void;
  onCardClick: (object: Product) => void;
};

const ProductCard = ({ onOpen, product, onCardClick }: Props): JSX.Element => {
  const handleClickProduct = () => {
    onOpen();
    onCardClick(product);
  };

  return (
    <article className="card" onClick={handleClickProduct}>
      <Image
        src={product.coverImage}
        alt="Product"
        className="card__image"
        placeholder="blur"
        priority={true}
      />
      <motion.div
        className="card__overlay"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        whileTap={{ opacity: 1 }}
        exit={{ opacity: 0}}
      >
        <h2 className="card__title">{product.title}</h2>
      </motion.div>
    </article>
  );
};

export default ProductCard;
