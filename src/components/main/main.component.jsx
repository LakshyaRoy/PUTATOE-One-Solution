import React, { useState } from "react";
import "../main/main.style.css";
import Recharge from "../../images/recharge.png";
import Mobile from "../../images/mobile.jpg";
import Loan from "../../images/loan.jpg";
import Promo from "../../images/promo.jpg";
import Paper from "../../images/paper.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

function useMainComponent() {
  const slides = [
    {
      url: Recharge,
    },
    {
      url: Mobile,
    },
    {
      url: Loan,
    },
    {
      url: Promo,
    },
    {
      url: Recharge,
    },
    {
      url: Paper,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 3000); // Change slide every 3 seconds

  //   return () => {
  //     clearInterval(interval);
  //   };
  // });
  return (
    <>
      <div className="max-w-[750px] h-[320px] w-full m-auto py-5 px-4 relative  carousal-wrapper group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className=" img-container h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>

        {/* left arrow */}
        <button>
          <p
            onClick={prevSlide}
            className="carousal-btn-left hidden group-hover:block"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </p>
        </button>
        {/* right arrow */}
        <button>
          <p
            onClick={nextSlide}
            className="carousal-btn-right hidden group-hover:block"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </p>
        </button>

        <div className="flex top-4 justify-center py-2 gap-3">
          {slides.map((slide, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  goToSlide(index);
                }}
                className="text-[8px] cursor-pointer "
              >
                <FontAwesomeIcon icon={faCircle} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default useMainComponent;
