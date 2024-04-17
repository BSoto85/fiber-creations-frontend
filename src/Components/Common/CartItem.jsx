import "./Cart.css";

const URL = import.meta.env.VITE_BASE_URL;

const CartItem = ({ item, cart, setCart, setForSale }) => {
  const { image, creation_type, price, cart_item_id } = item;

  const handleRemove = () => {
    if (confirm(`Are you sure you want to remove from cart?`)) {
      const token = localStorage.getItem("token");
      fetch(`${URL}/api/cart/${cart_item_id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((responseJSON) => {
          const copyCartArray = [...cart];
          const filteredCopyCart = copyCartArray.filter((creation) => {
            return creation.cart_item_id !== responseJSON.id;
          });
          setCart(filteredCopyCart);
          setForSale(true);
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className="item-card">
      <section>
        <img src={image} alt={creation_type} />
      </section>
      <section className="price">
        <h3>${price}</h3>
        <button onClick={handleRemove}>Remove</button>
      </section>
    </div>
  );
};

export default CartItem;
