import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./Creations.css";

const URL = import.meta.env.VITE_BASE_URL;

const CreationDetails = ({ creations, setCreations, user, cart, setCart }) => {
  const [oneCreation, setOneCreation] = useState({});
  const [inCart, setInCart] = useState(false);

  const { id } = useParams();

  const navigate = useNavigate();

  const {
    created_at,
    creation_type,
    description,
    for_sale,
    image,
    material,
    price,
    stitch,
    updated_at,
    username,
  } = oneCreation;

  const formattedDate = (oneCreationDate) => {
    const dateArr = oneCreationDate.split("-").map((num) => +num);
    const [year, month, day] = dateArr;
    const newCreationDate = new Date(year, month - 1, day);
    return newCreationDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleCart = () => {
    const token = localStorage.getItem("token");
    fetch(`${URL}/api/creations/${oneCreation.id}/cart/${user.id}`, {
      method: "POST",
      body: JSON.stringify(oneCreation),
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Added to cart");
        setInCart(true);
        setCart([...cart, data]);
      })
      .catch((error) => console.error("Error from handleCart", error));
  };

  const handleRemove = () => {
    if (confirm(`Are you sure you want to remove from cart?`)) {
      const token = localStorage.getItem("token");
      const cart_item_id = cart.find(
        (item) => item.id === oneCreation.id
      ).cart_item_id;
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
          setInCart(false);
        })
        .catch((error) => console.error(error));
    }
  };

  const handleDelete = () => {
    if (confirm(`Are you sure you want to delete your creation?`)) {
      const token = localStorage.getItem("token");
      fetch(`${URL}/api/creations/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((responseJSON) => {
          const copyCreationsArray = [...creations];
          const indexDeletedCreation = copyCreationsArray.findIndex(
            (creation) => {
              return creation.id === id;
            }
          );
          copyCreationsArray.splice(indexDeletedCreation, 1);
          setCreations(copyCreationsArray);
          navigate("/creations");
        })
        .catch((error) => console.error(error));
    }
  };

  useEffect(() => {
    fetch(`${URL}/api/creations/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setOneCreation(data);
        const isInCart = cart.find((item) => item.id === data.id);
        isInCart !== undefined ? setInCart(true) : setInCart(false);
      });
  }, [id]);

  return (
    <div className="creation-card details-card">
      <img src={image} alt={creation_type} />
      <h3>Type: {creation_type}</h3>
      {created_at ? (
        updated_at === null ? (
          <p>Added on: {formattedDate(created_at)} </p>
        ) : (
          <p>Updated on: {formattedDate(updated_at)} </p>
        )
      ) : null}
      <p>Material: {material}</p>
      {stitch && <p>Stitch: {stitch}</p>}
      <p>Description: {description}</p>
      {for_sale ? <p>${price}</p> : null}
      {user && username === user.username && (
        <section className="edit-and-delete-btn-sect">
          <Link to={`/edit/${id}`}>
            <button>Edit</button>
          </Link>
          <button onClick={handleDelete} className="remove-from-cart">
            Delete
          </button>
        </section>
      )}
      {user && for_sale && !inCart && (
        <button onClick={handleCart} className="add-to-cart">
          Add to Cart
        </button>
      )}
      {user && for_sale && inCart && (
        <button onClick={handleRemove} className="remove-from-cart">
          Remove from Cart
        </button>
      )}
      <Link to={"/creations"}>
        <button>Back to art</button>
      </Link>
    </div>
  );
};

export default CreationDetails;
