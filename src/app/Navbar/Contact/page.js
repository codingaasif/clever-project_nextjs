/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

const Contact = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center min-h-screen bg-gray-900">
      <div className="max-w-lg w-full mt-28 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          LET'S TEAM UP FOR
          <h2 className="text-purple-500 text-3xl ">DIGITAL BRILLIANCE!</h2>
        </h2>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="YOUR NAME?"
              className="w-full p-3 border border-gray-700 rounded bg-gray-700 text-white focus:outline-none focus:border-purple-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="YOUR EMAIL?"
              className="w-full p-3 border border-gray-700 rounded bg-gray-700 text-white focus:outline-none focus:border-purple-500"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="YOUR MESSAGE"
              className="w-full p-3 border border-gray-700 rounded bg-gray-700 text-white focus:outline-none focus:border-purple-500"
              rows="5"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="sm:w-1/2 p-3 bg-purple-500 text-white rounded-3xl hover:bg-purple-600 transition-colors duration-300"
            >
              COMMIT
            </button>
          </div>
        </form>
      </div>

      <div className="flex flex-col lg:flex-row w-full lg:w-1/2 mb-6 lg:justify-between">
        <p className="text-white text-center mb-4 lg:mb-0">
          &copy; CLEVER PROJECTS 2024
        </p>
        <div className="flex justify-center lg:justify-start gap-4">
          <div>
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/color/30/facebook.png"
              alt="facebook"
            />
          </div>
          <div>
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/fluency/30/instagram-new.png"
              alt="instagram-new"
            />
          </div>
          <div>
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/color/30/youtube-play.png"
              alt="youtube-play"
            />
          </div>
          <div>
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/fluency/30/linkedin.png"
              alt="linkedin"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
