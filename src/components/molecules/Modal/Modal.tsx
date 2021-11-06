import { MouseEvent } from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.scss';

export interface IModalProps {
  handleCloseModal: (e: MouseEvent) => void;
}

const Modal: React.FC<IModalProps> = ({ children, handleCloseModal }) =>
  ReactDOM.createPortal(
    <div
      className={styles.modalContainer}
      onClick={handleCloseModal}
      role="presentation"
    >
      {children}
    </div>,
    document.body
  );

export default Modal;
