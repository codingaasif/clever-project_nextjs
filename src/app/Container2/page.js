/* eslint-disable @next/next/no-img-element */
const Container2 = () => {
  return (
    <div
      className="flex flex-col md:flex-row text-white px-4 md:px-14 pb-10"
      data-aos="fade-up"
    >
      <div className="flex-1 p-4 md:p-10 text-center md:text-left">
        <h3 className="text-2xl lg:text-5xl md:text-6xl font-bold mb-4">
          SOFTWARE DEVELOPMENT
        </h3>
        <h3 className="text-2xl lg:text-5xl md:text-6xl font-bold mb-4">
          E-COMMERCE SOLUTIONS
        </h3>
        <h3 className="text-2xl lg:text-5xl md:text-6xl font-bold mb-4">
          DEVOPS
        </h3>
        <h3 className="text-2xl lg:text-5xl md:text-6xl font-bold">IAM</h3>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          className="w-full max-w-xs md:max-w-md"
          src="images/PurpleBall.png"
          alt="Your Image"
        />
      </div>
    </div>
  );
};

export default Container2;
