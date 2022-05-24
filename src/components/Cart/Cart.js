import "./cart.scss";
import Modal from "../UI/Modal";

const Cart = (props) => {
    return (
        <Modal modalVisible={props.modalVisible} closeModal={props.closeModal}>
            <div className="cart">
                <div className="cart__amount">
                    <span>Total amount:</span>
                    <span>$ 12.32</span>
                </div>
                <div className="cart__actions">
                    <button onClick={props.closeModal}>Close</button>
                    <button>Order</button>
                </div>
            </div>
        </Modal>
    );
};

export default Cart;
