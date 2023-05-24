import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../ProfileSection/profile.css";
const Profile = () => {
  const [isProfile, setisProfile] = useState(false);

  return (
    <>
      <div>
        <div>
          <FontAwesomeIcon
            icon={faUser}
            className="cursor-pointer profile dropDown"
            onClick={() => setisProfile(!isProfile)}
          />

          <div>
            {isProfile ? (
              <ul className="dropDown-list">
                <a href="/">
                  <li> Login </li>
                </a>

                <a href="/">
                  <li> Sign Up </li>
                </a>
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
