import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state.app);

  const TotalArrayPrice = cart.map((p) => p.price)
  
  const totalAmount = TotalArrayPrice.reduce((aucc, curr) => {
    return aucc += curr
  },0)

  console.log(cart)
  return (
    <div className="container mt-5 ">
      <div className="row row-cols-md-2 row-cols-1 align-items-start w-40">
        <div className="col-md-8">
          
            
              {cart.map((p, index) => {
                return (
                  <div className="card mb-3 p-4 " key={index}>
                  <div className="row g-0" >
                    <div className="col-md-4">
                      <img
                        src= {p.image}
                        className="img-fluid rounded-start"
                        alt="..."
                        height={200}
                        width={200}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{p.title}</h5>
                        <p className="card-text">
                          ₹{p.price}
                        </p>
                        <p className="card-text">
                          <small className="text-body-secondary">
                            {p.description}
                          </small>
                        </p>
                      </div>
                    </div>
                    </div>
                    </div>
                );
              })}
          
        </div>
        <div className="col-md-4">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Price : ₹{totalAmount} </h5>
              <p className="card-text">
                Here' is your total price and move to the Products page
              </p>
              <Link to={'/'} className="btn btn-primary">
                  Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
