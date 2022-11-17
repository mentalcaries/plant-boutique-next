import React, { ReactNode, MouseEvent} from 'react'

interface Props {
  isPopupOpen: boolean;
  onOutsideClick: (event: MouseEvent<HTMLDivElement>) => void;
  onClose: () => void;
  children?: ReactNode
}

const Popup = ({isPopupOpen, onOutsideClick, onClose, children}: Props) => {
  return (
    <div className={`popup ${isPopupOpen ? 'popup_opened' : ''}`}>
      <div className="popup__overlay" onClick={onOutsideClick}>
        <div className="popup__container">
          <button
            className="popup__close-btn"
            type="button"
            onClick={onClose}
          />
          {children}
        </div>
      </div>
    </div>
  )
}

export default Popup