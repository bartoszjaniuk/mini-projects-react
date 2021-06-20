import React, { useState, useEffect } from "react";
import useFetchExample from "./useFetchExample";
// import { useFetch } from "./2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/javascript-store-products";

const FetchExample = () => {
  const { loading, data } = useFetchExample(url);
  console.log(data);
  return (
    <div>
      <h2>{loading ? "loading..." : "data"}</h2>
    </div>
  );
};

export default FetchExample;
