import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data,event) => {
    console.log(data);
    const url = `http://localhost:5000/inventoryItem`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast("Item added Successfully");
        event.target.reset()
      });
  };

  return (
    <div className="margin-top">
      <h2 className="text-info text-center"> Add Items</h2>
      <div className="mx-auto my-5 border p-3 rounded shadow-lg border-warning  w-50">
        <h2 className="text-center text-info">Please right info</h2>
        <form
          className="d-flex flex-column"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="my-2"
            placeholder="Item name:"
            type="text"
            {...register("name")}
         required />
          <input
            className="my-2"
            placeholder="Supplier name:"
            type="text"
            {...register("supplier")}
         required />
          <input
            className="my-2"
            placeholder="Price:$"
            type="number"
            {...register("price")}
         required />
          <textarea
            className="my-2"
            placeholder="Description:"
            {...register("description")}
          required/>
          <input
            className="my-2"
            placeholder="Quantity:"
            type="number"
            {...register("quantity")}
         required />
          <input
            className="mb-2"
            placeholder="Photo URL"
            type="text"
            {...register("picture")}
         required />
          <input
            className="my-2 bg-warning btn text-light fw-bold"
            type="submit"
            value="Add Service"
          />
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
