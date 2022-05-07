import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {useNavigate} from 'react-router-dom'
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import axiosPrivate from "../../api/AxiosPrivate";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [addUserItems, setAddUserItems] = useState([]);
  const navigate=useNavigate()
  useEffect(() => {
    const getAddUserItems = async () => {
      const email = user.email;
      const url = `http://localhost:5000/inventoryItems?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setAddUserItems(data);
      } catch (error) {
        console.log(error.message);

        if (
          error.response.status === 401 ||
          error.response.status === 403
        ) {
          signOut(auth);
          navigate('/login')
        }
      }
    };

    getAddUserItems();
  }, []);
  return (
    <div className="margin-top margin-bottom-footer-part">
      <h2 className="py-5 text-info fs-2 text-uppercase text-center">
        My Items -{addUserItems.length}
      </h2>
    </div>
  );
};

export default MyItems;
