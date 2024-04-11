import { useNavigate } from "react-router-dom";

const Creation = ({ creation }) => {
  const navigate = useNavigate();
  const { creation_type, for_sale, price, material, image } = creation;

  return (
    <div className="creation-card">
      <img src={image} alt={creation_type} />
      <h3>{creation_type}</h3>
      <p>{material}</p>
      <p style={for_sale ? { display: "block" } : { display: "none" }}>
        ${price}
      </p>
      <button onClick={() => navigate(`/creations/${creation.id}`)}>
        Details
      </button>
    </div>
  );
};

export default Creation;
