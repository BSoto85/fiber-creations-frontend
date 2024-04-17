import React from "react";
import Cart from "../Components/Common/Cart";

const CartView = ({ user, cart, setCart, forSale, setForSale }) => {
  return (
    <div>
      <Cart
        user={user}
        cart={cart}
        setCart={setCart}
        forSale={forSale}
        setForSale={setForSale}
      />
    </div>
  );
};

export default CartView;
