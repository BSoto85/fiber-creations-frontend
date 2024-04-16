const CartItem = ({ item, cart, setCart }) => {
  const { image, creation_type, price } = item;

  const handleRemove = () => {
    if (confirm(`Are you sure you want to remove from cart?`)) {
      const token = localStorage.getItem("token");
      fetch(`${URL}/api/`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((responseJSON) => {
          const copyCartArray = [...cart];
          const indexDeletedCreation = copyCartArray.findIndex((creation) => {
            return creation.id === id;
          });
          copyCartArray.splice(indexDeletedCreation, 1);
          setCart(copyCartArray);
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div>
      <img src={image} alt={creation_type} />
      <p>{creation_type}</p>
      <p>${price}</p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default CartItem;
