import { useEffect } from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import "./Cart.css";

const URL = import.meta.env.VITE_BASE_URL;

const Cart = ({ user, cart, setCart, forSale, setForSale }) => {
  const total = cart.reduce((acc, cur) => acc + +cur.price, 0);

  useEffect(() => {
    fetch(`${URL}/api/cart/${user.id}`)
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);

  return (
    <div>
      {cart.length === 0 ? (
        <p className="no-items">
          There are no items in your cart...{" "}
          <Link to={"/creations"}>
            <span>Browse art</span>
          </Link>
        </p>
      ) : (
        cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            cart={cart}
            setCart={setCart}
            forSale={forSale}
            setForSale={setForSale}
          />
        ))
      )}
      {cart.length > 0 && (
        <section className="total">
          <h2>Total: ${total}</h2>
          <button className="checkout">Checkout</button>
        </section>
      )}
      <Link to={"/creations"}>
        <button>Back to art</button>
      </Link>
    </div>
  );
};

export default Cart;
