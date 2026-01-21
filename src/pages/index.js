import Image from "next/image";
import Link from "next/link";
import CustomIcon from "../components/svg-custom/CustomIcon";
import { MdChevronRight } from "react-icons/md";
import Accordion from "@/components/Accordion";
import Navbar from "@/components/Navbar";

export default function Home() {
  const heroLogo = "/image/icon/hero-logo2.png";
  const imageYoutube = "/image/image-youtube.jpg";

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
      <Navbar />
      <section className="w-full  ">
        <div className="w-full max-w-[1550px] mx-auto px-5 sm:px-10 md:px-19px lg:px-25 xl:px-29 bg-core-dark-blue relative">
          <Image
            src={heroLogo}
            alt="Hero decoration"
            width={566}
            height={355}
            priority
            className="absolute z-0 right-4 top-0 w-[220px] h-auto sm:right-10 sm:w-[300px] md:right-24 md:w-[400px]  lg:right-52 lg:-top-0 lg:w-[566px] object-contain pointer-events-none"
          />
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="flex flex-col w-full lg:w-auto">
              <div className=" flex flex-col pt-5 z-10">
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
                <div className="flex flex-col space-y-5">
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
                  <div className="flex flex-col sm:leading-10 lg:leading-12 text-[35px] lg:text-[44px] font-bold text-white">
                    <span>Data Management and Privacy in</span>
                    <span>Health Research</span>
                  </div>
                  <div className="flex flex-col text-sm text-neutral-light-grey/90">
                    <p>
                      An essential guide to responsible data handling in health
                      research, covering storage, privacy, de-
                    </p>
                    <p>identification, and legal compliance.</p>
                  </div>
                  <div className="flex flex-col md:flex-row gap-x-5">
                    <div className="flex items-center gap-x-3 mt-4">
                      <CustomIcon
                        iconType="user-circle"
                        width={18}
                        height={18}
                        fill="#F3F4F7"
                      />
                      <span className="text-sm text-neutral-light-grey">
                        Published by SHP Research Methods Team
                      </span>
                    </div>
                    <div className="flex items-center gap-x-3 mt-4">
                      <CustomIcon
                        iconType="clock"
                        width={18}
                        height={18}
                        fill="#F3F4F7"
                      />
                      <span className="text-sm text-neutral-light-grey">
                        15 minute
                      </span>
                    </div>
                    <div className="flex items-center gap-x-3 mt-4">
                      <CustomIcon
                        iconType="calendar"
                        width={18}
                        height={18}
                        fill="#F3F4F7"
                      />
                      <span className="text-sm text-neutral-light-grey">
                        Updated March 12, 2025
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full lg:w-auto gap-y-3 items-center justify-center pb-10 lg:pb-0">
              <Link
                href="#"
                className="group relative w-full text-center rounded-4xl px-6 py-4 bg-grape-gradient text-white font-bold cursor-pointer overflow-hidden"
              >
                {/* Bullet / icon */}
                <span className="absolute left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  •
                </span>
                <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
                  Watch Resource
                </span>
              </Link>

              <Link
                href="#"
                className="group relative w-full text-center rounded-4xl px-6 py-4 bg-neutral-jet text-white font-bold cursor-pointer overflow-hidden"
              >
                {/* Bullet / icon */}
                <span className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  •
                </span>
                <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
                  Add to my collection
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="w-full max-w-[1550px] mx-auto pl-5 sm:pl-10 md:pl-19px sm:pr-10 lg:pr-0 pr-5 md:pr-10 lg:pl-25 xl:pl-29 bg-neutral-white">
          <div className="w-full flex flex-col lg:flex-row py-10 gap-x-10">
            <div className="w-full lg:w-3/5 flex flex-col gap-y-10">
              <div className="flex flex-col bg-accent-alice-blue p-5 md:p-10 rounded-xl gap-y-10 ">
                <div className="flex flex-col gap-y-5">
                  <span className="text-black font-bold text-xl md:text-2xl">
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
                  <span className="text-black font-bold text-xl md:text-2xl">
                    Key Takeaways
                  </span>
                  <div className="flex flex-col gap-y-3">
                    <div className="flex items-center gap-x-3">
                      <CustomIcon
                        iconType="checkmark"
                        width={24}
                        height={24}
                        fill="#1F3262"
                      />
                      <p className="text-neutral-dark-grey text-sm md:text-base leading-6">
                        Understand legal and ethical obligations for handling
                        health data
                      </p>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <CustomIcon
                        iconType="checkmark"
                        width={24}
                        height={24}
                        fill="#1F3262"
                      />
                      <p className="text-neutral-dark-grey text-sm md:text-base leading-6">
                        Learn how to securely store and manage participant data
                      </p>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <CustomIcon
                        iconType="checkmark"
                        width={24}
                        height={24}
                        fill="#1F3262"
                      />
                      <p className="text-neutral-dark-grey text-sm md:text-base leading-6">
                        Explore de-identification strategies and data sharing
                        considerations
                      </p>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <CustomIcon
                        iconType="checkmark"
                        width={24}
                        height={24}
                        fill="#1F3262"
                      />
                      <p className="text-neutral-dark-grey text-sm md:text-base leading-6">
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
              <div className="relative w-full h-[495px] rounded-lg overflow-hidden">
                <Image
                  src={imageYoutube}
                  alt="Logo"
                  className="w-full h-full object-cover"
                  width={1000}
                  height={1000}
                  quality={100}
                  priority
                />
                <CustomIcon
                  iconType="play-button"
                  width={60} // increase size for better visibility
                  height={60}
                  fill="#E91730"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                />
              </div>
              <div>
                <Accordion />
              </div>
              <div className="space-y-4">
                <h3 className="text-neutral-jet text-xl sm:text-2xl lg:text-[28px] text-center md:text-start font-bold">
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
                <h5 className="text-neutral-jet text-xl font-bold text-center md:text-start">
                  Was this resource helpful to you?
                </h5>
                <div className="flex gap-4 justify-center flex-wrap">
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
            <div className="w-full lg:w-2/5 pt-10 lg:pt-0">
              <div className="bg-neutral-light-grey rounded-tl-xl rounded-bl-xl pl-5 pr-5 sm:pl-10 sm:pr-10  py-10 space-y-8">
                <h5 className="text-neutral-jet text-xl font-bold">
                  Usage Context
                </h5>
                <div className="flex flex-col space-y-3">
                  <span className="uppercase text-xs md:text-sm text-core-dark-blue font-bold md:tracking-widest">
                    Included in knowledge Pathways
                  </span>
                  <div className="bg-neutral-white rounded-xl p-5 space-y-2">
                    <div className=" flex items-center justify-between cursor-pointer">
                      <span className="text-sm md:text-base font-bold text-core-dark-blue group-hover:text-accent-blue transition-colors">
                        Introduction to Health Research
                      </span>

                      <div className="rounded-full bg-neutral-light-grey p-2 group-hover:bg-core-dark-blue transition-colors duration-300">
                        <CustomIcon
                          iconType="chevron-right"
                          width={12}
                          height={12}
                          fill="#6A6A6A"
                          className="group-hover:translate-x-1 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm md:text-base font-bold text-core-dark-blue ">
                        Clinical Research Methods
                      </span>
                      <div className="rounded-full bg-neutral-light-grey w-fit p-2">
                        <CustomIcon
                          iconType="chevron-right"
                          width={12}
                          height={12}
                          fill="#6A6A6A"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-3">
                  <span className="uppercase text-xs md:text-sm text-core-dark-blue font-bold md:tracking-widest">
                    Included in CURATED COLLECTIONS
                  </span>
                  <div className="bg-neutral-white rounded-xl p-5 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm md:text-base font-bold text-core-dark-blue ">
                        Research Ethics and Governance
                      </span>
                      <div className="rounded-full bg-neutral-light-grey w-fit p-2">
                        <CustomIcon
                          iconType="chevron-right"
                          width={12}
                          height={12}
                          fill="#6A6A6A"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm md:text-base font-bold text-core-dark-blue ">
                        Consumer engagement in action
                      </span>
                      <div className="rounded-full bg-neutral-light-grey w-fit p-2">
                        <CustomIcon
                          iconType="chevron-right"
                          width={12}
                          height={12}
                          fill="#6A6A6A"
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
        <div className="w-full max-w-[1550px] mx-auto px-5 sm:px-10 md:px-19px lg:px-25 xl:px-29 bg-neutral-light-grey py-10">
          <h3 className="text-neutral-jet text-xl md:text-[25px] xl:text-[32px] font-bold">
            Related Resources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5">
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
                  <span className="text-core-dark-blue font-bold text-xs sm:text-sm">
                    Knowledge Pathway
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm text-neutral-grey">
                      4 modules
                    </span>
                    <span className="text-neutral-grey">•</span>
                    <span className="text-xs sm:text-sm text-neutral-grey">
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
    </>
  );
}
