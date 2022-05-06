import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" margin-top">
      <footer
        style={{ background: "#191e32" }}
        className=" footer mb-0  text-light   font-small blue pt-4"
      >
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase">Fresh Fruits inventory</h5>
              <p>
              Get connected with us on social Fresh Fruits ::
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3"></div>
            <Link to='/items' className=" text-decoration-none  fw-bold text-white" >Click Here is the best Items
          </Link>
            <div className="col-md-3 mb-md-0 mb-3"></div>
          </div>
        </div>
        <hr />
        <div className="footer-copyright text-center py-2">
          &copy; 2020 Copyright :
          <Link to='/' className="btn fw-bold text-warning" >Fresh Fruits
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
