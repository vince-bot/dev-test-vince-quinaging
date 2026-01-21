"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomIcon from "../components/svg-custom/CustomIcon";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar({}) {
  const [open, setOpen] = useState(false);
  const logo = "/image/head-logo.png";

  const menu = [
    {
      name: "Knowledge Hub",
      link: "#",
    },
    {
      name: "Programs",
      link: "#",
    },
    {
      name: "Training and Events",
      link: "#",
    },
    {
      name: "News",
      link: "#",
    },
    {
      name: "About Us",
      link: "#",
    },
  ];

  return (
    <nav className="w-full bg-neutral-white fixed top-0 z-50 border-b border-neutral-light-grey">
      <div className="w-full max-w-[1550px] mx-auto px-5 sm:px-10 lg:px-25 xl:px-29 flex items-center justify-between h-20">
        <Image
          src={logo}
          alt="Logo"
          className="w-[230px] h-auto"
          width={1000}
          height={1000}
          priority
        />

        <div className="hidden lg:flex items-center gap-x-5">
          <Link href="#" className="font-bold text-black">
            Login
          </Link>

          <CustomIcon iconType="search" fill="#000000" width={24} height={24} />

          <Link
            href="#"
            className="bg-grape-gradient rounded-full px-6 py-3 text-white font-bold"
          >
            Contact Us
          </Link>
        </div>

        {/* Burger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-3xl text-core-dark-blue"
        >
          {open ? (
            <CustomIcon
              iconType="close-icon"
              width={24}
              height={24}
              fill="#1F3262"
            />
          ) : (
            <CustomIcon
              iconType="menu-icon"
              width={24}
              height={24}
              fill="#1F3262"
            />
          )}
        </button>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden lg:block bg-core-dark-blue border-b border-neutral-grey">
        <div className="max-w-[1550px] mx-auto px-5 sm:px-10 lg:px-25 xl:px-29">
          <ul className="flex">
            {menu.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className="relative text-white font-medium px-8 py-5 inline-block hover:bg-neutral-jet
                  before:content-['•']
                  before:absolute
                  before:left-5
                  before:opacity-0
                  before:text-core-bright-blue
                  hover:before:opacity-100"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-core-dark-blue text-white">
          <div className="px-5 py-6 space-y-6">
            {/* Menu links */}
            <ul className="flex flex-col space-y-4">
              {menu.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-lg font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Actions */}
            <div className="border-t border-neutral-grey pt-6 space-y-4">
              <Link href="#" className="block font-bold">
                Login
              </Link>

              <div className="flex items-center gap-x-3">
                <CustomIcon
                  iconType="search"
                  fill="#ffffff"
                  width={20}
                  height={20}
                />
                <span>Search</span>
              </div>

              <Link
                href="#"
                className="block bg-grape-gradient text-center rounded-full px-6 py-3 font-bold"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
