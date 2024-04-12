import { useNavigate } from "react-router-dom";

const Creation = ({ creation }) => {
  const navigate = useNavigate();
  const { creation_type, for_sale, price, material, image } = creation;

  return (
    <div className="creation-card">
      <img src={image} alt={creation_type} />
      <h3>Type: {creation_type}</h3>
      <p> Material: {material}</p>
      <p style={for_sale ? { display: "block" } : { display: "none" }}>
        Price: ${price}
      </p>
      <button onClick={() => navigate(`/creations/${creation.id}`)}>
        Details
      </button>
    </div>
  );
};

export default Creation;
