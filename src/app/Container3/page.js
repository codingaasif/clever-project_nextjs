/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

const Container3 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-6 lg:p-14 split-bg">
      <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex items-center justify-center bg-black lg:bg-transparent">
        <img
          className="w-full h-auto lg:h-screen mx-auto"
          src="images/men_image.png"
          alt="Your Image"
        />
      </div>

      <div
        className="w-full lg:w-1/2 text-center lg:text-left mb-16 flex items-center justify-center lg:justify-start"
        data-aos="fade-up"
      >
        <div className="text-white lg:text-end lg:text-black">
          <h3 className="text-3xl lg:mt-14 lg:text-5xl font-bold leading-tight">
            <p className="text-white">TO CURATE THE</p>
            <p className="text-white">ABOVE LIST,</p>
            <p className="text-white">WE'VE</p>
            <p className="text-white">ASSEMBLED A</p>
            <p className="text-black">TEAM OF</p>
            <p className="text-black">EXCEPTIONALLY</p>
            <p className="text-black">SKILLED</p>
            <p className="text-black">INDIVIDUALS.</p>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Container3;
