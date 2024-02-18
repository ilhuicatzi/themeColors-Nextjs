"use client";
import { changeTheme } from "@/utils/changeTheme";
import Image from "next/image";

export default function ChangeThemeButtons() {
  
  return (
   <div className='my-10 grid place-items-center lg:grid-cols-5 md:grid-cols-3 grid-cols-5 bg-color-1'>
      <button className=' py-2 px-4 text-color-5 m-1 text-sm rounded-full border-transparent border-2 hover:border-neutral-200' onClick={() => changeTheme("")}>
        <Image className="rounded-full w-10 h-10" src="/img/themes/default-colors-img.png" width={60} height={60} alt="Colores" />
        <span>
          Default
        </span>
      </button>
      <button className='py-2 px-4 text-color-5 m-1 text-sm rounded-full border-transparent border-2 hover:border-neutral-200'  onClick={() => changeTheme("lexus")}>
        <Image className="rounded-full w-10 h-10" src="/img/themes/lexus-colors-img.png" width={60} height={60} alt="Colores" />
        <span>
          Lexus
        </span>
      </button>
      <button className='py-2 px-4 text-color-5 m-1 text-sm rounded-full border-transparent border-2 hover:border-neutral-200'  onClick={() => changeTheme("maite")}>
        <Image className="rounded-full w-10 h-10" src="/img/themes/maite-colors-img.png" width={60} height={60} alt="Colores" />
        <span>
          Maite
        </span>
      </button>
      <button className='py-2 px-4 text-color-5 m-1 text-sm rounded-full border-transparent border-2 hover:border-neutral-200'  onClick={() => changeTheme("natural")}>
        <Image className="rounded-full w-10 h-10" src="/img/themes/natural-colors-img.png" width={60} height={60} alt="Colores" />
        <span>
          Natural
        </span>
      </button>
      <button className='py-2 px-4 text-color-5 m-1 text-sm rounded-full border-transparent border-2 hover:border-neutral-200'  onClick={() => changeTheme("street")}>
        <Image className="rounded-full w-10 h-10" src="/img/themes/street-colors-img.png" width={60} height={60} alt="Colores" />
        <span>
          Street
        </span>
      </button>
   </div>
  )
}