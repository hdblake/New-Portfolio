/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

export default function SkillsAccordion({ skills }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Change style of div to match education card

  return (
    <div className="mt-12 flex flex-col gap-y-8 w-4/5 m-auto lg:m-left">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-primary rounded-xl p-2 border border-2 border-primary"
        >
          <div
            className={`flex flex-row justify-between items-center ${
              openIndex === index ? "active" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            <h2 className="text-2xl md:text-3xl">{skill.title}</h2>
            <div>
              <IoIosArrowDropdownCircle color="black" fontSize={28} />
            </div>
          </div>
          {openIndex === index && (
            <p className="bg-accent2 p-4 mt-4 rounded-b-lg font-mainText text-lg md:text-xl">
              {skill.content}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
