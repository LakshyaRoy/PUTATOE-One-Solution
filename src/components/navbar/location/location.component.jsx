import React from "react";
import "../location/location.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function locationComponent() {
  return (
    <>
      <div className=" locationComponent flex justify-center gap-2 text-white">
        <FontAwesomeIcon
          icon={faLocationDot}
          className="cursor-pointer icons"
        />
        <p>New Delhi</p>
      </div>
    </>
  );
}

export default locationComponent;
