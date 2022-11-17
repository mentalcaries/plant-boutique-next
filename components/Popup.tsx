import React, { ReactNode, MouseEvent} from 'react'


interface Props {
  isPopupOpen: boolean;
  onOutsideClick?: (event: MouseEvent<HTMLDivElement>) => void;
  onClose?: () => void;
  children?: ReactNode
  type? : 'alert'
}

const Popup = ({isPopupOpen, onOutsideClick, onClose, children, type}: Props) => {
  return (
    <div className={`popup ${isPopupOpen ? 'popup_opened' : ''}`}>
      <div className="popup__overlay" onClick={onOutsideClick}>
        <div className={`popup__container ${type === 'alert'? 'popup__container_alert':'' }`}>
          <button
            className={`popup__close-btn ${type === 'alert'? 'popup__close-btn_alert' : ''}`}
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