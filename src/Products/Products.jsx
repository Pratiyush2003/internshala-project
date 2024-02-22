import React, { useEffect, useState } from "react";
import { getAllProduct } from "../Store/Reducers.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Store/Reducers.jsx";

const Products = () => {
  const dispatch = useDispatch();
  const { products = [], loading, error  } = useSelector((state) => state.app.products);
  const {searchData } = useSelector((state) => state.app);
 
  const [filterByPrice , setFilterbyPrice] = useState(0);

  const addToCartFunctionality = (image , title, price, description) => {
      dispatch(addToCart({image, title, price, description }))
  }

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);
  return (
    <>
      <div className="container d-flex align-items-center justify-content-center">
      <div className="mt-5">
        <label htmlFor="customRange2" className="form-label">Price {'>'} {filterByPrice === 0 ? "Set Filter" : filterByPrice}</label>
        <input type="range" className="form-range" min={0} max={1000} id="customRange2"
        onChange={(e) => setFilterbyPrice(e.target.value)} value={filterByPrice} />
      </div>

      </div>
        
      <div className="container">
      
        <div className="row row-cols-1 row-cols-md-3 g-4 p-5">
          
            {products
            .filter((ele) => {
              if(searchData.length === 0){
                return ele;
              }else{
                return ele.title.toLowerCase().includes(searchData.toLowerCase())
              }
            })
            .filter((ele) => {
              if(filterByPrice <= 0){
                return ele;
              }else{
                return ele.price >= filterByPrice
              }
            })
            .map((p , index) => (
              <div className="col" key={index}>
                <div className="card">
                <img src= {p.images[0]} className="card-img-top" alt="..." height={250} width={100}/>
                <div className="card-body">
                  <h4 className="card-title js-description-text">{p.title}</h4>
                  <p className="card-text js-description-text">
                    {p.description}
                  </p>
                  <div className="d-flex align-items-center justify-content-around">
                  <button className="btn btn-outline-primary">₹{p.price}</button>
                  <button className="btn btn-primary" onClick={() => addToCartFunctionality(p.images[0], p.title, p.price, p.description)}>Shop Now</button>
                  </div>
                </div>
                </div>
              </div>  
              )
            )
              
            }
          </div>
          </div>
          
          
    </>
  );
};

export default Products;
