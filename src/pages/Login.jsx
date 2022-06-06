import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import  { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate= useNavigate();
  const [loginCreds,setlogincreds]= useState(AuthContext);
  const {login} =useContext(AuthContex)
  const handleChange(e)=>{
    const {name,value} =e.target;
    setlogincreds({
      ...loginCreds,
      [name]:value,
    })

  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    login();
    navigate("/Home")

  }
  return (
    <div> Login
    <div>
    <form onSubmit={handleSubmit}>
    <input onChange={handleChange} name="email" data-cy="login-email" placeholder="Enter mail" />
      <input onChange={handleChange} name="passward" data-cy="login-password" placeholder="Enter passward" />
      <button type="submit" data-cy="login-submit">Login</button>
    </form>
    </div>
    </div>
  );
};

export default Login;
