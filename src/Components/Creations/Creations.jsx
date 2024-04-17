import { useEffect, useState } from "react";
import Creation from "./Creation";
import "./Creations.css";

const URL = import.meta.env.VITE_BASE_URL;

const Creations = ({ creations, setCreations }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleTextChange = (e) => {
    setSearchInput(e.target.value);
  };

  const getSearchResults = () => {
    return creations.filter((creation) => {
      const { creation_type, material } = creation;
      const typeMatch = creation_type
        .toLowerCase()
        .match(searchInput.toLowerCase());
      const materialMatch = material
        .toLowerCase()
        .match(searchInput.toLowerCase());
      return typeMatch || materialMatch;
    });
  };

  const searchResults = getSearchResults();
  const creationsToShow = searchInput.length > 0 ? searchResults : creations;

  useEffect(() => {
    fetch(`${URL}/api/creations`)
      .then((res) => res.json())
      .then((data) => setCreations(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="search-input">
        <form>
          <label htmlFor="searchInput">Search all Creations: </label>
          <input
            className="input-box"
            type="search"
            id="searchInput"
            onChange={handleTextChange}
            value={searchInput}
          />
        </form>
      </div>
      <div className="creations-container">
        {creationsToShow.map((creation) => (
          <Creation key={creation.id} creation={creation} />
        ))}
      </div>
    </>
  );
};

export default Creations;
