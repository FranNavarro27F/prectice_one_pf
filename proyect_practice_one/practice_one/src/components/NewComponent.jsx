import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import getProducts from "actions";

export default function NewComponent() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState("");

  const handleChange = () => {
    dispatch(getProducts(product));
  };
  const handlesubmit = () => {
    dispatch(getProducts(product));
  };
  return (
    <div>
      <form action="" onSubmit={handlesubmit}>
        <nav>
          <input type="search" onChange={(e) => handleChange(e)} />
        </nav>
      </form>
    </div>
  );
}
