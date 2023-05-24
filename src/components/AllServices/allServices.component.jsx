import React from "react";
import "../AllServices/allServices.style.css";
import Slider from "react-slick";

function allServicesComponent() {
  const services = [
    {
      "Banner details": [
        {
          "banner id": 113,
          decription: null,
          image:
            "https://storage.googleapis.com/putatoeapp/Image/testImage/X0R1DJI",
          "is banner": false,
          is_mainpage: true,
          "service id": 56,
          "sub service id": null,
        },
        {
          "banner id": 114,
          decription: null,
          image:
            "https://storage.googleapis.com/putatoeapp/Image/testImage/CBCXNEB",
          "is banner": false,
          is_mainpage: true,
          "service id": 56,
          "sub service id": null,
        },
        {
          "banner id": 115,
          decription: null,
          image:
            "https://storage.googleapis.com/putatoeapp/Image/testImage/LU4BK0Q",
          "is banner": false,
          is_mainpage: true,
          "service id": 56,
          "sub service id": null,
        },
        {
          "banner id": 117,
          decription: null,
          image:
            "https://storage.googleapis.com/putatoeapp/Image/testImage/TRVXOAJ",
          "is banner": false,
          is_mainpage: true,
          "service id": 56,
          "sub service id": null,
        },
        {
          "banner id": 118,
          decription: null,
          image:
            "https://storage.googleapis.com/putatoeapp/Image/testImage/LRMWK6M",
          "is banner": false,
          is_mainpage: true,
          "service id": 56,
          "sub service id": null,
        },
        {
          "banner id": 119,
          decription: null,
          image:
            "https://storage.googleapis.com/putatoeapp/Image/testImage/QYXQIMA",
          "is banner": false,
          is_mainpage: true,
          "service id": 56,
          "sub service id": null,
        },
        {
          "banner id": 155,
          decription: null,
          image:
            "https://storage.googleapis.com/putatoeapp/Image/testImage/XV3FCZH",
          "is banner": false,
          is_mainpage: true,
          "service id": 11,
          "sub service id": null,
        },
        {
          "banner id": 159,
          decription: null,
          image:
            "https://storage.googleapis.com/putatoeapp/Image/testImage/MEVMMUE",
          "is banner": false,
          is_mainpage: true,
          "service id": 8,
          "sub service id": null,
        },
        {
          "banner id": 160,
          decription: null,
          image: "https://i.ibb.co/7g9HX9b/Artboard-112-2-11zon.jpg",
          "is banner": false,
          is_mainpage: true,
          "service id": 14,
          "sub service id": null,
        },
      ],
      error: "",
      status: true,
    },
  ];
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
        },
      },
    ],
  };

  return (
    <div className="services-wrapper ">
      <div>
        <h1 className="font-bold sm:text-[36px] text-[27px] text-[#00838f]  my-3 border-b-2">
          All Services
        </h1>
        <h2 className=" font-semibold text-gray-500 my-3">
          TOP SERVICES FOR CONSULTANCY
        </h2>
      </div>
      <div className="allServices">
        <Slider {...settings}>
          {services.map((banner) => {
            return banner["Banner details"].map((images) => {
              return (
                <div className="flex mx-1" id={images["banner id"]}>
                  <img
                    src={images.image}
                    alt={images.decription}
                    className=" max-w-[400px] object-cover SelectedImageStyling "
                  />
                </div>
              );
            });
          })}
        </Slider>
      </div>
    </div>
  );
}

export default allServicesComponent;
