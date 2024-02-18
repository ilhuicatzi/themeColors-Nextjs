"use client";

import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import { usePathname } from "next/navigation"
import { changeTheme } from "@/utils/changeTheme";

function Navbar() {

  const path = usePathname();
  const [open, setOpen] = useState(false);

  if (path === "/pages/design_Maite") {
    changeTheme("maite");
  } else if (path === "/pages/design_Natural") {
    changeTheme("natural");
  } else if (path === "/pages/design_Street") {
    changeTheme("street");
  }  else if (path === "/pages/design_Lexus") {
    changeTheme("lexus");
  }  else {
    changeTheme("default");
  }

  return (
    <nav className="flex justify-between items-center px-10 p-3 shadow-md bg-color-1">
      <Link href="/">
        <h1 className="text-3xl font-bold cursor-pointer">Colors</h1>
      </Link>
      <ul className="flex items-center gap-12">
        <li>
          <button
            className={`flex items-center gap-1 border border-color-2 px-3 py-1 rounded-md hover:bg-color-2 ${open===true ? "bg-color-2" : ""} ` }
            onClick={() => {
              setOpen(!open);
            }}
          >
            Diseños
            <MdOutlineKeyboardArrowDown />
          </button>
          <span className="relative flex flex-col">
            {open && (
              <ul className="shadow-md shadow-color-5 bg-color-1 absolute w-48 rounded-md top-1 left-14 ">
                <button className="absolute w-full mb-10 flex justify-end">
                  <RxCross1
                  className="rounded-full hover:bg-color-4 hover:text-color-1 p-1 cursor-pointer w-6 h-6"
                    onClick={() => {
                      setOpen(false);
                    }}
                  />
                </button>
                <Link href="/pages/design_Maite"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <li className="mt-5 hover:bg-color-2 px-2 py-1 text-center">
                    Maite
                  </li>
                </Link>
                <Link href="/pages/design_Natural"
                onClick={() => {
                  setOpen(false);
                }}>
                  <li className="hover:bg-color-2 px-2 py-1 text-center">
                    Natural
                  </li>
                </Link>
                <Link href="/pages/design_Street"
                onClick={() => {
                  setOpen(false);
                }}>
                  <li className="hover:bg-color-2 px-2 py-1 text-center">
                    Street
                  </li>
                </Link>
                <Link href="/pages/design_Lexus"
                onClick={() => {
                  setOpen(false);
                }}>
                  <li className="hover:bg-color-2 px-2 py-1 text-center">
                    Lexus
                  </li>
                </Link>
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
