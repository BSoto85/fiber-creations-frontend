import { useEffect, useState } from "react";
import CartItem from "./CartItem";

const URL = import.meta.env.VITE_BASE_URL;

const Cart = ({ user, cart, setCart }) => {
  useEffect(() => {
    fetch(`${URL}/api/cart/${user.id}`)
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);

  return (
    <div>
      {cart.length === 0 ? (
        <p>There are no items in your cart</p>
      ) : (
        cart.map((item) => (
          <CartItem key={item.id} item={item} cart={cart} setCart={setCart} />
        ))
      )}
    </div>
  );
};

export default Cart;
