import React from 'react';
import useItems from '../../../hooks/useItems';
import AllInventoryItem from '../AllInventoryItem/AllInventoryItem';


const AllInventoryItems = () => {
    const[items]=useItems([])
    
    return (
        <div className='margin-top'>
            <div className='margin-top margin-bottom'>
           <h2 className='my-5 text-center text-uppercase  text-info fw-bold  fs-2'>All Inventory Items</h2> 
           <div className="row m-2 g-5">
               {
                   items.map(item=><AllInventoryItem
                   key={item._id}
                   item={item}
                   ></AllInventoryItem>)
               }
           </div>
        </div>
        </div>
    );
};

export default AllInventoryItems;