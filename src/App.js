import React from "react";
import Header from "./components/Header/Header";
import MealsContainer from "./components/Meals/MealsContainer";
import CartProvider from "./store/CartProvider";

function App() {
    return (
        <CartProvider>
            <Header />
            <MealsContainer />
        </CartProvider>
    );
}

export default App;
