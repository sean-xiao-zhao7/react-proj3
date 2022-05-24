import Meal from "./Meal";
import MealOrder from "./MealOrder";

const MealsList = (props) => {
    const meals = [
        {
            name: "BBQ wings",
            price: "10",
            description: "Delicious chicken wings. Properly cooked",
        },
        {
            name: "BBQ chickens",
            price: "12.1",
            description: "Delicious chicken wings. Properly cooked",
        },
        {
            name: "BBQ ducks",
            price: "9.2",
            description: "Delicious chicken wings. Properly cooked",
        },
        {
            name: "BBQ fish",
            price: "12.3",
            description: "Delicious chicken wings. Properly cooked",
        },
        {
            name: "BBQ pig",
            price: "15",
            description: "Delicious chicken wings. Properly cooked",
        },
    ];
    return (
        <ul className="meals-list">
            {meals.map((meal, index) => {
                return (
                    <li key={index}>
                        <Meal meal={meal} />
                        <MealOrder meal={meal} />
                    </li>
                );
            })}
        </ul>
    );
};

export default MealsList;
