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
      <p>Click on the image to get started</p>
      {/* add paragraph about the project */}
      <section>
        <p className="about-fiber">
          Fiber Creations started as a place where I could showcase my crocheted
          arts, and maybe even sell a few pieces. The site has evolved to
          include fiber art from anyone who wishes to share or sell their work.
          I hope you are inspired by what you find!
        </p>
      </section>
    </div>
  );
}

export default LandingPage;
