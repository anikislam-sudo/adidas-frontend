"use client";
import React, { useEffect, useState } from "react";
import { Wrapper } from "../Wrapper/Wrapper";
import Link from "next/link";
import Menu from "../Menu/Menu";
import { BsCart } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MenuMobile from "../MenuMobile/MenuMobile";
const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [categories, setCategories] = useState(null);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
        if (window.scrollY > lastScrollY && !mobileMenu) {
            setShow("-translate-y-[80px]");
        } else {
            setShow("shadow-sm");
        }
    } else {
        setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
};

useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
        window.removeEventListener("scroll", controlNavbar);
    };
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [lastScrollY]);
  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center">
        <Link href="/">
          <img className="w-[20px] md:w-[40px]" src="/adidas (3).png" />
        </Link>
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu}></Menu>
        {mobileMenu && (
                    <MenuMobile
                        showCatMenu={showCatMenu}
                        setShowCatMenu={setShowCatMenu}
                        setMobileMenu={setMobileMenu}
                        categories={categories}
                    />
                )}

        <div className="flex items-center gap-2 text-black">
        
         {/* Icon start */}
                    <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                        <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
                        <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                            51
                        </div>
                    </div>
                    {/* Icon end */}

                    {/* Icon start */}
                    <Link href="/cart">
                        <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                            <BsCart className="text-[15px] md:text-[20px]" />
                      
                        </div>
                    </Link>
                    {/* Icon end */}
                      {/* Mobile icon start */}
                    <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
                        {mobileMenu ? (
                            <VscChromeClose
                                className="text-[16px]"
                                onClick={() => setMobileMenu(false)}
                            />
                        ) : (
                            <BiMenuAltRight
                                className="text-[20px]"
                                onClick={() => setMobileMenu(true)}
                            />
                        )}
                    </div>
                    {/* Mobile icon end */}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
