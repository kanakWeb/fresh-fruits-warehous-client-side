import React from "react";
import axios from "axios";
import { useState } from "react";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { async } from "@firebase/util";
import SocialLogin from "../SocialLogin/SocialLogin";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";
import "./Login.css";
import useToken from "../../../hooks/useToken";

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] =
    useSendPasswordResetEmail(auth);


const[token]=useToken(user)

  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleLoginPassword = (event) => {
    setPassword(event.target.value);
  };

  let from = location.state?.from?.pathname || "/";
  const handleLogin = async (event) => {
    event.preventDefault();
    await signInWithEmailAndPassword(email, password);
    
    
  };

 

  if (token) {
   navigate(from, { replace: true });
   }

  if (loading || sending) {
    return <h2 className="text-center margin-top">loading......</h2>;
  }

  const ResetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  };

  let errorLogin;
  if (error) {
    errorLogin = (
      <p className="text-info bg-danger  text-center p-1 rounded">
        Error: {error?.message}
      </p>
    );
  }

  return (
    <div>
      <div class="container  my-5">
        <div class="row margin-top justify-content-center">
          <div class="col-12 col-md-8 col-lg-6 pb-5">
            {/* --Form with header-- */}

            <form className="card-sizing" onSubmit={handleLogin}>
              <div class="card login-card  rounded-3">
                <div class="card-header p-0">
                  <div class="text-white text-center py-2">
                    <h3>Please login</h3>
                  </div>
                </div>
                <div class="card-body  pt-5">
                  {/*  --Body--*/}
                  <div class="form-group">
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <span>📨</span>
                        </div>
                      </div>
                      <input
                        onChange={handleLoginEmail}
                        type="email"
                        class="form-control"
                        id="email"
                        name="email"
                        placeholder="please enter your email"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group mb-2 my-3">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <span>🔑</span>
                        </div>
                      </div>
                      <input
                        onChange={handleLoginPassword}
                        type="password"
                        class="form-control"
                        id="password"
                        name="password"
                        placeholder="please enter your password"
                        required
                      />
                    </div>
                  </div>

                  <div class="form-group"></div>

                  <div class="text-center">
                    <input
                      type="submit"
                      value="Log in"
                      class="btn btn-warning btn-block rounded-3 my-3 py-2"
                    />
                    <h4>{errorLogin}</h4>
                    <button
                      onClick={ResetPassword}
                      className="btn btn-link  rounded-2 mx-3 text-decoration-none  py-2"
                    >
                      Reset password
                    </button>
                  </div>

                  <div className="d-flex align-items-center ">
                    <span>haven't account?</span>
                    <Link
                      className="btn-link btn mx-2 text-decoration-none btn-block"
                      to="/signup"
                    >
                      Sign up
                    </Link>
                  </div>
                  <ToastContainer />
                </div>
                <SocialLogin></SocialLogin>
              </div>
            </form>
            {/* --Form with header-- */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
