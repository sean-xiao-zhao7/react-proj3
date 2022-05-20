const HeaderCardButton = (props) => {
    return (
        <button className="header__button">
            <span className="svg">
                <svg className="lnr lnr-cart">
                    <use xlinkHref="#lnr-cart"></use>
                </svg>
            </span>
            <span className="title">Your Cart</span>
            <span className="badge">3</span>
        </button>
    );
};

export default HeaderCardButton;
