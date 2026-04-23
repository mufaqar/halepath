'use client'
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Faqs = ({ col, data }: any) => {
  const [openFaq, setOpenFaq] = useState<any>(null);
  const handleFAQ = (id: number) => {
    if (openFaq === id) {
      return setOpenFaq(null);
    }
    setOpenFaq(id);
  };

  return (
      <section className="bg-[#F5F5F5] py-20 mt-28">
                <div className="hale_container grid md:grid-cols-1 gap-6">
                    <div id="faqs" className="pt-8">
                        <h2 className="h2">
                            Frequently Asked <span className="text-[#47AFC3]">Questions</span>
                        </h2>
                        <div className="mt-10 grid gap-1 grid-cols-1 md:grid-cols-2">
                            {/* {data?.slice(0,8).map((item: any, idx: number) => (
                                <div key={idx}>
                                    <div
                                        className="faq-item"
                                    >
                                        <h3
                                            onClick={() => handleFaq(idx)}
                                            className="faq-title"
                                        >
                                            {item?.question}
                                            <IoIosArrowDown className="text-xl" />
                                        </h3>
                                        <div
                                            className={`transition-all duration-200 faq-content ${open === idx ? "" : "h-0 overflow-hidden"
                                                }`}
                                        >
                                            <p className="text-lg px-6 text-left text-[#1C1C1C] pb-6">
                                                {item?.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))} */}
                        </div>
                    </div>
                </div>
            </section>
  );
};

export default Faqs;
