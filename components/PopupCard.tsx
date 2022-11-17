import Image from 'next/image';
import { MouseEvent } from 'react';
import { Product } from '../utils/types';
import Popup from './Popup';

interface PopupCardProps {
  isPopupCardOpen : boolean;
  cardData: Product;
  onOutsideClick: (event: MouseEvent<HTMLDivElement>) => void
  onClose: () => void
}

const PopupCard = ({
  isPopupCardOpen,
  cardData,
  onOutsideClick,
  onClose,
}: PopupCardProps) => {
  return (
    <Popup isPopupOpen={isPopupCardOpen} onClose={onClose} onOutsideClick={onOutsideClick}>
      <article className="popup__content">
        <h2 className="popup__title">{cardData?.title}</h2>
        <div className="popup__images">
          {cardData?.productImages.map((image, index) => (
            <Image
              src={image}
              alt=""
              className="popup__image"
              key={index}
              placeholder="blur"
            />
          ))}
        </div>
        {cardData?.description.map((paragraph, index) => {
          return (
            <p className="popup__text" key={index}>
              {paragraph}
            </p>
          );
        })}
      </article>
    </Popup>
  );
};

export default PopupCard;
