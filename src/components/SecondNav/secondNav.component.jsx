import React from "react";
import MobileRecharge from "../../images/MOBILE-Recharge-blue-png.png";
import DTH from "../../images/CREDIT-CARD-blue-png.png";
import Loan from "../../images/HOME-LOAN-blue-png .png";
import News from "../../images/NEWS-blue-png.png";
import Promotion from "../../images/PROMOTION-blue-png.png";
import Blog from "../../images/BLOG-2-blue-png.png";
import "../SecondNav/secondNav.style.css";

function secondNavComponent() {
  return (
    <>
      <section className="nav2-wrapper">
        <div
          className=" navBar2 flex justify-between items-center  "
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="2500"
        >
          <figure
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1800"
            className="flex justify-between items-center flex-col cursor-pointer "
          >
            <img src={MobileRecharge} alt="MobileRecharge" />
            <figcaption>Mobile Recharge</figcaption>
          </figure>
          <figure
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1600"
            className="flex justify-between items-center flex-col cursor-pointer "
          >
            <img src={DTH} alt="DTH" />
            <figcaption>DTH</figcaption>
          </figure>
          <figure
            className="flex justify-between items-center flex-col cursor-pointer "
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1400"
          >
            <img src={Loan} alt="Loan" />
            <figcaption>Loan</figcaption>
          </figure>
          <figure
            className="flex justify-between items-center flex-col cursor-pointer "
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1200"
          >
            <img src={News} alt="News" />
            <figcaption>News</figcaption>
          </figure>
          <figure
            className="flex justify-between items-center flex-col cursor-pointer "
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <img src={Promotion} alt="Promotion" />
            <figcaption>Promotion</figcaption>
          </figure>
          <figure
            className="flex justify-between items-center flex-col cursor-pointer "
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="800"
          >
            <img src={Blog} alt="Blog" />
            <figcaption>Blog</figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}

export default secondNavComponent;
