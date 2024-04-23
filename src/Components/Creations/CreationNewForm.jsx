import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import UploadWidget from "./UploadWidget";
import "./Forms.css";

const URL = import.meta.env.VITE_BASE_URL;
const CreationNewForm = ({ creations, setCreations, user }) => {
  const [imageURL, setImageURL] = useState("");

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
    price: 0,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newCreation.image) {
      window.alert("Please upload an image before submitting the form.");
    } else {
      console.log(JSON.stringify(newCreation));
      const token = localStorage.getItem("token");
      fetch(`${URL}/api/creations`, {
        method: "POST",
        body: JSON.stringify({ ...newCreation, image: imageURL }),
        headers: {
          authorization: `Bearer ${token}`,
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
    }
  };

  return (
    <div>
      <UploadWidget
        setImageURL={setImageURL}
        newCreation={newCreation}
        setNewCreation={setNewCreation}
      />
      <form onSubmit={handleSubmit} className="form-container">
        <section>
          <label htmlFor="creation_type">Type:</label>
          <select
            id="creation_type"
            value={newCreation.creation_type}
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
        </section>
        <section>
          <label htmlFor="stitch">Stitch:</label>
          <input
            style={{ width: "200px", border: "1px solid black" }}
            id="stitch"
            type="text"
            name="stitch"
            value={newCreation.stitch}
            onChange={handleTextChange}
          />
        </section>
        <section>
          <label htmlFor="material">Material:</label>
          <select
            id="material"
            value={newCreation.material}
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
        </section>
        <section className="for-sale-section">
          <label htmlFor="for_sale">For Sale:</label>
          <input
            id="for_sale"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={newCreation.for_sale}
          />
          {newCreation.for_sale && (
            <>
              <label htmlFor="price">Price:</label>
              <input
                id="price"
                type="number"
                name="price"
                value={newCreation.price}
                onChange={handleTextChange}
                required
              />
            </>
          )}
        </section>
        <section>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={newCreation.description}
            onChange={handleTextChange}
          />
        </section>
        <section className="form-buttons">
          <input type="submit" className="submit" />
          <Link to={"/creations"}>Cancel</Link>
        </section>
      </form>
    </div>
  );
};

export default CreationNewForm;
