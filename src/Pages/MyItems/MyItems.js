import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import { Link } from "react-router-dom";
import { Card, CardGroup } from "react-bootstrap";
import axiosPrivate from "../../api/AxiosPrivate";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [addUserItems, setAddUserItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getAddUserItems = async () => {
      const email = user.email;
      const url = `https://whispering-scrubland-68201.herokuapp.com/inventoryItems?email=${email}`;
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
          navigate("/login");
        }
      }
    };

    getAddUserItems();
  }, [addUserItems]);


//delete

const handleDelete = (id) => {
  const deleteItem = window.confirm("Are You sure?");

  if (deleteItem) {
    const url = `https://whispering-scrubland-68201.herokuapp.com/inventoryItem/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
};

//edit
const handleEdit=(id)=>{
   
  navigate(`/item/${id}`)
}



  return (
    <div className="margin-top margin-bottom-footer-part">
      <h2 className="py-5 text-info fw-bold fs-2 text-uppercase text-center">
        My Items - {addUserItems.length}
      </h2>

      <div className="row row m-2 g-5">
        {addUserItems.map((uerItem) => (
          <div
            className="col-sm-12 col-md-6 col-lg-4  text-light  rounded rounded-lg 
            "
          >
            <CardGroup className="shadow shadow-lg ">
              <Card style={{ background: "#857360" }} className="">
                <Card.Img
                  variant="top"
                  width="200px"
                  height="200px"
                  src={uerItem?.picture}
                />
                <Card.Body>
                  <Card.Title>{uerItem?.name}</Card.Title>
                  <Card.Text>
                    <h6>Price : ${uerItem?.price}</h6>
                    <p>
                      <span className="fw-bold">Description</span> :{" "}
                      {uerItem?.description.slice(0, 83)}..
                    </p>
                    <h6>Supplier : {uerItem?.supplier}</h6>
                    <h6>quantity : {uerItem?.quantity}</h6>
                  </Card.Text>
                </Card.Body>

                <div className="d-flex justify-content-between ">
                  <button
                    onClick={()=>handleEdit(uerItem?._id)}
                    className="btn text-light btn-warning m-1 w-50 fw-bold fs-5"
                  >
                    Edit item
                  </button>
                  <button onClick={()=>handleDelete(uerItem?._id)} className="btn text-light btn-warning m-1 w-50 fw-bold fs-5">Delete Item</button>
                </div>
              </Card>
            </CardGroup>
          </div>
        ))}
      </div>
      <div className=" py-5 w-50  ms-auto ">
          <Link to="/addItems" className="btn text-light fw-bold btn-warning">
            Add New Item
          </Link>
        </div>
    </div>
  );
};

export default MyItems;
