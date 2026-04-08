"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProductTabs = ({ productRes }: any) => {
    const [activeTab, setActiveTab] = useState("tab1");

    // ===== STICKY HEADER =====
    useEffect(() => {
        const header = document.getElementById("tabs-header");
        const siteHeader = document.querySelector("header");
        const handleSticky = () => {
            if (!header || !siteHeader) return;
            const siteHeaderHeight = siteHeader.offsetHeight;
            header.style.top = siteHeaderHeight + "px";
            header.classList.add("sticky-tabs");
        };

        handleSticky();
        window.addEventListener("resize", handleSticky);

        return () => {
            window.removeEventListener("resize", handleSticky);
        };
    }, []);

    return (
        <section id="product-tabs" className="mt-10">
            {/* Tabs Buttons */}
            <div
                id="tabs-header"
                className="hale_container !px-0 flex border-b border-gray-300 bg-white z-40"
            >
                <button
                    className={`tab-btn ${activeTab === "tab1" ? "tab_active" : ""}`}
                    onClick={() => setActiveTab("tab1")}
                >
                    Details
                </button>

                <button
                    className={`tab-btn ${activeTab === "tab2" ? "tab_active" : ""}`}
                    onClick={() => setActiveTab("tab2")}
                >
                    Available Options
                </button>

                <button
                    className={`tab-btn ${activeTab === "tab3" ? "tab_active" : ""}`}
                    onClick={() => setActiveTab("tab3")}
                >
                    Order Process
                </button>
            </div>

            {/* Tabs Content */}
            <div className="tab-content mt-6">

                {/* TAB 1 */}
                <div
                    className={`tab-panel ${activeTab === "tab1" ? "" : "hidden"}`}
                    id="tab1"
                >
                    {productRes?.grid?.map((item: any, idx: number) => (
                        <section className="my-20" key={idx}>
                            <div className={`hale_container md:flex items-center gap-5 md:gap-10 ${idx % 2 === 0 && "flex-row-reverse"
                                }`} >
                                <figure className="md:w-1/2">
                                    <Image
                                        src={item?.image?.asset?.url}
                                        alt=""
                                        width={678}
                                        height={424}
                                        className="h-auto"
                                    />
                                </figure>
                                <div className="flex md:w-1/2 justify-center md:justify-start items-center md:items-start flex-col">
                                    <h4 className="text-[#111827] mt-5 md:mt-0 font-bold text-3xl text-center md:text-left mb-4">
                                        {item.title}
                                    </h4>
                                    <p className="mb-7 text-center md:text-left">{item.info}</p>
                                    <Link href={item?.button_link}
                                        className="py-[9px] px-[41px] text-white bg-[#1C2E42] rounded-md">
                                        Get Custom Quote
                                    </Link>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>

                {/* TAB 2 */}
                <div
                    className={`tab-panel ${activeTab === "tab2" ? "" : "hidden"}`}
                    id="tab2"
                >
                    <div>
                        <h3 className="text-xl font-bold">Available Options</h3>
                        <p>This is tab 2 content</p>
                    </div>
                </div>

                {/* TAB 3 */}
                <div
                    className={`tab-panel ${activeTab === "tab3" ? "" : "hidden"}`}
                    id="tab3"
                >
                    <section className="py-16">
                        <div className="md:w-2/3 w-full mx-auto">
                            <h2 className="text-[#111827] mt-5 md:mt-0 font-bold text-3xl text-center mb-4">
                                Our Ordering Process
                            </h2>
                            <p className="text-lg font-normal text-title_Clr text-center mb-5">
                                Looking for custom packaging? Make it a breeze by following our four easy steps - soon you’ll be on your way
                                to meeting all your packaging needs!
                            </p>
                        </div>
                        <div className="hale_container grid md:grid-cols-4 grid-cols-1 gap-5">
                            <div className="bg-[#f5f5f5] rounded-2xl md:py-12 px-6 p-5 text-center">
                                <Image src="/images/box.svg" alt="icon" width={64} height={64} className="mx-auto mb-2" />
                                <h3 className="text-lg font-semibold text-title_Clr text-center mb-2">Customize your packaging</h3>
                                <p className="text-base font-normal text-title_Clr/80 text-center">
                                    Choose from our vast selection of packaging solutions and customize it with our wide range of options to
                                    create your dream packaging.
                                </p>
                            </div>
                            <div className="bg-[#f5f5f5] rounded-2xl md:py-12 px-6 p-5 text-center">
                                <Image src="/images/box2.svg" alt="icon" width={64} height={64} className="mx-auto mb-2" />
                                <h3 className="text-lg font-semibold text-title_Clr text-center mb-2">Add to quote and submit</h3>
                                <p className="text-base font-normal text-title_Clr/80 text-center">
                                    After customizing your packaging, simply add it to quote and submit quotation to be reviewed by one of
                                    our packaging specialists.
                                </p>
                            </div>
                            <div className="bg-[#f5f5f5] rounded-2xl md:py-12 px-6 p-5 text-center">
                                <Image src="/images/box3.svg" alt="icon" width={64} height={64} className="mx-auto mb-2" />
                                <h3 className="text-lg font-semibold text-title_Clr text-center mb-2">Consult with our expert</h3>
                                <p className="text-base font-normal text-title_Clr/80 text-center">
                                    Get expert consultation on your quotation to to save on costs, streamline efficiency and reduce
                                    environmental impacts
                                </p>
                            </div>
                            <div className="bg-[#f5f5f5] rounded-2xl md:py-12 px-6 p-5 text-center">
                                <Image src="/images/box4.svg" alt="icon" width={64} height={64} className="mx-auto mb-2" />
                                <h3 className="text-lg font-semibold text-title_Clr text-center mb-2">Production & shipping</h3>
                                <p className="text-base font-normal text-title_Clr/80 text-center">
                                    Once everything is ready for production, have us manage your entire production and shipping! Just sit
                                    and wait for your order!
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        </section>
    );
};

export default ProductTabs;