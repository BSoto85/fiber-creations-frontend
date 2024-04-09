import React from "react";
import CreationDetails from "../Components/Creations/CreationDetails";

const Show = ({ creations, setCreations }) => {
  return (
    <div>
      <CreationDetails creations={creations} setCreations={setCreations} />
    </div>
  );
};

export default Show;
