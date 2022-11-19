import ProductCard from '../components/ProductCard';
import PopupCard from '../components/PopupCard';
import { useState, useEffect, MouseEvent, UIEventHandler } from 'react';
import { motion } from 'framer-motion';
import { collection } from '../utils/constants';
import { Product } from '../utils/types';

type Props = {
  isPopupCardOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

const Collection = (): JSX.Element => {
  const [cardData, setCardData] = useState<Product | null>(null);
  const [isPopupCardOpen, setIsPopupCardOpen] = useState<boolean>(false);

  const handleCardClick = (card: Product) => {
    setCardData(card);
  };

  const handleOpenPopup = (): void => {
    setIsPopupCardOpen(true);
  };

  const closePopups = (): void => {
    setIsPopupCardOpen(false);

    setCardData(null);
  };

  const handleOutsideClick = (event: MouseEvent<HTMLDivElement>): void => {
    if ((event.target as Element).className === 'popup__overlay') {
      closePopups();
    }
  };

  useEffect(() => {
    const closeByEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closePopups();
      }
    };
    const cardCollection = document.querySelector(
      '.collection__cards'
    ) as HTMLDivElement;
    cardCollection.style.overflow = 'hidden';

    isPopupCardOpen && document.addEventListener('keydown', closeByEscape);
    return () => {
      document.removeEventListener('keydown', closeByEscape);
      cardCollection.style.overflow = 'unset';
    };
  }, [isPopupCardOpen]);

  return (
    <motion.section
      className="collection"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.5 } }}
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
        onOutsideClick={handleOutsideClick}
        isPopupCardOpen={isPopupCardOpen}
        cardData={cardData}
      />
    </motion.section>
  );
};

export default Collection;
