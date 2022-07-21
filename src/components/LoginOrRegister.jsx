import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, login, register, logout } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import NavLogo from "./NavLogo";
import LoginImage from '../assets/login.png';

const LoginOrRegister = ({ loginOrRegister }) => {
  const navigate = useNavigate();

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const emailOnChange = (event) => {
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const passwordOnChange = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  const onLogin = () => {
    login(credential.email, credential.password);
  };

  const onRegister = () => {
    register(credential.email, credential.password);
  };

  const loginOrRegisterHandler = () => {
    if (loginOrRegister === "login") {
      onLogin();
    } else {
      onRegister();
    }
  };

  return (
    <>
      <div className="w-full h-screen flex">
        <img className="opacity-75 hidden lg:block" src={LoginImage} alt="login" />
        <div className="flex flex-col my-auto mx-auto">
          <h1 className="text-gray-200 text-center text-2xl my-4 font-bold">{loginOrRegister === "login" ? 'Login' : 'Register'}</h1>
          <input onChange={emailOnChange} className="my-2 p-2 rounded text-gray-200 bg-gray-500" type="text" placeholder="Email" autoComplete="email" />
          <input onChange={passwordOnChange} className="my-2 p-2 rounded text-gray-200 bg-gray-500" type="password" placeholder="Password" autoComplete="current-password" />
          <button onClick={loginOrRegisterHandler} className="bg-red-700 text-gray-50 p-3 my-4 hover:bg-red-500 hover:text-gray-100 rounded-lg">{loginOrRegister === "login" ? 'Login' : 'Register'}</button>
        </div>
      </div>
    </>
  );
};

export default LoginOrRegister;
