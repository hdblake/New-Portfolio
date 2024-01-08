/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

export default function SkillsAccordion({ skills }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-12 flex flex-col gap-y-8 w-4/5 m-auto lg:m-left">
      {skills.map((skill, index) => (
        <div key={index} className="bg-primary rounded-xl p-2">
          <div
            className={`text-xl md:text-2xl flex flex-row justify-between items-center ${
              openIndex === index ? "active" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            <div>{skill.title}</div>
            <div>
              <IoIosArrowDropdownCircle color="black" fontSize={28} />
            </div>
          </div>
          {openIndex === index && (
            <div className="bg-accent2 p-4 mt-4 rounded-xl font-mainText">
              {skill.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
