import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import UploadWidget from "./UploadWidget";

const URL = import.meta.env.VITE_BASE_URL;
const CreationNewForm = ({ creations, setCreations, user }) => {
  const setCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    return `${year}-${month}-${day}`;
  };

  const [newCreation, setNewCreation] = useState({
    creation_type: "",
    stitch: "",
    material: "",
    description: "",
    for_sale: false,
    price: "",
    image: "",
    user_id: user ? user.id : null,
    created_at: setCurrentDate(),
  });

  const navigate = useNavigate();

  const handleTextChange = (e) => {
    setNewCreation({ ...newCreation, [e.target.id]: e.target.value });
  };

  const handleCheckboxChange = () => {
    setNewCreation({ ...newCreation, for_sale: !newCreation.for_sale });
  };

  const setImageURL = (uploadedURL) => {
    setNewCreation({
      ...newCreation,
      image: uploadedURL,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    fetch(`${URL}/api/creations`, {
      method: "POST",
      body: JSON.stringify(newCreation),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCreations([data, ...creations]);
      })
      .then(() => {
        navigate(`/creations`);
      })
      .catch((error) => console.error("catch", error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="creation_type">Type:</label>
        <select
          id="creation_type"
          value={newCreation.creation_type}
          onChange={handleTextChange}
          required
        >
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
          value={newCreation.stitch}
          onChange={handleTextChange}
        />
        <label htmlFor="material">Material:</label>
        <select
          id="material"
          value={newCreation.material}
          onChange={handleTextChange}
          required
        >
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
          checked={newCreation.for_sale}
          required
        />
        {newCreation.for_sale && (
          <>
            <label htmlFor="price">Price:</label>
            <input
              id="price"
              type="text"
              name="price"
              value={newCreation.price}
              placeholder="00.00"
              onChange={handleTextChange}
              required
            />
          </>
        )}
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={newCreation.description}
          onChange={handleTextChange}
          placeholder="Describe your art"
        />
        <UploadWidget setImageURL={setImageURL} />
        <input type="submit" />
        <Link to={"/creations"}>Cancel</Link>
      </form>
    </div>
  );
};

export default CreationNewForm;
