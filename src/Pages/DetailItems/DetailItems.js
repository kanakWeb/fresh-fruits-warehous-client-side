import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useItems from "../../hooks/useItems";

const DetailItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/items.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  const { itemId } = useParams();
  console.log(items);
  const deliveryHandle = () => {
    alert("Yeah! Done your delivery");
  };
  const item = items.filter((itemOne) => itemOne.id === itemId);

  return (
    <div className="margin-top margin-bottom">
      <div className="card container mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={item[0]?.picture}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{item[0]?.name}</h5>
              <h5 className="card-title">{item[0]?.price}</h5>
              <p className="card-text">{item[0]?.description}</p>
              <p className="card-text">{item[0]?.supplier}</p>
              <p className="card-text">{item[0]?.quantity}</p>
              <button
                onClick={deliveryHandle}
                className="card-text btn btn-warning"
              >
                <small className="">Delivery</small>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-5 container">
      <div className="col col-sm-12 col-md-12 col-lg-10 w-50 mx-auto mt-0">
        <div className="justify-content-center">
          <div className="pb-5">
            <form className="sizing-card">
              <div className="card login-card rounded-3">
                <div className="card-header p-0">
                  <div className="login-card  text-white text-center py-2">
                    <p className="py-3">Add a new items</p>
                  </div>
                </div>
                <div className="card-body p-3">
                  <div className="form-group">
                    <div className="input-group my-4">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <span>picture</span>
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="text"
                        name="text"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <span>price</span>
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <span>Description</span>
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="password"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <span>Supplier</span>
                        </div>
                      </div>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="password"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <span>Quantity</span>
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                         required
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <button
                      
                      className="btn btn-warning btn-block rounded-0 py-2 mt-4 rounded-lg"
                    >AddItem</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default DetailItems;
