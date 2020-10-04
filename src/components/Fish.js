import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  render() {
    //   ES6 destructuring. This uses the detail to name and access the variable.
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === "available";
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fishname">{name}</h3>
        <span className="price">{formatPrice(price)}</span>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={() => this.props.addToOrder(this.props.index)}>
          {isAvailable ? "Add To Cart" : "Sold Out! "}
        </button>
      </li>
    );
  }
}

export default Fish;
