/* eslint-disable @next/next/no-img-element */
import React from "react";

const Container1 = () => {
  return (
    <div
      className="flex flex-col items-center justify-center mt-20 lg:mt-0"
      data-aos="fade-up"
    >
      <div className="p-5 bg-black text-center lg:mt-20 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2">
        <img src="images/text_image1.png" alt="text_image1" />
      </div>
      <div className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4">
        <img
          className="w-full h-auto"
          src="images/PurpleBall.png"
          alt="Purple Ball"
        />
      </div>
    </div>
  );
};

export default Container1;
