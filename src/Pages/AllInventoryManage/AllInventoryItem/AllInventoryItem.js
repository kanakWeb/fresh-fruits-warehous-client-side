import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const AllInventoryItem = ({item,handleDelete}) => {
    const{_id,picture,name,price,description,supplier,quantity}=item
    return (
        <div className='col-sm-12 col-md-6 col-lg-4  text-light  rounded rounded-lg 
        '>
            <CardGroup className='shadow shadow-lg '>
        <Card style={{background:'#857360'}} className=''>
          <Card.Img variant="top" width='200px'height='200px' src={picture} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            <h6>Price : ${price}</h6>
            <p><span className='fw-bold'>Description</span> : {description.slice(0,83)}..</p>
            <h6>Supplier : {supplier}</h6>
            <h6>quantity : {quantity}</h6>
            </Card.Text>
          </Card.Body>
          
            <button onClick={()=>handleDelete(_id)} className="btn text-light btn-warning fw-bold fs-5">Delete Item</button>
          
        </Card>
        
        
      </CardGroup>
       </div>
    );
};

export default AllInventoryItem;