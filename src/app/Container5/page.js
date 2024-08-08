/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
const Container5 = () => {
  return (
    <div
      className="flex flex-col items-center justify-center p-5 md:p-10"
      data-aos="fade-up"
    >
      <div className="text-center w-full md:w-1/2">
        <img src="images/text_image5.png" alt="text_image5" />
        {/* <h1 className="text-white text-4xl md:text-6xl font-bold">
          LOCKED AND LOADED FOR{" "}
          <span className="text-purple-700"> COLLABORATION? </span> LET'S DEPLOY
          SOME TECH MAGIC TOGETHER
        </h1> */}
      </div>
      <button className="mt-6 font-bold text-center text-white bg-purple-600 py-2 px-6 rounded-3xl">
        DEPLOY
      </button>
      <div className="flex flex-wrap justify-center text-white gap-5 mt-10">
        <div className="flex flex-row items-center gap-2">
          <img
            className="w-6 h-6 md:w-8 md:h-8"
            src="/images/icons8-facebook-48.png"
            alt="Facebook"
          />
          <p>CLEVERPROJECTS</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <img
            className="w-6 h-6 md:w-8 md:h-8"
            src="/images/icons8-instagram-48.png"
            alt="Instagram"
          />
          <p>CLEVERPROJECTS</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <img
            className="w-6 h-6 md:w-8 md:h-8"
            src="/images/icons8-youtube-48.png"
            alt="YouTube"
          />
          <p>@CLEVERPROJECTS</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <img
            className="w-6 h-6 md:w-8 md:h-8"
            src="/images/icons8-linkedin-48.png"
            alt="LinkedIn"
          />
          <p>@CLEVERPROJECTS</p>
        </div>
      </div>
    </div>
  );
};
export default Container5;
