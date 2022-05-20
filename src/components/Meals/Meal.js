import React from "react";

const Meal = ({ meal: { name, description, price } }) => {
    return (
        <section className="meal">
            <h3>{name}</h3>
            <p>{description}</p>
            <p>${price}</p>            
        </section>
    );
};

export default Meal;
