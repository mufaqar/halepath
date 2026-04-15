"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ProTab1 from "./proTab1";
import ProTab2 from "./proTab2";
import ProTab3 from "./proTab3";

const ProductTabs = ({ prodata, faqs }: any) => {
    const [activeTab, setActiveTab] = useState("tab1");

    // ===== STICKY HEADER =====
    useEffect(() => {
        const header = document.getElementById("tabs-header");
        const productTabs = document.getElementById("product-tabs");
        const siteHeader = document.querySelector("header");

        if (!header || !productTabs || !siteHeader) return;

        const handleScroll = () => {
            const siteHeaderHeight = (siteHeader as HTMLElement).offsetHeight;

            // Distance of section from top of page (not viewport)
            const sectionTop =
                productTabs.offsetTop - siteHeaderHeight;

            const scrollY = window.scrollY;

            if (scrollY >= sectionTop) {
                header.classList.add("sticky-tabs");
                header.style.top = siteHeaderHeight + "px";
            } else {
                header.classList.remove("sticky-tabs");
                header.style.top = "0px";
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        handleScroll(); // run initially

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    // ✅ STATIC DATA
    const data = {
        product_info_box1: {
            title: "Premium Candle Accessories Boxes for the Packaging Industry",
            description: "In today’s evolving packaging industry, candle accessories boxes play a vital role in brand presentation. Hale Path Packaging crafts elegant, eco-friendly boxes for tools like wick trimmers, snuffers, and matches. Designed for protection and beauty, our packaging enhances unboxing experiences while aligning with sustainability trends. We offer customizable shapes, inserts, and luxury finishes to match your brand style. With Hale Path Packaging, elevate every element of your candle offering—from scent to storage—with premium, detail-focused packaging solutions.",
            image: "/images/design/1.png",
        },
        product_info_box2: {
            title: "Premium Candle Accessories Boxes for the Packaging Industry",
            description: "In today’s evolving packaging industry, candle accessories boxes play a vital role in brand presentation. Hale Path Packaging crafts elegant, eco-friendly boxes for tools like wick trimmers, snuffers, and matches. Designed for protection and beauty, our packaging enhances unboxing experiences while aligning with sustainability trends. We offer customizable shapes, inserts, and luxury finishes to match your brand style. With Hale Path Packaging, elevate every element of your candle offering—from scent to storage—with premium, detail-focused packaging solutions.",
            image: "/images/design/2.png",
        },
        relatedProducts: prodata || [],
        faqs: faqs || [],
    };

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
                <div className={`${activeTab === "tab1" ? "" : "hidden"}`}>
                    <ProTab1 {...data} />
                </div>

                {/* TAB 2 */}
                <div
                    className={`tab-panel ${activeTab === "tab2" ? "" : "hidden"}`}
                    id="tab2"
                >
                    <ProTab2 />
                </div>

                {/* TAB 3 */}
                <div
                    className={`tab-panel ${activeTab === "tab3" ? "" : "hidden"}`}
                    id="tab3"
                >
                    <ProTab3 />
                </div>

            </div>
        </section>
    );
};

export default ProductTabs;