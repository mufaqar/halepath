"use client";

import { useEffect, useRef, useState } from "react";
import MainPopup from "../mainPopup";

const QuotePopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const popupRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const popupWidth = 850;

    // ESC KEY CLOSE
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    // CLOSE ON OUTSIDE CLICK
    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === popupRef.current) {
            setIsOpen(false);
        }
    };

    return (
        <>
            {/* OPEN BUTTON (UNCHANGED HTML + CLASSES) */}
            <button
                id="openQuotePopup"
                ref={buttonRef}
                onClick={() => setIsOpen(true)}
                className="sm:block hidden fixed top-1/2 -translate-y-1/2 right-5 h-[365px] bg-white/30 backdrop-blur-[10px] text-2xl text-title_Clr px-3 sm:px-5 rounded-[19px] z-[999]"
                style={{
                    right: isOpen ? `${popupWidth}px` : "20px",
                    transition: "right 0.5s ease-in-out",
                }}
            >
                <span>Get a Quote</span>
            </button>

            {/* POPUP WRAPPER (UNCHANGED HTML + CLASSES) */}
            <div
                id="quotePopup"
                ref={popupRef}
                onClick={handleOutsideClick}
                className={`fixed inset-0 w-full bg-transparent flex flex-col items-end justify-center z-50 
        translate-x-full opacity-0 pointer-events-none transition-all duration-500 ease-in-out
        ${isOpen ? "-translate-x-0 opacity-100 pointer-events-auto" : ""}`}>
                {isOpen && <MainPopup onClose={() => setIsOpen(false)} />}
            </div>
        </>
    );
};

export default QuotePopup;