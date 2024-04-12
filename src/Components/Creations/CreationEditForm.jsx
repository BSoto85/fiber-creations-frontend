import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import UploadWidget from "./UploadWidget";

const URL = import.meta.env.VITE_BASE_URL;

const CreationEditForm = ({ creations, setCreations, user }) => {
  const setCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    return `${year}-${month}-${day}`;
  };

  const [updateCreation, setUpdateCreation] = useState({
    creation_type: "",
    stitch: "",
    material: "",
    description: "",
    for_sale: false,
    price: 0,
    image: "",
    user_id: user ? user.id : null,
    updated_at: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  const handleTextChange = (e) => {
    setUpdateCreation({ ...updateCreation, [e.target.id]: e.target.value });
  };

  const handleCheckboxChange = () => {
    setUpdateCreation({
      ...updateCreation,
      for_sale: !updateCreation.for_sale,
    });
  };

  const setImageURL = (uploadedURL) => {
    setUpdateCreation({
      ...updateCreation,
      image: uploadedURL,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(updateCreation);
    console.log("-----------", updateCreation);
    navigate(`/creations/${id}`);
  };

  const handleEdit = (updateCreation) => {
    if (!updateCreation.image) {
      window.alert("Please upload an image before submitting the form.");
    } else {
      const token = localStorage.getItem("token");
      fetch(`${URL}/api/creations/${id}`, {
        method: "PUT",
        body: JSON.stringify(updateCreation),
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((responseJSON) => {
          const copyCreationsArray = [...creations];
          const indexUpdateCreation = copyCreationsArray.findIndex(
            (creation) => {
              return creation.id === id;
            }
          );
          copyCreationsArray[indexUpdateCreation] = responseJSON;
          setCreations(copyCreationsArray);
          setUpdateCreation({
            creation_type: "",
            stitch: "",
            material: "",
            description: "",
            for_sale: false,
            price: 0,
            image: "",
            user_id: user ? user.id : null,
            updated_at: "",
          });
        })
        .then(() => {
          navigate(`/creations/${id}`);
        })
        .catch((error) => console.error("catch", error));
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`${URL}/api/creations/${id}`, {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUpdateCreation(data);
        setUpdateCreation({ ...data, updated_at: setCurrentDate() });
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <UploadWidget setImageURL={setImageURL} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="creation_type">Type:</label>
        <select
          id="creation_type"
          value={updateCreation.creation_type}
          onChange={handleTextChange}
          required
        >
          <option value="none">Select a type</option>
          <option value="Blanket">Blanket</option>
          <option value="Scarf">Scarf</option>
          <option value="Doily">Doily</option>
          <option value="Hat">Hat</option>
          <option value="Amigurumi">Amigurumi</option>
          <option value="Other">Other</option>
        </select>
        <label htmlFor="stitch">Stitch:</label>
        <input
          id="stitch"
          type="text"
          name="stitch"
          value={updateCreation.stitch}
          onChange={handleTextChange}
        />
        <label htmlFor="material">Material:</label>
        <select
          id="material"
          value={updateCreation.material}
          onChange={handleTextChange}
          required
        >
          <option value="none">Select a material</option>
          <option value="Acrylic">Acrylic</option>
          <option value="Cotton">Cotton</option>
          <option value="Wool">Wool</option>
          <option value="Bamboo">Bamboo</option>
          <option value="Cashmere">Cashmere</option>
          <option value="Alpaca">Alpaca</option>
          <option value="Rayon">Rayon</option>
          <option value="Nylon">Nylon</option>
          <option value="Other">Other</option>
        </select>
        <label htmlFor="for_sale">For Sale:</label>
        <input
          id="for_sale"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={updateCreation.for_sale}
        />
        {updateCreation.for_sale && (
          <>
            <label htmlFor="price">Price:</label>
            <input
              id="price"
              type="number"
              name="price"
              value={updateCreation.price}
              onChange={handleTextChange}
              required
            />
          </>
        )}
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={updateCreation.description}
          onChange={handleTextChange}
          placeholder="Describe your art"
        />
        <input type="submit" />
        <Link to={"/creations"}>Cancel</Link>
      </form>
    </div>
  );
};

export default CreationEditForm;
