import { useRef, useState, useEffect } from 'react';

type FooterProps = {
    pageIndex: number;  
    setPageIndex: React.Dispatch<React.SetStateAction<number>>;
  };

export default function Footer({ pageIndex, setPageIndex }: FooterProps) {
  

  return (
    <div className="fixed inset-x-0 bottom-0 p-4 flex justify-between bg-[#242424]">
        {[
          {
            icon1: "redIcons/page1.png",
            icon2: "icons/page1.png",
            name: "Page 1",
          },
          {
            icon1: "redIcons/page2.png",
            icon2: "icons/page2.png",
            name: "Page 2",
          },
          {
            icon1: "redIcons/page3.png",
            icon2: "icons/page3.png",
            name: "Page 3",
          },
          {
            icon1: "redIcons/page4.png",
            icon2: "icons/page4.png",
            name: "Page 4",
          },
        ].map((item, index) => (
          <div key={index}
            className="flex flex-col gap-1 items-center"
            onClick={() => setPageIndex(index)}
          >
            <img
              src={pageIndex === index ? item.icon1 : item.icon2}
              className="w-5 h-5" // This sets the width and height to 4rem (64px by 64px)
              alt="Descriptive Text"
            />
            <p
              className={`text-sm ${
                pageIndex === index ? "text-[#D15439]" : "text-[#6C6C6C]"
              }`}
            >
              {item.name}
            </p>
          </div>
        ))}
      </div>
  );
}
