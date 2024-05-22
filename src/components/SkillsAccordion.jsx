/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

export default function SkillsAccordion({ skills }) {
  const [openIndex, setOpenIndex] = useState(
    Array.from({ length: skills.length }, (_, i) => i),
  );

  const handleClick = (index) => {
    setOpenIndex((prevIndex) =>
      prevIndex.includes(index)
        ? prevIndex.filter((item) => item !== index)
        : [...prevIndex, index],
    );
  };

  // Change style of div to match education card

  return (
    <div className="mt-12 flex flex-col gap-y-8 w-4/5 m-auto lg:m-left">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-primary rounded-xl p-2 border border-2 border-primary w-4/5 lg:w-3/5 m-auto"
        >
          <div
            className={`flex flex-row justify-between items-center ${
              openIndex.includes(index) ? "active" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            <h2 className="text-xl md:text-2xl">{skill.title}</h2>
            <div>
              <IoIosArrowDropdownCircle color="black" fontSize={28} />
            </div>
          </div>
          {openIndex.includes(index) && (
            <p className="bg-accent2 p-4 mt-4 rounded-b-lg font-mainText text-md md:text-lg">
              {skill.content}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
