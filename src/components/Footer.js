"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomIcon from "../components/svg-custom/CustomIcon";

export default function Footer({}) {
  const footerLogo = "/image/footer-logo-design.png";
  const quickLinks = [
    {
      name: "About Us",
      link: "#",
    },
    {
      name: "Knowledge Hub",
      link: "#",
    },
    {
      name: "Our Impact",
      link: "#",
    },
    {
      name: "News",
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
  ];

  const otherLinks = [
    {
      name: "Privacy Policy",
      link: "#",
    },
    {
      name: "Disclaimer",
      link: "#",
    },
    {
      name: "Sitemap  ",
      link: "#",
    },
  ];

  return (
    <>
      <footer className="relative w-full  overflow-hidden">
        <div className="w-full max-w-[1550px] mx-auto px-5 md:px-19 lg:px-25 xl:px-29 bg-core-dark-blue z-10 pt-10">
          <div className="flex flex-col lg:flex-row w-full pb-0 md:pb-10">
            <div className="flex flex-col w-full lg:w-2/5">
              <div className="flex flex-col pb-10 justify-center items-center lg:items-start">
                <Image
                  src="/image/footer-logo.png"
                  alt="Logo"
                  className="w-auto md:w-[249px] h-[96px] object-cover z-10"
                  width={1000}
                  height={1000}
                  quality={100}
                  priority
                />
                <div className="flex flex-col text-neutral-light-grey text-sm mt-10 text-center lg:text-start gap-y-1">
                  <span>Level 2 The Hub</span>
                  <span>Charles Perkins Centre (D17)</span>
                  <span>The University of Sydney NSW 2006</span>
                </div>
                <div className="flex items-center gap-x-4 mt-8">
                  <Link
                    href="#"
                    className="text-neutral-light-grey text-sm bg-neutral-jet px-4 py-3 rounded-full flex items-center w-fit gap-x-2"
                  >
                    Contact Us{" "}
                    <CustomIcon
                      iconType="chevron-right"
                      width={12}
                      height={12}
                      fill="#FFFFFF"
                    />
                  </Link>
                  <CustomIcon
                    iconType="linkedin"
                    width={18}
                    height={18}
                    fill="#FFFFFF"
                  />
                </div>
              </div>
              <div className="flex flex-col pb-10 lg:pb-0  items-center lg:items-start md:text-start text-center">
                <span className="uppercase text-accent-light-orange font-bold tracking-widest">
                  Quick Links
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-y-5">
                  {quickLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.link}
                      className="text-neutral-light-grey text-sm hover:text-accent-light-orange transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full lg:w-3/5">
              <div className="relative bg-neutral-white rounded-lg p-5 flex flex-col  overflow-hidden">
                <Image
                  src="/image/frame-footer.png"
                  alt="Decoration"
                  className="absolute top-0 right-0 z-0 w-[287px] object-contain pointer-events-none"
                  width={1000}
                  height={1000}
                  quality={100}
                  priority
                />

                <span className="uppercase text-neutral-jet text-xl md:text-2xl font-bold pb-5 md:pb-0 z-10">
                  Join Our Mailing List
                </span>

                <div className="flex flex-col md:flex-row items-center space-y-5 md:space-y-0">
                  <p className="text-sm text-neutral-dark-grey max-w-xl">
                    To receive the latest news, events, training, and
                    opportunities from Sydney Health Partners.
                  </p>

                  <Link
                    href="#"
                    className="bg-grape-gradient w-fit md:w-full text-center text-xs md:text-sm rounded-4xl px-8 py-4 z-20 text-white font-bold inline-block"
                  >
                    Become a site member to join
                  </Link>
                </div>
              </div>
              <div className="flex flex-col space-y-2 mt-10">
                <span className="uppercase text-accent-light-orange font-bold tracking-widest">
                  ACCREDITATION
                </span>
                <p className="text-sm text-neutral-light-grey font-normal">
                  We are accredited by the National Health and Medical Research
                  Council as a Research Translation Centre – recognition of our
                  leadership in research and the translation of evidence into
                  excellent patient care.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-5 mt-5 items-center">
                  <Image
                    src="/image/comp-1.png"
                    alt="Logo"
                    className="w-auto h-[79px] object-contain"
                    width={1000}
                    height={1000}
                    quality={100}
                    priority
                  />
                  <Image
                    src="/image/comp-2.png"
                    alt="Logo"
                    className="w-full h-[103px] object-contain"
                    width={1000}
                    height={1000}
                    quality={100}
                    priority
                  />
                  <span className="flex font-bold uppercase text-sm justify-end items-center text-neutral-white">
                    a member of
                  </span>
                  <Image
                    src="/image/comp-3.png"
                    alt="Logo"
                    className="w-auto h-[64px] object-contain"
                    width={1000}
                    height={1000}
                    quality={100}
                    priority
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-2 mt-10">
                <span className="uppercase text-accent-light-orange font-bold tracking-widest">
                  Acknowledgement of country
                </span>
                <p className="text-sm text-neutral-light-grey font-normal">
                  We recognise and pay respect to the Elders and communities –
                  past, present, and emerging – of the lands on which we work
                  and live. For thousands of years, they have shared and
                  exchanged knowledges across innumerable generations for the
                  benefit of all.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center w-full justify-between py-5 md:py-10">
            <div className="flex flex-col md:flex-row items-center gap-x-3 pb-3 md:pb-0">
              <span className="text-xs text-neutral-light-grey">
                Copyright © Sydney Health Partners.
              </span>
              <span className="flex gap-x-3">
                {otherLinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    className="text-xs font-bold text-neutral-light-grey hover:text-accent-light-orange"
                  >
                    {item.name}
                  </Link>
                ))}
              </span>
            </div>
            <span className="text-neutral-light-grey text-xs">
              Website by <strong>Marameo Design</strong>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
