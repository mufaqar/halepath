import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { NavLinks } from "@/const/navlinks";
import { BsChevronDown } from "react-icons/bs";
import { FaBars, FaCaretDown, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import MegaMenu from "./mega-menu";
import { client } from "../../sanity/lib/client";
import { QNavcategories } from "../../sanity/queries";

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
      {/* Top bar */}
      <div className="bg-secondary py-[18px] md:block hidden">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <p className="text-base font-medium text-white">
            Welcome To Hale Path Packaging
          </p>
          <ul className="flex items-center justify-between divide-x-2 divide-white">
            <li>
              <Link
                href="tel:+9212312312345"
                target="_blank"
                className="text-base font-medium text-white flex items-center gap-1 px-5"
              >
                <FaPhoneAlt />
                +92 123 123 12345
              </Link>
            </li>
            <li>
              <Link
                href="mailto:loremipsum@gmail.com"
                target="_blank"
                className="text-base font-medium text-white flex items-center gap-1 px-5"
              >
                <FaEnvelope />
                loremipsum@gmail.com
              </Link>
            </li>
            <li>
              <span className="text-base font-medium text-white flex items-center gap-1 px-5">
                <FaMapMarkerAlt />
                City, Country, Code-12345
              </span>
            </li>
          </ul>
        </div>
      </div>
      <header className=" bg-white z-50 sticky top-0 " style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
        <div className="container mx-auto px-4 py-1 flex gap-5 items-center justify-between">
          <div className="lg:w-[8%] w-1/2">
            <Link href="/" className="inline-flex">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={60}
                height={60}
              />
            </Link>
          </div>
          <nav className="lg:w-[68%] w-1/2 flex items-center justify-end">
            <div
              className="menu_icon text-3xl lg:hidden block w-fit ml-auto"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? <IoMdClose /> : <FaBars />}
            </div>
            <ul
              className={`lg:gap-3 gap-5 lg:items-center lg:justify-between lg:static lg:flex-row flex-col lg:px-0 lg:py-0 px-4 py-8 lg:bg-transparent ${openNav === true
                ? "flex absolute left-0 right-0 top-16 bg-white"
                : "lg:flex hidden"
                }`}
            >
              {NavLinks?.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    ref={menuRef}
                    onMouseEnter={() => setMegaMenu(item?.id)}
                    onClick={() => setMegaMenu(null)}
                    className="cursor-pointer group flex items-center"
                  >
                    <Link
                      href={`${item?.link}`}
                      className="text-[15px] font-medium uppercase text-title_Clr group-hover:text-primary">
                      {item?.name}
                    </Link>
                    {/* {item?.submenu && (
                      <span className="leading-[0]">
                        <FaCaretDown className="ml-1 inline-block text-sm font-normal text-title_Clr group-hover:text-primary" />
                      </span>
                    )} */}
                    {/* {item?.submenu && <div onMouseLeave={() => setMegaMenu(null)} className={`${megaMenu === item?.id ? "block container md:px-10 left-1/2 md:-translate-x-1/2 md:absolute top-40 static z-50 " : "hidden"}`}>
                    <MegaMenu setMegaMenu={setMegaMenu} categories={categories} />
                  </div>} */}
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="lg:w-[27%] lg:flex gap-5 justify-end hidden">
            <Link
              href="/contact-us"
              className="bg-transparent hover:bg-primary px-5 py-2.5 text-[15px] uppercase font-medium text-primary hover:text-white rounded-full border-2 border-primary"
            >
              Contact Us
            </Link>
            <Link
              href="/get-qoute"
              className="bg-primary hover:bg-transparent px-5 py-2.5 text-[15px] uppercase font-medium text-white hover:text-primary rounded-full border-2 border-primary"
            >
              Get Quote Now
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
