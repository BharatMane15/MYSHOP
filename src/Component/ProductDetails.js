import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectedProduct } from "../Actions";
import { removeProduct } from "../Actions";
const ProductDetails = () => {
  const myProduct = useSelector((state) => state.product);
  const { image, id, title, price } = myProduct;
  const { productId } = useParams();
  console.log(productId);
  console.log(myProduct);

  const dispatch = useDispatch();
  const fetchSingleDetails = async () => {
    const result = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(selectedProduct(result.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchSingleDetails();
    return () => {
      dispatch(removeProduct());
    };
  }, [productId]);
  return (
    <>
      <div
        class="card"
        style={{
          width: "30rem",
          margin: "auto",
          marginTop: "4rem",
          boxShadow: "7px 7px 7px 7px  gray",
        }}
      >
        <img
          class="card-img-top"
          style={{ height: "50vh", width: "50vh", margin: "auto" }}
          src={image}
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <h4 style={{ textAlign: "center" }}>${price}</h4>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>

          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <a href="#" class="btn btn-outline-warning">
              Add To Cart
            </a>
            <a href="#" class="btn btn-outline-success">
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
