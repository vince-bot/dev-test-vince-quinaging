import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import CustomIcon from "../components/svg-custom/CustomIcon";
import { IoSearch } from "react-icons/io5";
import { MdChevronRight } from "react-icons/md";
import { FaRegUserCircle, FaYoutube } from "react-icons/fa";
import { HiClock } from "react-icons/hi2";
import { MdCalendarToday } from "react-icons/md";
import Accordion from "@/components/Accordion";

export default function Home() {
  const logo = "/image/head-logo.png";
  const heroLogo = "/image/icon/hero-logo2.png";
  const imageYoutube = "/image/image-youtube.jpg";
  const footerLogo = "/image/footer-logo-design.png";
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

  const relatedResources = [
    {
      title: "Research Methods Cheat Sheet",
      description:
        "A quick reference guide to common research methodologies used in health and clinical research.",
      link: "#",
      linkText: "View Resource",
      withBookmark: true,
    },
    {
      title: "Data Management and Privacy in Health Research",
      description:
        "Guide to managing participant data securely and in compliance with privacy regulations.",
      link: "#",
      linkText: "View Resource",
      withBookmark: true,
    },
    {
      title: "Designing your study",
      description:
        "Move from curiosity to clarity—this pathway helps you define a research question, choose the right...",
      link: "#",
      linkText: "View Knowledge Pathway",
      withBookmark: false,
    },
  ];

  const social = [
    { iconType: "linkedin", link: "#" },
    { iconType: "facebook", link: "#" },
    { iconType: "twitter", link: "#" },
    { iconType: "printer", link: "#" },
    { iconType: "bookmark", link: "#" },
  ];

  return (
    <>
      <nav className=" top-0 z-10 w-full bg-neutral-white">
        <div className="container flex items-center justify-between py-5 h-20 ">
          <Image
            src={logo}
            alt="Logo"
            className="w-57.75 h-12.5"
            width={1000}
            height={1000}
            quality={100}
            priority
          />
          <div className="flex gap-x-5 items-center">
            <Link href="#" className="text-black font-bold">
              Login
            </Link>
            {/* <IoSearch size={24} /> */}
            <CustomIcon
              iconType="search"
              fill="#000000"
              width={24}
              height={24}
            />
            <Link
              href="#"
              className="bg-grape-gradient rounded-4xl px-6 py-4 text-white font-bold"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="container w-full bg-core-dark-blue border-b border-neutral-grey">
          <ul>
            {menu.map((item, index) => (
              <li key={index} className="inline-block">
                <Link
                  href={item.link}
                  className="relative
                    text-white font-medium px-8 py-5 inline-block
                    hover:bg-neutral-jet
                    before:content-['•']
                    before:absolute
                    before:left-5
                    before:opacity-0
                    before:transition-opacity
                    before:text-core-bright-blue
                    hover:before:opacity-100"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <section className="w-full  ">
        <div className="container bg-core-dark-blue relative">
          <Image
            src={heroLogo}
            alt="Logo"
            className="absolute -top-27 right-52 w-[566px] h-[355px] object-contain"
            width={1000}
            height={1000}
            quality={100}
            priority
          />
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div className=" flex flex-col pt-5">
                <ol className="flex items-center space-x-2">
                  <li>
                    <a
                      href="/"
                      className="hover:text-white transition text-neutral-light-grey text-xs"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <MdChevronRight className="text-neutral-light-grey" />
                  </li>
                  <li>
                    <a
                      href="/products"
                      className="hover:text-white transition text-neutral-light-grey text-xs"
                    >
                      Knowledge Hub
                    </a>
                  </li>
                  <li>
                    <MdChevronRight className="text-neutral-light-grey" />
                  </li>
                  <li className="text-white font-medium text-xs">
                    Research Method Cheat Sheet
                  </li>
                </ol>
              </div>
              <div className="w-full h-full py-14">
                <div className="flex flex-col ">
                  <div className="flex justify-start gap-3 items-center pb-3">
                    <div className="bg-white py-3 px-3 rounded-xl">
                      <CustomIcon
                        iconType="youtube"
                        width={32}
                        height={32}
                        fill="#1F3262"
                      />
                    </div>
                    <span className="text-sm text-neutral-light-grey font-bold">
                      Video
                    </span>
                  </div>
                  <div className="flex flex-col leading-1.5">
                    <span className="text-[44px] font-bold text-white">
                      Data Management and Privacy in
                    </span>
                    <span className="text-[44px] font-bold text-white">
                      Health Research
                    </span>
                  </div>
                  <p className="text-sm text-neutral-light-grey/90">
                    An essential guide to responsible data handling in health
                    research, covering storage, privacy, de-
                  </p>
                  <p className="text-sm text-neutral-light-grey/90">
                    identification, and legal compliance.
                  </p>
                  <div className="flex gap-x-5">
                    <div className="flex items-center gap-x-3 mt-4">
                      <FaRegUserCircle className="text-neutral-light-grey" />
                      <span className="text-sm text-neutral-light-grey">
                        Published by SHP Research Methods Team
                      </span>
                    </div>
                    <div className="flex items-center gap-x-3 mt-4">
                      <HiClock className="text-neutral-light-grey" />
                      <span className="text-sm text-neutral-light-grey">
                        15 minute
                      </span>
                    </div>
                    <div className="flex items-center gap-x-3 mt-4">
                      <MdCalendarToday className="text-neutral-light-grey" />
                      <span className="text-sm text-neutral-light-grey">
                        Updated March 12, 2025
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-3 items-center justify-center">
              <Link
                href="#"
                className="bg-grape-gradient w-full text-center rounded-4xl px-6 py-4 text-white font-bold cursor-pointer"
              >
                Watch Resource
              </Link>

              <Link
                href="#"
                className="bg-neutral-jet w-full text-center rounded-4xl px-6 py-4 text-white font-bold cursor-pointer"
              >
                Add to my collection
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container-fluid bg-neutral-white">
          <div className="w-full flex py-10 gap-x-10">
            <div className="w-3/5 flex flex-col gap-y-10">
              <div className="flex flex-col bg-accent-alice-blue p-10 rounded-xl gap-y-10 ">
                <div className="flex flex-col gap-y-5">
                  <span className="text-black font-bold text-2xl">
                    What is this for?
                  </span>
                  <p className="text-neutral-dark-grey text-base leading-6">
                    Health Researchers, clinical trial coordinators, and data
                    managers, and students working with sensitive health data
                    who need to understanad best practices in data security and
                    privacy.
                  </p>
                </div>
                <div className="flex flex-col gap-y-5">
                  <span className="text-black font-bold text-2xl">
                    Key Takeaways
                  </span>
                  <div className="flex flex-col gap-y-3">
                    <div className="flex items-center gap-x-3">
                      <CustomIcon
                        iconType="checkmark"
                        width={16}
                        height={16}
                        fill="#1F3262"
                      />
                      <p className="text-neutral-dark-grey text-base leading-6">
                        Understand legal and ethical obligations for handling
                        health data
                      </p>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <CustomIcon
                        iconType="checkmark"
                        width={16}
                        height={16}
                        fill="#1F3262"
                      />
                      <p className="text-neutral-dark-grey text-base leading-6">
                        Learn how to securely store and manage participant data
                      </p>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <CustomIcon
                        iconType="checkmark"
                        width={16}
                        height={16}
                        fill="#1F3262"
                      />
                      <p className="text-neutral-dark-grey text-base leading-6">
                        Explore de-identification strategies and data sharing
                        considerations
                      </p>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <CustomIcon
                        iconType="checkmark"
                        width={16}
                        height={16}
                        fill="#1F3262"
                      />
                      <p className="text-neutral-dark-grey text-base leading-6">
                        Recognise the role of data governance in research
                        integrity
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="leading-6 text-neutral-dark-grey">
                Protecting personal health information is not only a legal
                requirement but also a cornerstone of ethical research. Data
                Management and Privacy in Health Research offers clear,
                practical guidance on how to handle sensitive data throughout
                the research lifecycle. This resource explores key topics
                including data collection protocols, storage and access control,
                de-identification techniques, and compliance with privacy
                legislation such as the Privacy Act and relevant state or
                institutional frameworks. Designed with researchers in mind,
                this resource equips you with the confidence to manage data
                securely and ethically, ensuring research integrity and
                participant trust.
              </p>
              <div>
                <Image
                  src={imageYoutube}
                  alt="Logo"
                  className="w-full h-[495px] object-cover rounded-lg"
                  width={1000}
                  height={1000}
                  quality={100}
                  priority
                />
              </div>
              <div>
                <Accordion />
              </div>
              <div className="space-y-4">
                <h3 className="text-neutral-jet text-[28px] font-bold">
                  About the Presenters
                </h3>

                <p className="text-neutral-dark-grey text-base">
                  <strong>Dr. Melissa Nguyen</strong> – Data Governance Lead,
                  Sydney Local Health District; specialises in privacy
                  frameworks and secure data infrastructure.
                </p>
                <p className="text-neutral-dark-grey text-base">
                  <strong>A/Prof. David Chen</strong> – Implementation Scientist
                  and Clinical Trialist; experienced in designing ethical
                  research protocols and data sharing models in multisite
                  studies.
                </p>
              </div>
              <div className="flex flex-col space-y-4 shadow-[0_4px_20px_rgba(20,20,43,0.03)] p-5 rounded-xl">
                <h5 className="text-neutral-jet text-xl font-bold">
                  Was this resource helpful to you?
                </h5>
                <div className="flex gap-x-4">
                  <Link
                    href="#"
                    className="flex items-center gap-x-3 border border-neutral-border hover:bg-neutral-light-grey transition-all duration-300 ease-in-out rounded-full px-6 py-4"
                  >
                    <CustomIcon
                      iconType="frown"
                      width={24}
                      height={24}
                      fill="#1F3262"
                    />
                    <span className="text-base text-core-dark-blue font-bold">
                      Not helpful
                    </span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-x-3 border border-neutral-border hover:bg-neutral-light-grey transition-all duration-300 ease-in-out rounded-full px-6 py-4"
                  >
                    <CustomIcon
                      iconType="meh"
                      width={24}
                      height={24}
                      fill="#1F3262"
                    />
                    <span className="text-base text-core-dark-blue font-bold">
                      Somewhat helpful
                    </span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-x-3 border border-neutral-border hover:bg-neutral-light-grey transition-all duration-300 ease-in-out rounded-full px-6 py-4"
                  >
                    <CustomIcon
                      iconType="smile"
                      width={24}
                      height={24}
                      fill="#1F3262"
                    />
                    <span className="text-base text-core-dark-blue font-bold">
                      Very helpful
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-2/5">
              <div className="bg-neutral-light-grey rounded-tl-xl rounded-bl-xl pr-29 py-10 pl-10 space-y-8">
                <h5 className="text-neutral-jet text-xl font-bold">
                  Usage Context
                </h5>
                <div className="flex flex-col space-y-3">
                  <span className="uppercase text-sm text-core-dark-blue font-bold tracking-widest">
                    Included in knowledge Pathways
                  </span>
                  <div className="bg-neutral-white rounded-xl p-5 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-core-dark-blue ">
                        Introduction to Health Research
                      </span>
                      <div className="rounded-full bg-neutral-light-grey w-fit p-2">
                        <CustomIcon
                          iconType="chevron-right"
                          width={12}
                          height={12}
                          fill="#1F3262"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-core-dark-blue ">
                        Clinical Research Methods
                      </span>
                      <div className="rounded-full bg-neutral-light-grey w-fit p-2">
                        <CustomIcon
                          iconType="chevron-right"
                          width={12}
                          height={12}
                          fill="#1F3262"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-3">
                  <span className="uppercase text-sm text-core-dark-blue font-bold tracking-widest">
                    Included in CURATED COLLECTIONS
                  </span>
                  <div className="bg-neutral-white rounded-xl p-5 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-core-dark-blue ">
                        Research Ethics and Governance
                      </span>
                      <div className="rounded-full bg-neutral-light-grey w-fit p-2">
                        <CustomIcon
                          iconType="chevron-right"
                          width={12}
                          height={12}
                          fill="#1F3262"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-core-dark-blue ">
                        Consumer engagement in action
                      </span>
                      <div className="rounded-full bg-neutral-light-grey w-fit p-2">
                        <CustomIcon
                          iconType="chevron-right"
                          width={12}
                          height={12}
                          fill="#1F3262"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <h5 className="text-neutral-jet text-xl font-bold">
                  Share, print, and save
                </h5>
                <div className="flex gap-x-8">
                  {social.map((item, index) => (
                    <Link key={index} href="#" target="_blank">
                      <CustomIcon
                        iconType={item.iconType}
                        width={24}
                        height={24}
                        fill="#1F3262"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container bg-neutral-light-grey py-10 px-10">
          <h3 className="text-neutral-jet text-[32px] font-bold">
            Related Resources
          </h3>
          <div className="grid grid-cols-3 gap-x-5">
            {relatedResources.map((item, index) => (
              <div
                key={index}
                className="flex flex-col bg-white mt-8 p-5 rounded-xl space-y-4 justify-between"
              >
                <div className="flex items-center gap-x-3">
                  <div className="bg-core-dark-blue py-3 px-3 w-fit rounded-lg">
                    <CustomIcon
                      iconType="path"
                      width={24}
                      height={24}
                      fill="#FFFFFF"
                    />
                  </div>
                  <span className="text-core-dark-blue font-bold text-sm">
                    Knowledge Pathway
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-neutral-grey">4 modules</span>
                    <span className="text-neutral-grey">•</span>
                    <span className="text-sm text-neutral-grey">
                      45 minutes
                    </span>
                  </div>
                </div>
                <span className="text-core-dark-blue font-bold text-xl">
                  {item.title}
                </span>
                <p className="text-neutral-dark-grey text-base">
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <Link
                    href={item.link}
                    className="text-core-dark-blue gap-x-2 hover:bg-neutral-light-grey transition-all duration-300 ease-in-out items-center flex font-bold mt-2 text-sm px-4 rounded-full w-fit py-3 border border-neutral-border"
                  >
                    {item.linkText}
                    <CustomIcon
                      iconType="chevron-right"
                      width={12}
                      height={12}
                      fill="#1F3262"
                    />
                  </Link>
                  {item.withBookmark && (
                    <Link href="#">
                      <CustomIcon
                        iconType="bookmark"
                        width={28}
                        height={28}
                        fill="#6A6A6A"
                      />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className=" w-full h-[120px] md:h-[160px]  z-0">
            <Image
              src="/image/footer-logo-design.png"
              alt="Footer wave design"
              className="w-[1550px] h-auto object-cover"
              width={1000}
              height={1000}
              quality={100}
              priority
            />
          </div>
        </div>
      </section>
      <footer className="container w-full pt-10 overflow-hidden">
        <div className="container bg-core-dark-blue z-10 pt-10">
          <div className="flex w-full pt-20 pb-10">
            <div className="flex flex-col w-2/5">
              <div className="flex flex-col pb-10">
                <Image
                  src="/image/footer-logo.png"
                  alt="Logo"
                  className="w-[249px] h-[96px] object-cover z-10"
                  width={1000}
                  height={1000}
                  quality={100}
                  priority
                />
                <div className="flex flex-col text-neutral-light-grey text-sm mt-10 gap-y-1">
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
              <div className="flex flex-col">
                <span className="uppercase text-accent-light-orange font-bold tracking-widest">
                  Quick Links
                </span>
                <div className="grid grid-cols-2 mt-5 gap-y-5">
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
            <div className="flex flex-col w-3/5">
              <div className="relative bg-neutral-white rounded-lg p-5 flex flex-col  overflow-hidden">
                <Image
                  src="/image/frame-footer.png"
                  alt="Decoration"
                  className="absolute top-0 right-0 z-10 w-[287px] object-contain pointer-events-none"
                  width={1000}
                  height={1000}
                  quality={100}
                  priority
                />

                <span className="uppercase text-neutral-jet text-2xl font-bold">
                  Join Our Mailing List
                </span>

                <div className="flex items-center">
                  <p className="text-sm text-neutral-dark-grey max-w-xl">
                    To receive the latest news, events, training, and
                    opportunities from Sydney Health Partners.
                  </p>

                  <Link
                    href="#"
                    className="bg-grape-gradient w-full text-center rounded-4xl px-8 py-4 z-20 text-white font-bold inline-block"
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
                <div className="grid grid-cols-4 gap-x-5 mt-5 items-center">
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
          <div className="flex items-center w-full justify-between py-10">
            <div className="flex items-center gap-x-3">
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
