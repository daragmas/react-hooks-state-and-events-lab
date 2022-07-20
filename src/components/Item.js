import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)
  const putInCart = ()=>{
    setIsInCart(!isInCart)
  }
  return (
    <li className={isInCart ? 'in-cart':""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={putInCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
