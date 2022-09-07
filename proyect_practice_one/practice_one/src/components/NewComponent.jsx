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
  return (
    <div>
      <nav>
        <input type="search" onChange={(e) => handleChange(e)} />
      </nav>
    </div>
  );
}
