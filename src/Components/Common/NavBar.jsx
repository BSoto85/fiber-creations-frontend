import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

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
      <section>
        <Link to={user ? "/new" : "/login"}>
          <span>Add Art</span>
        </Link>
        <Link to={"/about"}>
          <span>About Dev</span>
        </Link>
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
        <Link to={user ? `/cart/${user.id}` : `/login`}>
          <img src="https://pngimg.com/d/shopping_cart_PNG4.png" alt="Cart" />
        </Link>
      </section>
    </div>
  );
};

export default NavBar;
