/* eslint-disable @next/next/no-img-element */
// components/Navbar.js
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getLinkClass = (path) => {
    return router.pathname === path ? "active-link mx-4" : "text-white mx-4";
  };

  const getMobileLinkClass = (path) => {
    return router.pathname === path
      ? "active-link block my-2"
      : "text-white block my-2";
  };

  return (
    <nav className="bg-gray-800 p-6 top-0 fixed w-screen z-10">
      <div className="max-w-7xl flex justify-between items-center">
        <div className="hidden md:flex">
          <Link href="/Navbar/Contact">
            <p className={getLinkClass("/Navbar/Contact")}>CONTACT</p>
          </Link>
          <Link href="/Navbar/Projects">
            <p className={getLinkClass("/Navbar/Projects")}>PROJECTS</p>
          </Link>
          <Link href="/Navbar/Products">
            <p className={getLinkClass("/Navbar/Products")}>PRODUCTS</p>
          </Link>
          <Link href="/Navbar/Careers">
            <p className={getLinkClass("/Navbar/Careers")}>CAREERS</p>
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <div>
                {" "}
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
              </div>
            ) : (
              <div>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </div>
            )}
          </button>
        </div>

        <div className="flex items-center shrink-0">
          <Link href="/">
            <img
              width={45}
              height={45}
              src="/images/clever_logo.png"
              alt="logo"
            />
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden text-center flex gap-8 flex-col">
          <Link href="/Navbar/Contact">
            <p
              className={getMobileLinkClass("/Navbar/Contact")}
              onClick={toggleMenu}
            >
              CONTACT
            </p>
          </Link>
          <Link href="/Navbar/Projects">
            <p
              className={getMobileLinkClass("/Navbar/Projects")}
              onClick={toggleMenu}
            >
              PROJECTS
            </p>
          </Link>
          <Link href="/Navbar/Products">
            <p
              className={getMobileLinkClass("/Navbar/Products")}
              onClick={toggleMenu}
            >
              PRODUCTS
            </p>
          </Link>
          <Link href="/Navbar/Careers">
            <p
              className={getMobileLinkClass("/Navbar/Careers")}
              onClick={toggleMenu}
            >
              CAREERS
            </p>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
