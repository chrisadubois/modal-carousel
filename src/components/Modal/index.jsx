const Modal = ({ children, onClose, title, size }) => {
  return (
    <div class="modal">
      <div
        class="modal__content"
        style={{ "min-height": size, "max-height": size }}
      >
        <div class="modal__header">
          <span class="modal__header-title">{title}</span>
          <button class="modal__header-action" onClick={onClose}>
            &#9747;
          </button>
        </div>
        <div class="modal__body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
