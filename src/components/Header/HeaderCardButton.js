import React, { useState, useContext } from "react";
import Cart from "../Cart/Cart";
import CartContext from "../../store/cart-context";

const HeaderCardButton = (_) => {
    const context = useContext(CartContext);
    const [modalVisible, setModalVisible] = useState(false);

    // get total items
    const totalItems = context.items.reduce((index, item) => {
        return index + item.amount;
    }, 0);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <React.Fragment>
            <button className="header__button">
                <span className="svg" onClick={openModal}>
                    <svg className="lnr lnr-cart">
                        <use xlinkHref="#lnr-cart"></use>
                    </svg>
                </span>
                <span className="title">Your Cart</span>
                <span className="badge">{totalItems}</span>
            </button>
            <Cart modalVisible={modalVisible} closeModal={closeModal} />
        </React.Fragment>
    );
};

export default HeaderCardButton;
