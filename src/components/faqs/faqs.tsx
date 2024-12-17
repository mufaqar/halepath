import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Faqs = ({col}:any) => {
  const [openFaq, setOpenFaq] = useState<any>(null);
  const handleFAQ = (id: number) => {
    if (openFaq === id) {
      return setOpenFaq(null);
    }
    setOpenFaq(id);
  };

  return (
    <div className="pt-8">
      <h2 className="text-2xl lg:text-[43px] font-semibold leading-normal">
        Frequently Asked <span className="text-[#47AFC3]">Questions</span>
      </h2>
      <div className={`mt-10 grid gap-1 ${col === 2 && "grid-cols-2"}`}>
        {[1, 2, 3, 4, 5]?.map((item, idx) => (
          <div key={idx}>
            <div
            className="border shadow rounded-[10px] w-full bg-white"
          >
            <button
              onClick={() => handleFAQ(idx)}
              className="px-6 py-6 w-full text-[#1C1C1C] text-left text-xl flex items-center gap-4 justify-between"
            >
              Lorem Ipsum is simply dummy text of the printing?
              <IoIosArrowDown className="text-2xl" />
            </button>
            <div
              className={`transition-all duration-200 ${
                openFaq === idx ? "max-h-[300px] h-full" : "h-0 overflow-hidden"
              }`}
            >
              <p className="text-lg px-6 text-[#1C1C1C] pb-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
                explicabo, est tempora tenetur dolorem a dolore ullam officiis
                animi atque?
              </p>
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
