import "./modal.scss";

const Modal = (props) => {
    return (
        <div
            className={`modal ${
                props.modalVisible ? "modal-opened" : "modal-closed"
            }`}
            onClick={props.closeModal}
        >
            <div className="modal__content">{props.children}</div>
        </div>
    );
};

export default Modal;
