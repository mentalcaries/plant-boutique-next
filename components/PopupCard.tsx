import Image from 'next/image';
import { Product } from '../utils/types';

type Props = {
  isPopupCardOpen: boolean;
  onClose: () => void;
  cardData: Product | null;
};

function PopupCard({isPopupCardOpen, onClose, cardData}: Props): JSX.Element {
  return (
    <div className={`popup ${isPopupCardOpen ? 'popup_opened' : ''}`}>
      <div className="popup__overlay" onClick={onClose}>
        <div className="popup__container">
          {/* <button
            className="popup__close-btn"
            type="button"
            onClick={onClose}
          /> */}
          <article className="popup__content">
            <h2 className="popup__title">{cardData?.title}</h2>
            <div className="popup__images">

              {cardData?.productImages.map((image, index)=> 
              <Image src={image} alt="" className="popup__image" key={index} />)}
              
            </div>
            {cardData?.description.map((paragraph, index)=>{
              return <p className="popup__text" key={index}>{paragraph}</p>
            })}
 
          </article>
        </div>
      </div>
    </div>
  );
}

export default PopupCard;
