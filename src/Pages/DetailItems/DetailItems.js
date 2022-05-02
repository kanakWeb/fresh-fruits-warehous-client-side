import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useItems from '../../hooks/useItems';

const DetailItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
      fetch(process.env.PUBLIC_URL + "/items.json")
        .then((res) => res.json())
        .then((data) => setItems(data));
    }, []);
    const{itemId}=useParams();
    console.log(items);
    const deliveryHandle = () => {
        alert("Yeah! Done your delivery");
        
        
      };
    const item = items.filter(
        (itemOne) => itemOne.id === itemId
      );
      
    return (
        <div className='margin-top'>
            <div className="card container mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={item[0]?.picture}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{item[0]?.name}</h5>
              <h5 className="card-title">{item[0]?.price}</h5>
              <p className="card-text">{item[0]?.description}</p>
              <p className="card-text">{item[0]?.supplier}</p>
              <p className="card-text">{item[0]?.quantity}</p>
              <button onClick={deliveryHandle} className="card-text btn btn-warning">
                <small className="">Delivery</small>
              </button>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default DetailItems;