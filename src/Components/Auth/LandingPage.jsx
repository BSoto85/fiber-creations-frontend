import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-container">
      <h1>Welcome to Fiber Creations</h1>
      <Link to={"/creations"}>
        <img
          src="https://res.cloudinary.com/dnqfg86zq/image/upload/v1713049994/kd0lzvutgynuk6ecnabr.gif"
          alt="Cat playing with yarn ball"
        />
      </Link>
    </div>
  );
}

export default LandingPage;
