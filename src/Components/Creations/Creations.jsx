import { useState, useEffect } from "react";
import Creation from "./Creation";

const URL = import.meta.env.VITE_BASE_URL;

const Creations = () => {
  const [creations, setCreations] = useState([]);

  useEffect(() => {
    fetch(`${URL}/api/creations`)
      .then((res) => res.json())
      .then((data) => setCreations(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {creations.length > 0 &&
        creations.map((creation) => (
          <Creation key={creation.id} creation={creation} />
        ))}
    </div>
  );
};

export default Creations;
