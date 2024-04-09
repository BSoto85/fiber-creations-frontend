import React from "react";
import CreationDetails from "../Components/Creations/CreationDetails";

const Show = ({ creations, setCreations, user }) => {
  return (
    <div>
      <CreationDetails
        creations={creations}
        setCreations={setCreations}
        user={user}
      />
    </div>
  );
};

export default Show;
