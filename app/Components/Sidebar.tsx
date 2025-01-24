"use client";
import React, { useState } from "react";
import Image from "next/image";
import Chevron from "./images/chevron-down.svg";
import Flash from "./images/icon(2).svg";
import Squares from "./images/icon(3).svg";
import Stars from "./images/icon(4).svg";
import Saved from "./images/bookmark.svg";
import Star from "./images/stars.svg";

const Sidebar = () => {
  const [openAccordions, setOpenAccordions] = useState<number[]>([]); // Typage explicite

  const toggleAccordion = (index: number) => {
    setOpenAccordions((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index) // Supprime l'index si déjà présent
        : [...prev, index] // Ajoute l'index s'il est absent
    );
  };

  const accordionData = [
    { title: "PLATFORM", content: "Details about Platform functionality.", icon: Flash },
    { title: "SECTIONS", content: "Here is some information about another section.", icon: Squares },
    { title: "STYLE", content: "View saved items and configurations here.", icon: Stars },
    { title: "SAVED", content: "Check out your upcoming plans and schedules.", icon: Saved },
    { title: "PLAN", content: "Check out your upcoming plans and schedules.", icon: Star },
  ];

  return (
    <nav className="bg-[#121212] w-[280px] fixed bottom-0 top-[85px] text-white p-4 transition-all">
      {accordionData.map((accordion, index) => (
        <div key={index} className="mb-4 border-b border-dashed border-b-2 border-[#333333]">
          <div
            className="w-full text-left flex justify-between items-center cursor-pointer p-4"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex items-center gap-3">
              <Image src={accordion.icon} alt={`${accordion.title}-icon`} width={16} height={16} />
              <h2>{accordion.title}</h2>
            </div>
            <Image
              src={Chevron}
              alt="chevron-down"
              className={`transform transition-transform duration-300 ${
                openAccordions.includes(index) ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          <div
            className={`border-l mb-7 ml-4 overflow-hidden transition-[max-height] duration-300 ease-in-out ${
              openAccordions.includes(index) ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <div className="mt-2 p-3 text-sm rounded-md">{accordion.content}</div>
          </div>
        </div>
      ))}
    </nav>
  );
};

export default Sidebar;
