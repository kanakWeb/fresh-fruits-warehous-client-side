import React from 'react';
import useItems from '../../../../hooks/useItems';
import ManageItem from '../ManageItem/ManageItem';

const ManageItems = () => {
    const[items]=useItems([])
    console.log(items);
    return (
      
            <div className='margin-top margin-bottom'>
               <h2 className='my-5 text-center text-uppercase text-warning fw-bold  fs-1'>Inventory</h2> 
               <div className="row m-2 g-5">
                   {
                       items.map(item=><ManageItem
                       key={item.id}
                       item={item}
                       ></ManageItem>)
                   }
               </div>
            </div>
       
    );
};

export default ManageItems;