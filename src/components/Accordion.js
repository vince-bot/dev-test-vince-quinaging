import Link from "next/link";
import { useRef, useState } from "react";
import CustomIcon from "./svg-custom/CustomIcon";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "Transcript",
      content: (
        <>
          <div className="space-y-4">
            <h3 className="text-neutral-jet text-[28px] font-bold">
              SAMPLE ACCORDION
            </h3>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="w-full space-y-2">
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggle(index)}
            className="w-full text-left px-4 py-3 flex justify-between items-center cursor-pointer bg-neutral-light-grey text-neutral-jet font-bold text-xl rounded-xl"
          >
            {item.title}
            <span className="p-3">
              {openIndex === index ? (
                <CustomIcon
                  iconType="minus"
                  width={24}
                  height={24}
                  fill="#1F3262"
                />
              ) : (
                <CustomIcon
                  iconType="plus"
                  width={24}
                  height={24}
                  fill="#1F3262"
                />
              )}
            </span>
          </button>

          <div
            ref={(el) => (contentRefs.current[index] = el)}
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{
              maxHeight:
                openIndex === index
                  ? contentRefs.current[index]?.scrollHeight
                  : 0,
            }}
          >
            <div className="px-4 py-3 text-sm text-neutral-dark-grey">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
