import Link from "next/link";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-12" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <span className="font-bold text-lg">Clever Projects</span>
            <p className="text-sm">A great place to be!</p>
          </div>
          <div className="flex space-x-6 justify-center cursor-pointer sm:justify-end mb-4 sm:mb-0">
            <SocialIcon
              href="https://github.com"
              icon={<FaGithub fontSize={30} />}
            />
            <SocialIcon
              href="https://twitter.com"
              icon={<FaTwitter fontSize={30} />}
            />
            <SocialIcon
              href="https://linkedin.com"
              icon={<FaLinkedin fontSize={30} />}
            />
            <SocialIcon
              href="https://instagram.com"
              icon={<FaInstagram fontSize={30} />}
            />
            <SocialIcon
              href="https://facebook.com"
              icon={<FaFacebook fontSize={30} />}
            />
          </div>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-center sm:text-left">
            &copy; 2024 Clever Projects. All rights reserved.
          </p>
          <div className="space-x-4 mt-4 sm:mt-0">
            <Link href="/privacy-policy">
              <p className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                Privacy Policy
              </p>
            </Link>
            <Link href="/terms-of-service">
              <p className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                Terms of Service
              </p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, icon }) => {
  return (
    <p
      href={href}
      className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </p>
  );
};

export default Footer;
