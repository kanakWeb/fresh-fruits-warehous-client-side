import useItems from '../../../../hooks/useItems';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
const[items]=useItems([])

    return (
        <div style={{background:'rgba(70, 77, 71, 0.664)', padding: "30px 10px",
        margin: "10px",
        borderRadius: "10px",}} className='margin-top margin-bottom '>
           <h2 className='my-5 text-center text-uppercase text-info fw-bold  fs-2'>Inventory</h2> 
           <div className="row m-2 g-5 py-5">
               {
                   items.slice(0,6).map(item=><Item
                   key={item._id}
                   item={item}
                   ></Item>)
               }
           </div>
        </div>
    );
};

export default Items;