const MealOrder = (props) => {
    return (
        <form className="meal-order-form">
            <label for="amount">Amount</label>
            <input type="number" name="amount" />
            <button>
                <svg className="lnr lnr-plus-circle">
                    <use xlinkHref="#lnr-plus-circle"></use>
                </svg>
            </button>
        </form>
    );
};

export default MealOrder;
