/* eslint-disable @next/next/no-img-element */
// components/CareerPage.js

import { FaShareAlt } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

const jobListings = [
  {
    id: 1,
    title: "Python Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...",
  },
  {
    id: 2,
    title: "Python Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...",
  },
  {
    id: 3,
    title: "Python Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...",
  },
];

const Career = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="text-center py-10 mt-16">
        <h1 className="text-4xl sm:text-5xl font-bold">
          GROW YOUR CAREER WITH
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold  mt-2">
          OUR <span className="text-purple-500"> DIGITAL WIZARDS! </span>
        </h2>
      </header>

      <main className="flex-grow container mx-auto px-4">
        {jobListings.map((job) => (
          <div
            key={job.id}
            className="bg-white text-gray-800 p-6 rounded-lg mb-4"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold">
                  {job.title}
                </h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  <p className="border pl-3 pr-3 rounded-3xl">Full Time</p>
                  <p className="border pl-3 pr-3 rounded-3xl">Remote</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
                <button className="flex items-center space-x-1 bg-white hover:bg-gray-600 hover:text-white px-3 py-2 rounded-lg">
                  <span>Share</span>
                  <FaShareAlt />
                </button>
                <button className="flex items-center space-x-1 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-lg">
                  <span>Apply</span>
                  <AiOutlineArrowRight />
                </button>
              </div>
            </div>
            <p className="text-sm text-justify">{job.description}</p>
            <span className="text-gray-500 text-xs block mt-2">2 hrs ago</span>
          </div>
        ))}
      </main>

      <footer className="flex flex-col sm:flex-row items-center justify-between pl-4 pr-4 sm:pl-20 sm:pr-20 mb-5">
        <div className="text-center text-gray-500 mb-2">
          <p className="text-white">&copy; CLEVER PROJECTS 2024</p>
        </div>
        <div className="flex justify-center space-x-4 mb-4 sm:mb-0">
          <a href="https://facebook.com" aria-label="Facebook">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/color/40/facebook.png"
              alt="facebook"
            />
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/fluency/30/instagram-new.png"
              alt="instagram-new"
            />
          </a>
          <a href="https://youtube.com" aria-label="YouTube">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/color/30/youtube-play.png"
              alt="youtube-play"
            />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/fluency/30/linkedin.png"
              alt="linkedin"
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Career;
