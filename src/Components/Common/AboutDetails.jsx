import "./AboutDetails.css";

const AboutDetails = () => {
  return (
    <div className="about-container">
      <h1 className="about-dev">About Fiber Creations Developer</h1>
      <ul className="developer-list">
        <li className="developer">
          <h2>Brenda</h2>
          <a
            href="https://github.com/BSoto85"
            className="github-link"
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/dgifdj6nx/image/upload/v1711730824/TeaWhips-BrendaAbout_vnayip.jpg"
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
    </div>
  );
};

export default AboutDetails;
