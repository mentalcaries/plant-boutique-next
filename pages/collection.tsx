import ProductCard from '../components/ProductCard';
import PopupCard from '../components/PopupCard';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { collection } from '../utils/constants';
import { Product } from '../utils/types';

type Props = {
  isPopupCardOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

function Collection({ onClose, onOpen }: Props): JSX.Element {
  const [cardData, setCardData] = useState<Product | null>(null);
  const [isPopupCardOpen, setIsPopupCardOpen] = useState<boolean>(false);

  function handleCardClick(card: Product) {
    setCardData(card);
  }

  function closePopups(): void {
    setIsPopupCardOpen(false);
  }

  function handleOpenPopup(): void {
    setIsPopupCardOpen(true);
  }

  useEffect(() => {
    const closeByEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closePopups();
      }
    };

    isPopupCardOpen && document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
  }, [isPopupCardOpen]);

  return (
    <motion.section
      className="collection"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <div className="collection__cards">
        {collection.map((product, index) => (
          <ProductCard
            onOpen={handleOpenPopup}
            product={product}
            onCardClick={handleCardClick}
            key={`${index}-${product.title}`}
          />
        ))}
      </div>
      <PopupCard
        onClose={closePopups}
        isPopupCardOpen={isPopupCardOpen}
        cardData={cardData}
      />
    </motion.section>
  );
}

export default Collection;
