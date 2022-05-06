import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AllInventoryItem = ({item,handleDelete}) => {
  const navigate=useNavigate()
    const{_id,picture,name,price,description,supplier,quantity}=item

    const handleEdit=(id)=>{
   
        navigate(`/item/${id}`)
      }
    
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
          
           <div className='d-flex justify-content-between '>
           <button onClick={()=>handleDelete(_id)} className="btn text-light btn-warning m-1 w-50 fw-bold fs-5">Delete Item</button>
            <button onClick={()=>handleEdit(_id)} className="btn text-light btn-warning m-1 w-50 fw-bold fs-5">Edit Item</button>
           </div>
          
        </Card>
        
        
      </CardGroup>
       </div>
    );
};

export default AllInventoryItem;