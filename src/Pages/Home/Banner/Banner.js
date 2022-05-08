import React from "react";
import { Link } from "react-router-dom";
import './Banner.css'


const Banner = () => {
  return (
    <div className="banner w-100">
     <div className="row container">
       <div className=" col-lg-8 col-md-12 col-sm-12 margin-top ">
         <h2 className="text-info pt-5 margin-top-heading  fs-1 fw-bold">Get Fresh Fruits</h2>
         <p className="fs-4 text-warp"><q>As our name suggests, at Fresh Fruits Company, our vision is to supply every one of our customers with the freshest, highest quality fruit & Fruit Trading, in Supermarkets</q></p>
         <Link to='/AllInventoryItems' className="btn btn-info margin-top text-light margin-bottom fs-5 px-2 fw-bold my-5">Explore Now</Link>
       </div>
     </div>
    </div>
  );
};

export default Banner;
