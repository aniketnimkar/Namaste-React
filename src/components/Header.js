import { useState } from "react";
import logo from "../assets/img/FoodBytes.jpg";
import { Link } from "react-router-dom";
export const Title = () => (
  <a href="/">
    <img className="logo" alt="food bite logo" src={logo} />
  </a>
);

export const Header = () => {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
      {IsLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>LogOut</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>LogIn</button>
      )}
    </div>
  );
};

export default Header;
