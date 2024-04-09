const Creation = ({ creation }) => {
  const { creation_type, for_sale, price, material, image } = creation;

  return (
    <div>
      <img src={image} alt={creation_type} />
      <h3>{creation_type}</h3>
      <p>{material}</p>
      <p style={for_sale ? { display: "block" } : { display: "none" }}>
        ${price}
      </p>
    </div>
  );
};

export default Creation;
