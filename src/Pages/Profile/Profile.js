import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Profile = () => {
    const [user]=useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth);
      };
    return (
        <div className="card container margin-top mb-3 py-5 margin-bottom" >
        <div className="row  g-0">
          <div className="col-md-4">
            <img src={user.photoURL} width='150px' className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{user.displayName}</h5>
              <h5 className="card-title">{user.email}</h5>
              <p  className="card-text py-3"><small onClick={handleSignOut} className="text-light fw-bold btn btn-secondary">Log out</small></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Profile;