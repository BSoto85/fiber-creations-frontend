import { Link } from "react-router-dom";
import "./AboutDetails.css";

const AboutDetails = () => {
  return (
    <div className="about-container">
      <h1 className="about-dev">About the Developer</h1>
      <ul className="developer-list">
        <li className="developer">
          <h2>Brenda</h2>
          <a
            href="https://github.com/BSoto85"
            className="github-link"
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/dnqfg86zq/image/upload/v1712965350/n1nx7wrgie8sd7l41wwq.jpg"
              alt="Brenda!"
              width="300"
              height="300"
            />
          </a>
          <p className="fun-fact">
            {" "}
            <b>Facts:</b> "Brenda Soto, a former veterinary technician, is now
            an aspiring full-stack web developer enrolled in Pursuit's
            mentorship program. She blends her rich background in
            problem-solving with a passion for learning web development,
            showcasing adaptability and eagerness for new challenges in tech."
          </p>
        </li>
      </ul>
      <Link to={"/creations"}>
        <button>Back to art</button>
      </Link>
    </div>
  );
};

export default AboutDetails;
