'use client';
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { NavLinks } from "@/const/navlinks";
import { BsChevronDown } from "react-icons/bs";
import { FaBars, FaCaretDown, FaChevronDown, FaEnvelope, FaMapMarkerAlt, FaPhone, FaPhoneAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import MegaMenu from "./mega-menu";

import MobileMenu from "./mobileMenu";

function Header() {
  const [openNav, setOpenNav] = useState(false);
  const [megaMenu, setMegaMenu] = useState<number | null>(null);
  const [categories, setCategories] = useState();

  const menuRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as HTMLLIElement)
      ) {
        setMegaMenu(null);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    (async () => {
      const categories = await client.fetch(QNavcategories);
      setCategories(categories);
    })();
  }, []);

  return (
    <>
      <div className="bg-secondary py-2.5 hidden md:block">
        <div className="hale_container flex items-center justify-between">
          <ul className="flex items-center divide-x-2 divide-white">
            <li>
              <Link href="tel:+4401213186768"
                className="text-sm font-normal text-white flex items-center gap-1 px-2 cursor-pointer">
                <FaPhone />
                01213186768
              </Link>
            </li>
            <li>
              <Link href="mailto:sales@halepathpackaging.co.uk"
                className="text-sm font-normal text-white flex items-center gap-1 px-2 cursor-pointer">
                <FaEnvelope />
                sales@halepathpackaging.co.uk
              </Link>
            </li>
          </ul>
          <ul className="flex items-center divide-x-2 divide-white">
            <li>
              <Link href="https://halepathpackaging.co.uk/products/"
                className="text-sm font-normal text-white flex items-center gap-1 px-2 cursor-pointer">

                All Products
              </Link>
            </li>
            <li className="px-2">
              {/* <?php echo do_shortcode('[gtranslate]'); ?> */}
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-white py-1.5 hidden lg:block">
        <div className="hale_container flex items-center justify-between">
          {/* Logo  */}
          <div className="lg:block hidden sm:w-[25%] w-1/2">
            <Link href="/" className='inline-flex'>
              <Image src="/images/logo.png" alt='logo' width={93} height={98} />
            </Link>
          </div>
          <div className="lg:block hidden w-1/2">
            <div className="relative w-full">
              <input type="text" id="live-search" placeholder="Search products..." autoComplete="off"
                className="text-sm md:leading-[40px] font-normal text-[#7C7C7C] placeholder:text-[#7C7C7C] bg-white px-7  border border-secondary focus:border-primary outline-none rounded-full w-full" />

              <div id="live-search-results" className="absolute z-60 w-full mt-1 bg-white rounded-lg shadow-lg hidden">
              </div>
            </div>
          </div>
          {/* Buttons  */}
          <div className="xl:w-1/4 sm:w-1/3 hidden lg:flex gap-5 justify-end">
            <Link href="/contact-us"
              className="border-2 border-secondary px-5 py-2 text-[13px] uppercase font-medium text-secondary rounded-full hover:bg-secondary hover:text-white">
              Contact Us
            </Link>
            <Link href="/get-quote-now"
              className="border-2 border-secondary bg-secondary px-5 py-2 text-[13px] uppercase font-medium text-white rounded-full hover:bg-transparent hover:text-secondary">
              Get Quote Now
            </Link>
          </div>
        </div>
      </div>
      <header className="bg-[#f5f5f5] sticky top-0 z-50 sm:py-[15px]">
        <div className="container mx-auto px-4 py-1 flex gap-5 items-center justify-between">
          <div className="lg:hidden w-1/2">
            <Link href="/" className="inline-flex">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={60}
                height={60}
              />
            </Link>
          </div>
          <nav className="lg:w-full w-1/2 flex lg:justify-center justify-end items-center">
            <div
              className="menu_icon text-xl lg:hidden block w-fit ml-auto"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? <IoMdClose /> : <FaBars />}
            </div>
            <ul
              className="hidden lg:flex gap-1.5 justify-between w-full">
              {NavLinks?.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    ref={menuRef}
                    onMouseEnter={() => setMegaMenu(item?.id)}
                    onClick={() => setMegaMenu(null)}
                    className="cursor-pointer flex items-center"
                  >
                    <Link
                      href={`${item?.link}`}
                      className={` ${megaMenu === item?.id && "main_active"} group text-sm font-normal capitalize text-title_Clr hover:text-white hover:bg-secondary px-2 py-2 rounded-[30px] flex items-center`}>
                      {item?.name}

                      {item?.submenu && (
                        <span className="leading-[0]">
                          <FaChevronDown className="ml-1 inline-block text-sm font-normal " />
                        </span>
                      )}
                    </Link>
                    {item?.submenu && <div onMouseLeave={() => setMegaMenu(null)} className={`${megaMenu === item?.id ? "block left-1/2 md:-translate-x-1/2 md:absolute 2xl:top-[74px]  top-[75px] hale_container static z-50 " : "hidden"}`}>
                      <MegaMenu setMegaMenu={setMegaMenu} subMenu={item?.submenu} />
                    </div>}

                  </li>
                );
              })}
            </ul>
          </nav> 
        </div>
        {openNav && (
              <MobileMenu megaMenus={NavLinks} />
            )}
      </header>
    </>
  );
}

export default Header;
