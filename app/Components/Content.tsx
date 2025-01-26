import React from 'react'
import Image from 'next/image';
import Figma from "./images/image 37.svg";
import Webflow from "./images/image 26.svg";
import EmptyBookMark from './images/icon(5).svg';
import OrangeBookMark from './images/icon(6).svg';

const Card = ({ title, bookmark, date }: { title: string, bookmark: string, date: string }) => (
  <div className="w-full sm:w-[350px] mb-[20px] max-w-full">
    <button className="mb-[20px] bg-[#1B1B1B] transition-all duration-200 w-full h-[217px] rounded-[6px] border border-1 border-[#292929] flex justify-center items-center">
      {/* Placeholder for Image */}
    </button>
    <div className="flex justify-between relative px-2">
      <div>{title} <span className="gradient text-[16px]">Pro</span></div>
      <Image alt="bookmark" src={bookmark} />
    </div>
    <div className="px-2 text-[14px] text-[#7E7F81]">{`— Added ${date}`}</div>
  </div>
);

const Content = () => {
  return (
    <>
      <section className="px-4 md:px-8">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row justify-between gap-4">
          {/* Left Content */}
          <div className="md:w-1/2">
            <div className="text-[26px] mb-[20px]">
              Hero Section <span className="gradient text-[16px]">Pro</span>
            </div>
            <div className="text-[14px] text-[#7E7F81] mb-[40px] md:mb-[150px] lg:mb-[150px] xl:mb-[169px]">
              Detailed header section with heading and graphic/image centered and feature <br className="hidden" /> cards on either side.
            </div>

            <div className="flex flex-col gap-4 mb-[18px]">
              <div className="flex gap-4">
                <button className="bg-[#1B1B1B] hover:bg-[#121212] transition-all duration-200 w-full md:w-[258px] h-[50px] rounded-[6px] border border-1 border-[#292929] text-[12px] flex justify-center items-center">
                  <Image alt="figma" src={Webflow} className="mr-2" /> Copy to Webflow
                </button>
                <button className="bg-[#1B1B1B] hover:bg-[#121212] transition-all duration-200 w-full md:w-[258px] h-[50px] rounded-[6px] border border-1 border-[#292929] text-[12px] flex justify-center items-center">
                  <Image alt="figma" src={Figma} className="mr-2" /> Copy to Figma
                </button>
              </div>
              <div>
                <button className="bg-[#1B1B1B] hover:bg-[#121212] transition-all duration-200 w-full md:w-[532px] h-[50px] max-w-full rounded-[6px] border border-1 border-[#292929] text-[12px] flex justify-center items-center">
                  Live preview
                </button>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
            <button className="bg-[#1B1B1B] transition-all duration-200 w-full md:w-[532px] h-[388px] rounded-[6px] border border-1 border-[#292929] flex justify-center items-center">
              {/* Placeholder for Image */}
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border border-[#1D1D1D] mt-[30px]"></div>

        {/* Other Sections */}
        <div className="mt-[30px] mb-[30px] flex items-center justify-between">
          <div className="text-[20px] md:text-[26px]" style={{ fontFamily: "Aeonik, sans-serif" }}>
            Other sections you might like
          </div>
          <button className="text-[12.49px] cursor-pointer text-[#7E7F81] bg-[#1B1B1B] hover:bg-[#121212] transition-all duration-200 w-[79px] h-[32px] rounded-[6px] border border-1 border-[#292929] text-[12px] flex justify-center items-center">
            Browse All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-[40px]">
          <Card title="HERO SECTION" bookmark={OrangeBookMark} date="28th of feb 2024" />
          <Card title="HERO SECTION" bookmark={EmptyBookMark} date="28th of feb 2024" />
          <Card title="HERO SECTION" bookmark={EmptyBookMark} date="28th of feb 2024" />
          <Card title="HERO SECTION" bookmark={OrangeBookMark} date="28th of feb 2024" />
          <Card title="HERO SECTION" bookmark={EmptyBookMark} date="28th of feb 2024" />
          <Card title="HERO SECTION" bookmark={EmptyBookMark} date="28th of feb 2024" />
          <Card title="HERO SECTION" bookmark={OrangeBookMark} date="28th of feb 2024" />
          <Card title="HERO SECTION" bookmark={EmptyBookMark} date="28th of feb 2024" />
          <Card title="HERO SECTION" bookmark={EmptyBookMark} date="28th of feb 2024" />
          <Card title="HERO SECTION" bookmark={OrangeBookMark} date="28th of feb 2024" />
          <Card title="HERO SECTION" bookmark={EmptyBookMark} date="28th of feb 2024" />
          <Card title="HERO SECTION" bookmark={EmptyBookMark} date="28th of feb 2024" />
        </div>

      </section>
    </>
  );
}

export default Content;
