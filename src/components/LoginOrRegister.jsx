import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, login, register } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import LoginImage from "../assets/login.png";

const LoginOrRegister = ({ loginOrRegister }) => {
  const navigate = useNavigate();

  //user ,loading,error
  const [user, loading, error] = useAuthState(auth);

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

  useEffect(() => {
    if (loading) {
      return;
    }

    if (user) {
      navigate("/");
    }

    if (error) {
      alert(error);
    }
  }, [loading, user, error, navigate]);

  return (
    <>
      <div className="w-full h-screen flex">
        <img className="opacity-75 hidden lg:block" src={LoginImage} alt="login" />
        <div className="w-max-[600px] flex flex-col my-auto mx-auto">
          <h1 className="text-gray-200 text-center text-2xl my-4 font-bold">{loginOrRegister === "login" ? "Login" : "Register"}</h1>
          <input onChange={emailOnChange} className="my-2 p-2 rounded text-gray-200 bg-gray-500" type="text" placeholder="Email" autoComplete="email" />
          <input onChange={passwordOnChange} className="my-2 p-2 rounded text-gray-200 bg-gray-500" type="password" placeholder="Password" autoComplete="current-password" />
          <button onClick={loginOrRegisterHandler} className="bg-red-700 text-gray-50 p-3 my-4 hover:bg-red-500 hover:text-gray-100 rounded-lg">
            {loginOrRegister === "login" ? "Login" : "Register"}
          </button>
          {loginOrRegister === "login" ? (
            <div className="text-gray-200">
              <p>
                Belum mempunyai akun?{" "}
                <Link to="/register" className="text-red-700 font-semibold hover:text-red-500 hover:font-bold">
                  Register
                </Link>
              </p>
            </div>
          ) : (
            <div className="text-gray-200">
              <p>
                Sudah mempunyai akun?{" "}
                <Link to="/login" className="text-red-700 font-semibold hover:text-red-500 hover:font-bold">
                  Login
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginOrRegister;
