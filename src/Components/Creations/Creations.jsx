import { useEffect } from "react";
import Creation from "./Creation";
import "./Creations.css";

const URL = import.meta.env.VITE_BASE_URL;

const Creations = ({ creations, setCreations }) => {
  useEffect(() => {
    fetch(`${URL}/api/creations`)
      .then((res) => res.json())
      .then((data) => setCreations(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="creations-container">
      {creations.length > 0 &&
        creations.map((creation) => (
          <Creation key={creation.id} creation={creation} />
        ))}
    </div>
  );
};

export default Creations;
