import React from "react";
import "./meals.scss";
import MealsList from "./MealsList";

const MealsContainer = (props) => {
    return (
        <React.Fragment>
            <section className="meals-summary">
                <h2>Delicious meal</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                </p>
            </section>
            <MealsList />
        </React.Fragment>
    );
};

export default MealsContainer;
