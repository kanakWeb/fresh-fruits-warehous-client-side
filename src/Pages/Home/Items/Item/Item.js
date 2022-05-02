import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import '../Items/Items.css'

const Item = ({item}) => {
    const{picture,name,price,description,supplier,quantity}=item
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
            <p>{description}</p>
            <h6>Supplier : {supplier}</h6>
            <h6>quantity : {quantity}</h6>
            </Card.Text>
          </Card.Body>
          
            <small className="btn text-light btn-warning fw-bold fs-5">Update item</small>
          
        </Card>
        
        
      </CardGroup>
       </div>
    );
};

export default Item;