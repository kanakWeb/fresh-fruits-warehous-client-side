import React from 'react';

const Review = () => {
    return (
        <div style={{background:' rgba(207, 211, 214, 0.548)',padding:"10px", margin:"10px", borderRadius:'10px'}} classNameName="container w-100  py-5">
        <h4 className="py-2 pt-4 text-center fs-2 text-uppercase fw-bold text-info">Review & Details</h4>
        <div  className="row  py-5  w-100 g-2 ">
            <div className="col-sm-12 col-md-2 col-lg-3">
                <div className="card bg-secondary border-info mx-sm-1 p-3">
                    <div className="bg-secondary card border-info shadow text-info p-3 my-card"><span className="text-center"
                            aria-hidden="true">🍒</span></div>
                    <div className="text-info text-center mt-3">
                        <h4>Delivery</h4>
                    </div>
                    <div className="text-info text-center mt-2">
                        <h1>234K</h1>
                    </div>
                </div>
            </div>
            <div className="   col-sm-12 col-md-2 col-lg-3">
                <div className="card  border-secondary mx-sm-1 p-3">
                    <div className="card   border-secondary shadow text-dark p-3 my-card"><span className="text-center"
                            aria-hidden="true">👁️</span></div>
                    <div className="text-dark text-center mt-3">
                        <h4>Eyes</h4>
                    </div>
                    <div className="text-dark text-center mt-2">
                        <h1>932M</h1>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-2 col-lg-3">
                <div className="card bg-dark border-warning mx-sm-1 p-3">
                    <div className="card bg-dark border-warning shadow text-warning p-3 my-card"><span className="text-center"
                            aria-hidden="true">📨</span></div>
                    <div className="text-warning text-center mt-3">
                        <h4>Inbox</h4>
                    </div>
                    <div className="text-warning text-center mt-2">
                        <h1>346M</h1>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-2 col-lg-3">
                <div className="card bg-secondary border-info mx-sm-1 p-3">
                    <div className="bg-secondary text-light card border-info shadow text-danger p-3 my-card"><span className="text-center"
                            aria-hidden="true">✰✰✰✰✰</span></div>
                    <div className="text-secondary text-center mt-3">
                        <h4 className="text-light">Review</h4>
                    </div>
                    <div className="text-danger text-center mt-2">
                        <h1 className="text-light">346M</h1>
                    </div>
                </div>
            </div>
            
        </div>
    </div>

    );
};

export default Review;