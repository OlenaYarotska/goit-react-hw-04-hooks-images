import { useEffect } from "react";

import { createPortal } from "react-dom";
const modalRoot = document.querySelector("#modal-root");

function Modal({ largeImageURL, onClose }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleBackdropClick = (evt) => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };
  const handleKeyDown = (evt) => {
    if (evt.code === "Escape") {
      onClose();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={handleBackdropClick}>
      <div className="Modal">
        <img src={largeImageURL} alt="" />
      </div>
    </div>,
    modalRoot
  );
}
export default Modal;
