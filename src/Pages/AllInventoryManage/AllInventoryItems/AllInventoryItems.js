import React from "react";
import { Link } from "react-router-dom";
import useItems from "../../../hooks/useItems";
import AllInventoryItem from "../AllInventoryItem/AllInventoryItem";

const AllInventoryItems = () => {
  const [items] = useItems();

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
  return (
    <div className="margin-top">
      <div className="margin-top margin-bottom">
        <h2 className="my-5 text-center text-uppercase  text-info fw-bold  fs-2">
          All Inventory Items
        </h2>
        <div className="row m-2 g-5">
          {items.map((item) => (
            <AllInventoryItem
              key={item._id}
              item={item}
              handleDelete={handleDelete}
            ></AllInventoryItem>
          ))}
        </div>
        <div className=" py-5 w-50 ms-auto ">
          <Link to="/addItems" className="btn btn-warning">
            Add New Item
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllInventoryItems;
