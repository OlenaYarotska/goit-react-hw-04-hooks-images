import { useEffect } from "react";
import { createPortal } from "react-dom";
const modalRoot = document.querySelector("#modal-root");

function Modal({ largeImageURL, onClose }) {
  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);
  const handleBackdropClick = (evt) => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

  // useEffect(() => {
  //    window.addEventListener("keydown", handleKeyDown);
  // })
  // useEffect(() => {
  //    window.removeEventListener("keydown", handleKeyDown);
  // })
  // const handleKeyDown = (evt) => {
  //   if (evt.code === "Escape") {
  //     onClose();
  //   }
  // };
  // const handleBackdropClick = (evt) => {
  //   if (evt.currentTarget === evt.target) {
  //     this.props.onClose();
  //   }
  // };
  return createPortal(
    <div className="Overlay" onClick={handleBackdropClick}>
      <img src={largeImageURL} alt="" />
    </div>,
    modalRoot
  );
}
export default Modal;
