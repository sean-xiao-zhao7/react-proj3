import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

const MealOrder = (props) => {
    const context = useContext(CartContext);
    const amountRef = React.createRef();

    const submitHandler = (event) => {
        event.preventDefault();
        context.addItem({
            amount: +amountRef.current.value,
            price: +props.meal.price,
            name: props.meal.name,
            description: props.meal.description,
            id: props.meal.id,
        });
        amountRef.current.value = null;
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <form className="meal-order-form" onSubmit={submitHandler}>
            <label htmlFor="amount">Amount</label>
            <input type="number" name="amount" ref={amountRef} />
            <button>
                <svg className="lnr lnr-plus-circle">
                    <use xlinkHref="#lnr-plus-circle"></use>
                </svg>
            </button>
        </form>
    );
};

export default MealOrder;
