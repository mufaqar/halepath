import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { NavLinks } from '@/const/navlinks'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsChevronDown, BsTelephone } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import SearchForm from './searchForm'
import MegaMenu from './mega-menu'
import { client } from '../../sanity/lib/client'
import { QNavcategories } from '../../sanity/queries'

function Header() {

  const [openNav, setOpenNav] = useState(false);
  const [openSearch, setOpenSearch] = useState(false)
  const [megaMenu, setMegaMenu] = useState(false)
  const [categories, setCategories] = useState()

  const menuRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (menuRef.current && !menuRef.current.contains(event.target as HTMLLIElement)) {
        setMegaMenu(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };

  }, []);

  useEffect(()=>{
    (async()=>{
      const categories = await client.fetch(QNavcategories);
      setCategories(categories)
    })()
  },[])

  return (
    <>
      <header className='py-4 border-b border-[#D9D9D987] sticky top-0 bg-white z-50'>
        <div className='container mx-auto px-4 flex gap-5 items-center justify-between'>
          <div className='lg:w-[18%] w-1/2'>
            <Link href="/">
              <Image src="/images/logo.png" alt='logo' width={190} height={42} />
            </Link>
          </div>
          <nav className='lg:w-[47%] w-1/2 flex items-center justify-center'>
            <div className='menu_icon text-3xl lg:hidden block w-fit ml-auto'
              onClick={() => setOpenNav(!openNav)}>
              {openNav ? (<IoMdClose />) : (<FaBars />)}
            </div>
            <ul className={`lg:gap-9 gap-5 lg:items-center lg:justify-between lg:static lg:flex-row flex-col lg:px-0 lg:py-0 px-4 py-8 lg:bg-transparent ${openNav === true ? "flex absolute left-0 right-0 top-16 bg-white" : "lg:flex hidden"}`}>
              <li className='flex items-center cursor-pointer group'>
                <Link href="/products" className='text-base font-normal text-title_Clr group-hover:text-secondary'>
                  Products
                </Link>
              </li>
              <li ref={menuRef} onMouseEnter={() => setMegaMenu(true)} onClick={() => setMegaMenu(false)} className='cursor-pointer group'>
                <Link href="/categories" className='text-base font-normal text-title_Clr group-hover:text-secondary'>
                  Industries
                </Link>
                <span><BsChevronDown className="ml-1 inline-block text-sm font-normal text-title_Clr group-hover:text-secondary" /></span>
                <div onMouseLeave={() => setMegaMenu(false)} className={`${megaMenu === true ? "block container md:px-10 left-1/2 md:-translate-x-1/2 md:absolute top-20 static z-50 " : "hidden"}`}>
                  <MegaMenu setMegaMenu={setMegaMenu} categories={categories}/>
                </div>
              </li>
              <li className='flex items-center cursor-pointer group'>
                <Link href="/box-by-material" className='text-base font-normal text-title_Clr group-hover:text-secondary'>
                  Box by Material
                </Link>
              </li>
              <li className='flex items-center cursor-pointer group'>
                <Link href="/shapes-and-style" className='text-base font-normal text-title_Clr group-hover:text-secondary'>
                  Shapes & Styles
                </Link>
              </li>
              <li className='flex items-center cursor-pointer group'>
                <Link href="/contact-us" className='text-base font-normal text-title_Clr group-hover:text-secondary'>
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
          <div className='lg:w-[35%] lg:flex gap-5 justify-between hidden'>
            <div className='lg:border-x border-x-0 border-[#D9D9D987] lg:px-5 lg:flex gap-5 justify-between'>
              <button onClick={() => setOpenSearch(!openSearch)}>
                <AiOutlineSearch className="text-2xl" />
              </button>
              <Link href="#" className='text-base font-bold text-title_Clr hover:text-secondary flex gap-1 items-center'>
                <BsTelephone className="text-2xl rotate-12" />
                <span className='grid'>
                  <span className='text-sm font-normal text-primary'>
                    Live chat or:
                  </span>
                  +1 (321) 123 5678
                </span>
              </Link>
            </div>
            <Link href="get-qoute" className='bg-primary hover:bg-secondary px-8 py-4 text-sm font-semibold text-white rounded-[5px]'>
              Get a Free Quote
            </Link>
          </div>
        </div>
      </header>

      <div className={`${openSearch === true ? "block" : "hidden"}`}>
        <SearchForm />
      </div>
    </>
  )
}

export default Header