import { ReactElement, useEffect } from "react";
import closeIcon from '/svg/close.svg'
import './Popup.css'

interface PopupProps {
  title: string
  img?: string
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Popup = ({title, img, isOpen, setIsOpen}: PopupProps): ReactElement => {

  const closeHandler = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(isOpen)
  }, [isOpen]);

  return (
    <div className={`overlay ${isOpen ? 'active' : ''}`}>
      <div className='popup'>
        <div className="popup__content"><img src={img} alt="" /></div>
        <h2 className="popup__title headline">{title}</h2>
        <span className='popup__close' onClick={closeHandler}>
          <img src={closeIcon} alt="" />
        </span>
      </div>
    </div>
  );
};

export default Popup