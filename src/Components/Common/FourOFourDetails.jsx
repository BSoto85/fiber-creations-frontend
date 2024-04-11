import { Link } from "react-router-dom";
import "./FourOFourDetails.css";

const FourOFourDetails = () => {
  return (
    <div className="container">
      <h2>Oops! You used the wrong yarn!</h2>
      <img src="https://cdn.svgator.com/images/2022/01/cat.png" alt="" />
      <Link to={"/creations"}>
        <button>Back</button>
      </Link>
    </div>
  );
};

export default FourOFourDetails;
