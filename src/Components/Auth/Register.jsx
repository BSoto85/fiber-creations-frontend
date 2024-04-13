import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const URL = import.meta.env.VITE_BASE_URL;

const Register = ({ setToggleLogin }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: "", password: "", email: "" });

  function handleChange(event) {
    setUser({ ...user, [event.target.id]: event.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(user),
    };

    try {
      const res = await fetch(`${URL}/api/auth/register`, options);

      if (!res.ok) throw new Error("Registration failed");
      const data = await res.json();

      if (data.token) {
        // in case there is an old token in the browser, remove it
        localStorage.removeItem("token");
        // set the new user's JWT token in the browser
        localStorage.setItem("token", data.token);
        setToggleLogin(true);
        navigate("/creations");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  }

  return (
    <div className="login-container register-container">
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
      <h3>Register</h3>
      <form onSubmit={handleSubmit}>
        <section>
          <label htmlFor="username">
            <input
              id="username"
              value={user.username}
              type="text"
              placeholder="username"
              onChange={handleChange}
              autoComplete="username"
            />
          </label>
        </section>
        <section>
          <label htmlFor="email">
            <input
              id="email"
              value={user.email}
              type="email"
              placeholder="email"
              onChange={handleChange}
              autoComplete="email"
            />
          </label>
        </section>
        <section>
          <label htmlFor="password">
            <input
              id="password"
              value={user.password}
              type="password"
              placeholder="password"
              onChange={handleChange}
              autoComplete="current-password"
            />
          </label>
        </section>
        <section className="submit-section">
          <button>Submit</button>
          <Link to={"/creations"}>
            <button>Back to home</button>
          </Link>
        </section>
      </form>
    </div>
  );
};

export default Register;
