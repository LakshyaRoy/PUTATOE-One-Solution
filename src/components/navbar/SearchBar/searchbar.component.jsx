import React from "react";
import "../SearchBar/searchbar.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function searchBarComponent() {
  return (
    <div className="search-bar hidden sm:block">
      <input type="text" placeholder="Search for products and brands" />
      <button className="navbar-btn">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}

export default searchBarComponent;
