import React, { useState, useEffect, useCallback, useMemo } from "react";
import useFetchExample from "../fetch-example/useFetchExample";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/javascript-store-products";

// every time props or state changes, component re-renders

const MemoPage = () => {
  const { data, loading } = useFetchExample(url);
  const [count, setCount] = useState(0);

  return (
    <>
      {loading ? (
        "Loading ..."
      ) : (
        <div>
          {" "}
          <h1>Count : {count}</h1>
          <button className="btn" onClick={() => setCount(count + 1)}>
            click me
          </button>
          <BigList products={data} />
        </div>
      )}
    </>
  );
};

const BigList = ({ products }) => {
  return (
    <div className="products">
      {products.map((product) => {
        return <SingleProduct key={product.id} {...product}></SingleProduct>;
      })}
    </div>
  );
};

const SingleProduct = ({ fields }) => {
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <div className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
    </div>
  );
};
export default MemoPage;
