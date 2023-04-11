import React, {Fragment, useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () =>{
    return setCartIsShown(true)
  }

  const hideCartHandler = () =>{
    return setCartIsShown(false)
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <Meals/>
    </CartProvider>
  );
}

export default App;
