import React from "react";
import HeaderCardButton from "../Header/HeaderCardButton";

import "./header.scss";

const Header = (props) => {
    return (
        <React.Fragment>
            <header className="header">
                <h1>Renya's Little Taste of Heaven</h1>
                <HeaderCardButton />
            </header>
            <section className="header__img"></section>
        </React.Fragment>
    );
};

export default Header;
