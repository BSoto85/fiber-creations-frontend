import { useEffect } from "react";

import { Link } from "react-router-dom";

const URL = import.meta.env.VITE_BASE_URL;

const NavBar = ({ toggleLogin, handleLogout, user, setUser }) => {
  useEffect(() => {
    if (!toggleLogin) setUser(null);

    if (toggleLogin) {
      const token = localStorage.getItem("token");
      if (token) {
        fetch(`${URL}/api/auth/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setUser(data.user);
          })
          .catch((error) => console.error("Error fetching user:", error));
      }
    }
  }, [toggleLogin]);

  return (
    <div className="navbar-container">
      <Link to={"/creations"}>
        <h1>Fiber Creations</h1>
      </Link>
      <h3>
        <Link to={user ? "/new" : "/login"}>Add Art</Link>
      </h3>

      {!toggleLogin ? (
        <Link to={"/login"}>
          <span>Login</span>
        </Link>
      ) : (
        <div>
          {user && <span>Hello, {user.username.toUpperCase()} | </span>}
          <Link onClick={handleLogout}>
            <span>Logout</span>
          </Link>
        </div>
      )}
      <hr />
    </div>
  );
};

export default NavBar;
