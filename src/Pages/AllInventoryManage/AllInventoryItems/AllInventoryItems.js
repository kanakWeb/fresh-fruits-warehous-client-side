import React from 'react';
import useItems from '../../../hooks/useItems';
import AllInventoryItem from '../AllInventoryItem/AllInventoryItem';


const AllInventoryItems = () => {
    const[items]=useItems()


    const handleDelete=(id)=>{
const deleteItem=window.confirm("Are You sure?")

if(deleteItem){
    const url=`http://localhost:5000/inventoryItem/${id}`
    fetch(url,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
}
    }
    return (
        <div className='margin-top'>
            <div className='margin-top margin-bottom'>
           <h2 className='my-5 text-center text-uppercase  text-info fw-bold  fs-2'>All Inventory Items</h2> 
           <div className="row m-2 g-5">
               {
                   items.map(item=><AllInventoryItem
                   key={item._id}
                   item={item}
                   handleDelete={handleDelete}
                   ></AllInventoryItem>)
               }
           </div>
        </div>
        </div>
    );
};

export default AllInventoryItems;