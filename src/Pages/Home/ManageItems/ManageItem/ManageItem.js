import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const ManageItem = ({item}) => {
    const{picture,name,price,description,supplier,quantity}=item
    return (
       <div className='col-sm-12 col-md-6 col-lg-4  text-light  rounded rounded-lg 
        '>
            <CardGroup className='shadow shadow-lg '>
        <Card >
          <Card.Img variant="top" width='200px'height='200px' src={picture} />
          <Card.Body style={{background:'#857360'}}>
            <Card.Title>{name}</Card.Title>
            <Card.Text  >
            <h6>Price : ${price}</h6>
            <p>{description}</p>
            <h6>Supplier : {supplier}</h6>
            <h6>quantity : {quantity}</h6>
            </Card.Text>
          </Card.Body>
          
            <button className="btn  text-light  btn-warning m-1 fw-bold fs-5">Delete item</button>
  
        </Card>
        
        
      </CardGroup>
       </div>
    );
};

export default ManageItem;