import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../cart/cart.style.css";

function cartComponent() {
  return (
    <div>
      <FontAwesomeIcon icon={faCartShopping} className="cursor-pointer icons" />
    </div>
  );
}

export default cartComponent;
