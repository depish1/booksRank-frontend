import { MouseEvent, useState } from 'react';

import Modal, { IModalProps } from './Modal';

const useModal = (): [
  React.FC<IModalProps>,
  boolean,
  () => void,
  (e: MouseEvent) => void,
  () => void
] => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModalEvent = (e: MouseEvent) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    setIsModalOpen(false);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return [Modal, isModalOpen, openModal, closeModalEvent, closeModal];
};

export default useModal;
