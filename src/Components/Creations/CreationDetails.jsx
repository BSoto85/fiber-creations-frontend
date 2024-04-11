import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./Creations.css";

const URL = import.meta.env.VITE_BASE_URL;

const CreationDetails = ({ creations, setCreations, user }) => {
  const [oneCreation, setOneCreation] = useState({});

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

  const handleDelete = () => {
    if (confirm(`Are you sure you want to delete your creation?`)) {
      fetch(`${URL}/api/creations/${id}`, {
        method: "DELETE",
        headers: {
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
      .then((data) => setOneCreation(data));
  }, [id]);

  return (
    <div className="creation-card">
      <img src={image} alt={creation_type} />
      <h3>{creation_type}</h3>
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
        <section>
          <Link to={"/edit"}>
            <button>Edit</button>
          </Link>
          <button onClick={handleDelete}>Delete</button>
        </section>
      )}
      <Link to={"/creations"}>
        <button>Back</button>
      </Link>
    </div>
  );
};

export default CreationDetails;
