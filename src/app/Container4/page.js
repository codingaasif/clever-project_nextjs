"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

const Container4 = () => {
  const [zoomed, setZoomed] = useState(null);

  const handleZoom = (index) => {
    setZoomed(index);
  };

  const swiperParams = {
    spaceBetween: 10,
    slidesPerView: 5,
    breakpoints: {
      640: {
        slidesPerView: 1,
        centeredSlides: "true",
      },
      768: {
        slidesPerView: 1,
        centeredSlides: "true",
      },
      1024: {
        slidesPerView: 3,
        centeredSlides: "true",
      },
    },
  };

  console.log(process.env.NODE_ENV, "process");
  const cards = [
    {
      id: 1,
      name: "STEVENB1181",
      flag: "images/flag-image-us.png",
      country: "UNITED STATES",
      image: "images/men_image..png",
      review:
        "This is the 6th engagement I have had with Mike. He will work day and night for you.",
      rating: 5,
    },
    {
      id: 2,
      name: "STEVENB1181",
      flag: "images/flag-image-us.png",
      country: "UNITED STATES",
      image: "images/men_image..png",
      review:
        "This is the 6th engagement I have had with Mike. He will work day and night for you.",
      rating: 5,
    },
    {
      id: 3,
      name: "STEVENB1181",
      flag: "images/flag-image-us.png",
      country: "UNITED STATES",
      image: "images/men_image..png",
      review:
        "This is the 6th engagement I have had with Mike. He will work day and night for you.",
      rating: 5,
    },
    {
      id: 4,
      name: "STEVENB1181",
      flag: "images/flag-image-us.png",
      country: "UNITED STATES",
      image: "images/men_image..png",
      review:
        "This is the 6th engagement I have had with Mike. He will work day and night for you.",
      rating: 5,
    },
    {
      id: 5,
      name: "STEVENB1181",
      flag: "images/flag-image-us.png",
      country: "UNITED STATES",
      image: "images/men_image..png",
      review:
        "This is the 6th engagement I have had with Mike. He will work day and night for you.",
      rating: 5,
    },
  ];
  return (
    <div className="px-4 md:pl-7 md:pr-7" data-aos="fade-up">
      <div className="w-full text-center mt-16">
        <img src="images/text_image3.png" alt="text_image3" />
      </div>

      {/* Swiper-container */}

      <Swiper
        {...swiperParams}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        speed={1000}
        slidesPerView={1} // Default for mobile
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 200,
          modifier: 2,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        <div className="h-64 flex items-center justify-center text-white text-2xl">
          {cards.map((card, index) => (
            <SwiperSlide
              key={card.id}
              className={`lg:pl-8 h-full mt-12 lg:pr-8 w-full ${
                zoomed === index ? "active-card" : ""
              }`}
            >
              <div
                className={`bg-white p-3 shadow-lg rounded-lg w-full overflow-hidden transition-transform duration-300 ease-in-out card-class ${
                  zoomed === index
                    ? "transform scale-110 border-4 border-purple-500"
                    : ""
                }`}
              >
                <div className="flex items-center lg:gap-20 justify-between p-4 w-[300px]">
                  <div className="flex items-center">
                    <img
                      className={`h-12 w-12 sm:h-16 sm:w-16 rounded-full object-cover transition-transform duration-300 ease-in-out ${
                        zoomed === index ? "transform scale-110" : ""
                      }`}
                      src={card.image}
                      alt={card.name}
                      onClick={() => handleZoom(index)}
                    />
                    <div className="ml-2">
                      <p className="font-bold text-black text-sm sm:text-base">
                        {card.name}
                      </p>
                      <p className="text-gray-600 text-xs">{card.country}</p>
                    </div>
                  </div>
                  <div className="w-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600"
                    >
                      <path d="M20.25 0H3.75C1.68 0 0 1.68 0 3.75v16.5C0 22.32 1.68 24 3.75 24h16.5c2.07 0 3.75-1.68 3.75-3.75V3.75C24 1.68 22.32 0 20.25 0zM7.5 19.5h-3v-9h3v9zM5.25 8.76c-.69 0-1.25-.56-1.25-1.25 0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25c0 .69-.56 1.25-1.25 1.25zM19.5 19.5h-3v-4.5c0-1.38-.47-2.25-1.62-2.25-1.12 0-1.78.75-2.07 1.47-.11.27-.14.66-.14 1.03v4.25h-3s.04-8.25 0-9h3v1.25c.4-.62 1.13-1.5 2.75-1.5 2.03 0 3.5 1.31 3.5 4.19v5.06z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="pl-4 pr-4 pb-4 text-black text-xs">
                    {card.review}
                  </p>
                </div>
                <div className="flex items-center justify-center pb-2">
                  {[...Array(card.rating)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 sm:h-8 sm:w-8 text-purple-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 16l-4.24 2.45a.75.75 0 0 1-1.16-.65l.81-4.72L.69 7.78a.75.75 0 0 1 .42-1.28l4.75-.69L8.4 1.45a.75.75 0 0 1 1.2 0l2.53 4.16 4.75.69a.75.75 0 0 1 .42 1.28l-3.92 3.83.81 4.72a.75.75 0 0 1-1.16.65L10 16zm0-4a.75.75 0 0 0-1.22-.59l-2.2 1.27.44-2.56a.75.75 0 0 0-.22-.69L3.3 6.82l2.57-.37a.75.75 0 0 0 .42-.41l1.14-1.87 1.14 1.87a.75.75 0 0 0 .42.41l2.57.37-1.79 1.74a.75.75 0 0 0-.22.69l.44 2.56-2.2-1.27A.75.75 0 0 0 10 12z"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      {/* cross images */}
      <div className="w-full">
        <img className="absolute h-80" src="images/image.png" alt="image" />
        <img
          className="relative w-full h-80"
          src="images/image2.png"
          alt="image"
        />
      </div>
    </div>
  );
};

export default Container4;
