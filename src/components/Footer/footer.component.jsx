import React from "react";
import "../Footer/footer.style.css";
import ImageComponent from "../navbar/ImageSection/image.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function footerComponent() {
  return (
    <footer className="footer ">
      <div className="w-[100%] bg-[#00838f]  mt-5 ">
        <div>
          <div>
            <div className="flex justify-evenly py-5  px-6  gap-10  footer-content-wrapper  ">
              <div className="flex flex-col gap-2 justify-center sm:w-[50%] w-[70%]  ">
                <figure>
                  <ImageComponent />
                </figure>
                <p className="text-slate-200 font-bold ">
                  PUTATOE SOLUTIONS PVT. LTD.
                </p>
                <p className="text-slate-200 font-bold">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="cursor-pointer icons mr-1"
                  />
                  233 Harahawa Phatak, Near SBI Bank, Gorakhpur, Uttar Pradesh -
                  273001
                </p>
              </div>

              <div className="text-slate-200 flex gap-6 items-start">
                <div>
                  <a href="/">
                    <p className="font-bold">UseFul Links</p>
                  </a>
                  <a href="/">
                    <p>About Us</p>
                  </a>
                  <a href="/">
                    <p>Contact Us</p>
                  </a>
                  <a href="/">
                    <p>Services</p>
                  </a>
                  <a href="/">
                    <p>Blog</p>
                  </a>
                </div>
                <div className="footer-last-link">
                  <p className="font-bold ">Privacy Policy</p>
                  <a href="/">
                    <p>Privacy Policy</p>
                  </a>
                  <a href="/">
                    <p>Terms and Conditions</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright text-center  text-slate-200 ">
            <span>Copyright &copy; 2023 </span>
            <a
              href="https://www.linkedin.com/in/lakshya-roy729/"
              target="_blank"
              rel="noreferrer"
            >
              <span className=" font-bold font-[Garamond]">Lakshya Roy</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footerComponent;
