import { createPortal } from 'react-dom';
import { ModalProps } from './Modal.types';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';

const Modal = ({
  isOpen,
  onClose,
  children
}: ModalProps) => {
  useBodyScrollLock(isOpen);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-4"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden animate-in fade-in zoom-in duration-200">
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
