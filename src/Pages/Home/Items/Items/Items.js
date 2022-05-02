import useItems from '../../../../hooks/useItems';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
const[items]=useItems([])

    return (
        <div className='margin-top margin-bottom'>
           <h2 className='my-5 text-center text-uppercase text-warning fw-bold  fs-1'>Inventory</h2> 
           <div className="row m-2 g-5">
               {
                   items.slice(0,6).map(item=><Item
                   key={item.id}
                   item={item}
                   ></Item>)
               }
           </div>
        </div>
    );
};

export default Items;