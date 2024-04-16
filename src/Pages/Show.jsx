import React from "react";
import CreationDetails from "../Components/Creations/CreationDetails";

const Show = ({ creations, setCreations, user, cart, setCart }) => {
  return (
    <div>
      <CreationDetails
        creations={creations}
        setCreations={setCreations}
        user={user}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
};

export default Show;
