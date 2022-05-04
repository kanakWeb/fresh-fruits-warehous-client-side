import React from "react";
import image from "../../images/banner2.jpg";

const AboutHealth = () => {
  return (
    <div
      className="p-5 my-5"
      style={{
        background: "rgba(182, 101, 9, 0.342)",
        padding: "10px",
        margin: "10px",
        borderRadius: "10px",
      }}
    >
      <h2 className="text-center py-5 fs-2 text-info fw-bold">
        About For Health{" "}
      </h2>
      <div className="w-100 row mt-5">
        <div className="col-lg-5 col-sm-12 col-md-12 mt-2">
          <img
            width="500px"
            className="img-thumbnail rounded"
            src={image}
            alt=""
          />
        </div>

        <div className=" col-lg-7 col-sm-12 col-md-12">
          <h2 className="text-info">About:</h2>
          <p className="fs-4 ">
            If you like to feed your family members with natural or
            organic foods, delight in Walmart's inventory of organic
            thrills, which are made without man-made active
            ingredients; they're grown without artificial chemicals or
            chemical fertilizers. Food is classified as natural by the
            way farmers expand and refine their agricultural products,
            like different fruits, - apple, Orange, and pineapple etc
            items.
          </p>
        </div>
      </div>
      </div>
    
  );
};

export default AboutHealth;
