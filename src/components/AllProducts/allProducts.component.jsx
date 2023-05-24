import React from "react";
import "../AllProducts/allProduct.style.css";

import Slider from "react-slick";

function useAllProductsComponent() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [
    {
      id: 1,
      image:
        "https://storage.googleapis.com/putatoeapp/Image/testImage/DR7JWIJ",
      text: `Incorporation Of Public Company`,
      semiText: `Startup, Incorporation & Registration`,
    },
    {
      id: 2,
      image:
        "https://storage.googleapis.com/putatoeapp/Image/testImage/BTLZKP7",
      text: `Nidhi Company`,
      semiText: `Startup, Incorporation & Registration`,
    },
    {
      id: 3,
      image:
        "https://storage.googleapis.com/putatoeapp/Image/testImage/31T3PO3",
      text: `APERA Registration`,
      semiText: `Startup, Incorporation & Registration`,
    },
    {
      id: 4,
      image:
        "https://storage.googleapis.com/putatoeapp/Image/testImage/69N6TZS",
      text: `StartUp India Registration`,
      semiText: `Startup, Incorporation & Registration`,
    },
    {
      id: 5,
      image:
        "https://storage.googleapis.com/putatoeapp/Image/testImage/YSXIPIV",
      text: `MSME Registration`,
      semiText: `Startup, Incorporation & Registration`,
    },
    {
      id: 6,
      image:
        "https://storage.googleapis.com/putatoeapp/Image/testImage/KMJM1RA",
      text: `GST Registration`,
      semiText: `Startup, Incorporation & Registration`,
    },
    {
      id: 7,
      image:
        "https://storage.googleapis.com/putatoeapp/Image/testImage/ETEZTR1",
      text: `Salary Return`,
      semiText: `Startup, Incorporation & Registration`,
    },
    {
      id: 8,
      image:
        "https://storage.googleapis.com/putatoeapp/Image/testImage/KZ37QQ2",
      text: `Business Return`,
      semiText: `Startup, Incorporation & Registration`,
    },
  ];

  // console.log(images);

  return (
    <>
      <section className="allProducts-wrapper">
        <div className="allProducts">
          <h1 className=" font-bold text-[27px] sm:text-[36px] text-[#00838f] border-b-2 ">
            All Products
          </h1>
        </div>

        <div>
          <h2 className=" font-semibold text-gray-500 my-3">
            TOP DEALS FOR CONSULTANCY
          </h2>

          <div>
            <figure>
              <Slider {...settings} className="flex gap-6   ">
                {images.map((image) => {
                  return (
                    <div
                      key={image.id} // Add the key prop here
                      id={image.id}
                      className="hover:scale-90 transition-all duration-500 cursor-pointer"
                    >
                      <a href="/">
                        <div className="image-wrapper-all-product w-[250px]">
                          <img
                            src={image.image}
                            className="img-fluid w-60"
                            alt={image.id}
                          />
                          <figcaption>
                            <p className="main-text-product">
                              {image.text.length < 20
                                ? image.text
                                : image.text.slice(0, 20).padEnd(20 + 3, ".")}
                            </p>
                          </figcaption>
                          <p className="semiText-product">{image.semiText}</p>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </Slider>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}

export default useAllProductsComponent;
