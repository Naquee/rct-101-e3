import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
// import {Link} from 'react-router-dom';

// use react-router Link or NavLink
const Link = <a />;

const Navbar = () => {
  const {isAuth, logout}=useContext(AuthContext);
  const navigate=useNavigate();

  const handleLoginclick=()=>{
    if(isAuth){
      logout();
      navigate("/")
    }
    else {
      navigate("/login")
    }

  }
  return (
    <div data-cy="navbar">
      <Link to="" data-cy="navbar-home-link">Home</Link>
      <Link to=""></Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}</span>
      <button onClick={handleLoginclick} data-cy="navbar-login-logout-button">
        {isAuth ? 'Logout': 'Login'}
      </button>
      
    </div>
  );
};

export default Navbar;
