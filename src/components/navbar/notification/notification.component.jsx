import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import "../notification/noti.style.css";

function notificationComponent() {
  return (
    <div>
      <FontAwesomeIcon icon={faBell} className="cursor-pointer icons" />
    </div>
  );
}

export default notificationComponent;
