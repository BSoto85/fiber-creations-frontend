import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import ProtectedRoute from "./Components/Auth/ProtectedRoute";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import Dashboard from "./Components/Auth/Dashboard";
import NavBar from "./Components/Common/NavBar";
import LandingPage from "./Components/Auth/LandingPage";
import NewForm from "./Pages/NewForm";
import EditForm from "./Pages/EditForm";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import FourOFour from "./Pages/FourOFour";
import About from "./Pages/About";

function App() {
  const [creations, setCreations] = useState([]);
  const [toggleLogin, setToggleLogin] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  async function handleLogout() {
    localStorage.removeItem("token");
    await setToggleLogin(false);
    navigate("/creations");
  }

  return (
    <>
      <NavBar
        handleLogout={handleLogout}
        toggleLogin={toggleLogin}
        setToggleLogin={setToggleLogin}
        user={user}
        setUser={setUser}
      />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/login"
          element={<Login setToggleLogin={setToggleLogin} />}
        />
        <Route
          path="/register"
          element={<Register setToggleLogin={setToggleLogin} />}
        />
        <Route
          path="/creations"
          element={<Index creations={creations} setCreations={setCreations} />}
        />
        <Route
          path="/creations/:id"
          element={
            <Show
              creations={creations}
              setCreations={setCreations}
              user={user}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<FourOFour />} />

        <Route element={<ProtectedRoute />}>
          {/* Place protected routes here */}
          <Route
            path="/dashboard"
            element={<Dashboard handleLogout={handleLogout} />}
          />
          <Route
            path="/new"
            element={
              <NewForm
                user={user}
                creations={creations}
                setCreations={setCreations}
              />
            }
          />
          <Route
            path="/edit/:id"
            element={
              <EditForm
                user={user}
                creations={creations}
                setCreations={setCreations}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
