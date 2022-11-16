import Image from 'next/image';
import { MouseEvent } from 'react';
import { Product } from '../utils/types';

interface Props {
  isPopupCardOpen: boolean;
  cardData: Product | null;
  onOutsideClick: (event: MouseEvent<HTMLDivElement>) => void;
  onClose: () => void;
}

const PopupCard = ({
  isPopupCardOpen,
  cardData,
  onOutsideClick,
  onClose,
}: Props): JSX.Element => {
  return (
    <div className={`popup ${isPopupCardOpen ? 'popup_opened' : ''}`}>
      <div className="popup__overlay" onClick={onOutsideClick}>
        <div className="popup__container">
          <button
            className="popup__close-btn"
            type="button"
            onClick={onClose}
          />
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
        </div>
      </div>
    </div>
  );
};

export default PopupCard;
