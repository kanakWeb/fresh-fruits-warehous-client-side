import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";


const SocialLogin = () => {
  const [user1]=useAuthState(auth)
  const [signInWithGoogle, user, loading, error] =
    useSignInWithGoogle(auth);
 console.log(user1);
    const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  if (user1) {
    navigate(from, { replace: true });
  }


  if(loading){
   <h2 className="text-center">loading......</h2>
    }

  let errorSocial;



  if (error) {
    errorSocial = (
      <p className="text-info bg-danger  text-center p-1 rounded">
        Error: {error?.message}
      </p>
    );
  }

  
  

  return (
    <div className="py-2 mx-2  align-items-center justify-content-center ">
      <div className="my-2">
        
        <h6 className="">{errorSocial}</h6>
      </div>
      
      <button
        onClick={() => signInWithGoogle()}
        className="btn py-2 text-info my-3 w-50  btn-light "
      >
        Login  With Google
      </button>
    </div>
  );
};

export default SocialLogin;
