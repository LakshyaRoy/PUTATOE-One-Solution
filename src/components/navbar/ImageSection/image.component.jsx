import React from "react";
import Logo from "../../../images/logo.png";
import "../ImageSection/image.style.css";

function imageComponent() {
  return (
    <div className="logo flex ">
      {/* Logo image */}
      <a href="/">
        <img src={Logo} alt="brand-logo" height="auto" width="50" />
      </a>
      <div className="mx-2">
        <p className="title-logo">
          PUTATOE
          <span className="logo-semi-title">One Solution</span>
        </p>
      </div>
    </div>
  );
}

export default imageComponent;
