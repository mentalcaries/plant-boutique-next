import { motion } from 'framer-motion';
import { Product } from '../utils/types';
import Image from 'next/image';
import { toBase64, shimmer } from '../utils/constants';

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
      <Image src={product.coverImage} alt="Product" className="card__image" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}/>
      <motion.div
        className="card__overlay"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="card__title">{product.title}</h2>
      </motion.div>
    </article>
  );
};

export default ProductCard;
