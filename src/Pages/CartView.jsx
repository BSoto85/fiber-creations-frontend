import React from "react";
import Cart from "../Components/Common/Cart";

const CartView = ({ user, cart, setCart }) => {
  return (
    <div>
      <Cart user={user} cart={cart} setCart={setCart} />
    </div>
  );
};

export default CartView;
