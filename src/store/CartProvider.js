import { useReducer } from "react";
import CartContext from "./cart-context";

const initialCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                items: state.items.concat(action.item),
                totalAmount:
                    state.totalAmount + action.item.price * action.item.amount,
            };
        case "REMOVE_ITEM":
            return {
                items: state.items.filter((ci) => ci.id !== action.id),
                totalAmount:
                    state.totalAmount -
                    state.items[action.id].price *
                        state.items[action.id].amount,
            };
        default:
            return initialCartState;
    }
};

const CartProvider = (props) => {
    const [state, dispatchAction] = useReducer(cartReducer, initialCartState);
    const addItem = (item) => {
        dispatchAction({ type: "ADD_ITEM", item: item });
    };

    const removeItem = (id) => {
        dispatchAction({ type: "REMOVE_ITEM", id: id });
    };

    const cartContext = {
        items: state.items,
        totalAmount: state.totalAmount,
        addItem: addItem,
        removeItem: removeItem,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
