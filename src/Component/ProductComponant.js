import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setProducts } from "../Actions";
const ProductComponant = () => {
  const myproducts = useSelector((state) => state.shoppingDetails.products);
  const fetchProduct = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    dispatch(setProducts(result.data));
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const dispatch = useDispatch();
  return (
    <>
      {myproducts.map((curr) => (
        <>
          <div
            class="card"
            style={{ width: "18rem", height: "35rem", margin: "2rem" }}
            key={curr.id}
          >
            <img
              class="card-img-bottom"
              style={{ width: "12rem", height: "15rem", margin: "auto" }}
              src={curr.image}
              alt="Card image cap"
            />

            <div class="card-body">
              <p className="card-title">{curr.id}</p>
              <p class="card-text">{curr.category}</p>

              <h5 class="card-title">{curr.title}</h5>
              <h4> rating : {curr.rating.rate}</h4>
              <h2>${curr.price}</h2>
              <Link to={`/product/${curr.id}`}>
                <a style={{margin:"auto"}} href="#" class="btn btn-primary">
                  more Details
                </a>
              </Link>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default ProductComponant;
