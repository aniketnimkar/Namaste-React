import { useState } from "react";
import logo from "../assets/img/FoodBytes.jpg";
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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
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
