import React from "react";
import CreationDetails from "../Components/Creations/CreationDetails";

const Show = ({
  creations,
  setCreations,
  user,
  cart,
  setCart,
  forSale,
  setForSale,
}) => {
  return (
    <div>
      <CreationDetails
        creations={creations}
        setCreations={setCreations}
        user={user}
        cart={cart}
        setCart={setCart}
        forSale={forSale}
        setForSale={setForSale}
      />
    </div>
  );
};

export default Show;
