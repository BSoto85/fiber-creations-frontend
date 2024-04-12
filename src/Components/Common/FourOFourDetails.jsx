import { Link } from "react-router-dom";
import "./FourOFourDetails.css";

const FourOFourDetails = () => {
  return (
    <div className="container">
      <h2>Oops! You used the wrong yarn!</h2>
      <img
        src="https://res.cloudinary.com/dnqfg86zq/image/upload/v1712932112/eskhcetnsflmyluhlurk.png"
        alt=""
      />
      <Link to={"/creations"}>
        <span>Back to creations</span>
      </Link>
    </div>
  );
};

export default FourOFourDetails;
