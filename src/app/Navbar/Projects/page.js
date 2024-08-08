/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const projectsName = [
  {
    id: 1,
    title: "PROJECT 1",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cras felis nisl elementum sit amet.",
  },
  {
    id: 2,
    title: "PROJECT 1",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cras felis nisl elementum sit amet.",
  },
  {
    id: 3,
    title: "PROJECT 1",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cras felis nisl elementum sit amet.",
  },
  {
    id: 4,
    title: "PROJECT 1",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cras felis nisl elementum sit amet.",
  },
  {
    id: 5,
    title: "PROJECT 1",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cras felis nisl elementum sit amet.",
  },
  {
    id: 6,
    title: "PROJECT 1",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cras felis nisl elementum sit amet.",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2
          className="text-4xl font-bold text-center mb-8 mt-14 underline
          underline-offset-4"
        >
          Projects
        </h2>
        <div className="flex justify-center items-center mb-10">
          <Link href="https://www.youtube.com" target="_vlank">
            <Image
              width={500}
              height={250}
              src="/images/youTube_player.png"
              alt=""
            />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projectsName.map((project) => (
            <div
              key={project.id}
              className="border border-gray-700 rounded-lg p-6 bg-gray-800"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <div className="flex gap-3 items-center">
                  <img
                    width="35"
                    height="35"
                    src="https://img.icons8.com/fluency/48/python.png"
                    alt="python"
                  />
                  <p>Phython</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="text-center">
                <button className="bg-purple-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-3xl">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="flex flex-col sm:flex-row items-center justify-between pl-4 pr-4 sm:pl-20 sm:pr-20 mb-5">
        <div className="text-center text-gray-500 mb-2">
          <p className="text-white">&copy; CLEVER PROJECTS 2024</p>
        </div>
        <div className="flex justify-center space-x-4 mb-4 ">
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

export default Projects;
