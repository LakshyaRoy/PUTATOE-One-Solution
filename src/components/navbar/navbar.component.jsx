import React from "react";
import "../navbar/navbar.style.css";
import ImageComponent from "./ImageSection/image.component";
import SearchBarComponent from "./SearchBar/searchbar.component";
import ProfileComponent from "./ProfileSection/profile.component";
import Cart from "./cart/cart.component";
import Notification from "./notification/notification.component";
import Location from "./location/location.component";
function NavBar() {
  return (
    <React.Fragment>
      <nav className="  flex justify-between gap-3 items-center p-6 w-100 ">
        <ImageComponent />
        <div className="flex justify-start gap-8 items-center">
          <Location />
          <SearchBarComponent />
          <div className="flex justify-start gap-6 items-center  ">
            <Cart />
            <Notification />
            <ProfileComponent />
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default NavBar;
