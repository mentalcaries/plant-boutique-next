import ProductCard from '../ProductCard/ProductCard';
import PopupCard from '../PopupCard/PopupCard';
import './Collection.css';
import {motion} from 'framer-motion';
import { collection } from '../../utils/constants';
import { useState } from 'react';
import { Product } from '../../utils/types';


type Props = {
  isPopupCardOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

function Collection({isPopupCardOpen, onClose, onOpen}: Props): JSX.Element {

  const [cardData, setCardData] = useState<Product | null>(null)

  function handleCardClick(card:Product){
    setCardData(card)
  } 

  return (
    <motion.section
      className="collection"
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {duration: 0.5}}}
      exit={{opacity: 0, transition: {duration: 0.3}}}
    >
      <div className="collection__cards">
        {collection.map(product=> 
          <ProductCard product={product} onOpen={onOpen} onCardClick={handleCardClick}/>
          )}
      </div>
      <PopupCard onClose={onClose} isPopupCardOpen={isPopupCardOpen} cardData={cardData} />
    </motion.section>
  );
}

export default Collection;
