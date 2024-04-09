import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const URL = import.meta.env.VITE_BASE_URL;

const CreationDetails = ({ creations, setCreations }) => {
  const [oneCreation, setOneCreation] = useState({});

  const { id } = useParams();

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
    user_id,
  } = oneCreation;

  // const formattedDate = (oneCreationDate) => {
  //   const dateArr = oneCreationDate.split("-").map((num) => +num);
  //   const [year, month, day] = dateArr;
  //   const newCreationDate = new Date(year, month - 1, day);
  //   return newCreationDate.toLocaleDateString("en-US", {
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //   });
  // };

  // const handleDelete = () => {
  //   if (confirm(`Are you sure you want to delete your creation?`)) {
  //     fetch(`${URL}/api/creations/${id}`, {
  //       method: "DELETE",
  //       headers: {
  //         "CSRF-Token": csrfToken,
  //       },
  //       credentials: "include",
  //     })
  //       .then((res) => res.json())
  //       .then((responseJSON) => {
  //         const copyCreationsArray = [...creations];
  //         const indexDeletedCreation = copyCreationsArray.findIndex(
  //           (creation) => {
  //             return creation.id === id;
  //           }
  //         );
  //         copyCreationsArray.splice(indexDeletedCreation, 1);
  //         setCreations(copyCreationsArray);
  //       })
  //       .catch((error) => console.error(error));
  //   }
  // };

  useEffect(() => {
    fetch(`${URL}/api/creations/${id}`)
      .then((res) => res.json())
      .then((data) => setOneCreation(data));
  }, [id]);

  return (
    <div>
      <img src={image} alt={creation_type} />
      <h3>{creation_type}</h3>
      {updated_at === null ? (
        <p>Added on: {created_at} </p>
      ) : (
        <p>Updated on: {updated_at}</p>
      )}
      <p>Material: {material}</p>
      {stitch && <p>Stitch: {stitch}</p>}
      <p>Description: {description}</p>
      <p style={for_sale ? { display: "block" } : { display: "none" }}>
        ${price}
      </p>
      <Link to={"/edit"}>
        <button>Edit</button>
      </Link>
      {/* <button onClick={handleDelete}>Delete</button> */}
    </div>
  );
};

export default CreationDetails;
