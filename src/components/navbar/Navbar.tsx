"use client";
import { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/contexts/themeProvider";

const layoutThemes = {
  "/pages/design_Maite": "Maite",
  "/pages/design_Natural": "Natural",
  "/pages/design_Street": "Street",
  "/pages/design_Lexus": "Lexus",
};

function Navbar() {
  const path = usePathname();
  const { theme, changeTheme } = useTheme();
  const [selectedLayout, setSelectedLayout] = useState("default");
  const layoutThemes: { [key: string]: string } = {
    "/pages/design_Maite": "Maite",
    "/pages/design_Natural": "Natural",
    "/pages/design_Street": "Street",
    "/pages/design_Lexus": "Lexus",
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const layoutTheme = layoutThemes[path] || "default";
    setSelectedLayout(layoutTheme);
    changeTheme(layoutTheme);
  }, [path, changeTheme]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="flex justify-between items-center px-10 p-3 shadow-md bg-color-1">
      <Link href="/">
        <h1 className="text-3xl font-bold cursor-pointer">Colors</h1>
      </Link>
      <ul className="flex items-center gap-12">
        <li>
          <button
            className={`flex items-center gap-1 border border-color-2 px-3 py-1 rounded-md hover:bg-color-2 ${
              isMenuOpen ? "bg-color-2" : ""
            }`}
            onClick={toggleMenu}
          >
            Diseños
            <MdOutlineKeyboardArrowDown />
          </button>
          <span className="relative flex flex-col">
            {isMenuOpen && (
              <ul className="shadow-md shadow-color-5 bg-color-1 absolute w-48 rounded-md top-1 left-10">
                <button className=" w-full flex justify-end ">
                  <RxCross1
                    className="rounded-full hover:bg-color-4 hover:text-color-1 p-1 cursor-pointer w-6 h-6"
                    onClick={closeMenu}
                  />
                </button>
                {Object.entries(layoutThemes).map(
                  ([layoutPath, layoutTheme]) => (
                    <Link href={layoutPath} key={layoutPath}>
                      <li
                        className={`hover:bg-color-2 px-2 py-1 text-center ${
                          selectedLayout === layoutTheme ? "font-bold" : ""
                        }`}
                        onClick={closeMenu}
                      >
                        {layoutTheme}
                      </li>
                    </Link>
                  )
                )}
              </ul>
            )}
          </span>
        </li>
        <li>
          <Link href="/pages/contact">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
