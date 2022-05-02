import React from "react";
import { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { async } from "@firebase/util";
import SocialLogin from "../SocialLogin/SocialLogin";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";
import './Login.css'

const Login = () => {
  const [email, SetEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true,
    });

  const handleEmailLogin = (event) => {
    SetEmail(event.target.value);
  };
  const handlePasswordLogin = (event) => {
    setPassword(event.target.value);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleLogin = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(email, password);
    navigate("/");
  };

  return (
    <div className="">
      <div>
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 pb-5">

              <form className="sizing-card" onSubmit={handleLogin}>
                <div className="card login-card rounded-3">
                  <div className="card-header p-0">
                    <div className="login-card  text-white text-center py-2">
                      <h3>Please Login</h3>
                      <p className="m-0">This is admin User</p>
                    </div>
                  </div>
                  <div className="card-body p-3">
                    <div className="form-group">
                      <div className="input-group my-4">
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            <span>📨</span>
                          </div>
                        </div>
                        <input
                          onChange={handleEmailLogin}
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="email@gmail.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="input-group mb-2">
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            <span>🔑</span>
                          </div>
                        </div>
                        <input
                          onChange={handlePasswordLogin}
                          type="password"
                          className="form-control"
                          placeholder="password"
                          required
                        />
                      </div>
                    </div>

                    <div className="text-center">
                      <input
                        type="submit"
                        value="Login"
                        className="btn btn-warning btn-block rounded-0 py-2 mt-4 rounded-lg"
                      />
                    </div>
                    </div>
                  <SocialLogin></SocialLogin>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
