"use client";
import { changeTheme } from "@/utils/changeTheme";
import Image from "next/image";

export default function ChangeThemeButtons() {
  
  return (
   <div className='my-10 grid place-items-center lg:grid-cols-5 md:grid-cols-3 grid-cols-5 bg-color-1'>
      <button className=' py-2 px-4 text-color-5 m-1 text-sm rounded-full border-transparent border-2 hover:border-neutral-200' onClick={() => changeTheme("default")}>
        <Image className="rounded-full w-10 h-10" src="https://res.cloudinary.com/dtgxrnxer/image/upload/v1708289742/img/themes/default-colors-img_iissxy.jpg" width={60} height={60} alt="Colores" />
        <span>
          Default
        </span>
      </button>
      <button className='py-2 px-4 text-color-5 m-1 text-sm rounded-full border-transparent border-2 hover:border-neutral-200'  onClick={() => changeTheme("lexus")}>
        <Image className="rounded-full w-10 h-10" src="https://res.cloudinary.com/dtgxrnxer/image/upload/v1708289743/img/themes/lexus-colors-img_xf7bx1.jpg" width={60} height={60} alt="Colores" />
        <span>
          Lexus
        </span>
      </button>
      <button className='py-2 px-4 text-color-5 m-1 text-sm rounded-full border-transparent border-2 hover:border-neutral-200'  onClick={() => changeTheme("maite")}>
        <Image className="rounded-full w-10 h-10" src="https://res.cloudinary.com/dtgxrnxer/image/upload/v1708289743/img/themes/maite-colors-img_zx2yrt.jpg" width={60} height={60} alt="Colores" />
        <span>
          Maite
        </span>
      </button>
      <button className='py-2 px-4 text-color-5 m-1 text-sm rounded-full border-transparent border-2 hover:border-neutral-200'  onClick={() => changeTheme("natural")}>
        <Image className="rounded-full w-10 h-10" src="https://res.cloudinary.com/dtgxrnxer/image/upload/v1708289743/img/themes/natural-colors-img_x55vz4.jpg" width={60} height={60} alt="Colores" />
        <span>
          Natural
        </span>
      </button>
      <button className='py-2 px-4 text-color-5 m-1 text-sm rounded-full border-transparent border-2 hover:border-neutral-200'  onClick={() => changeTheme("street")}>
        <Image className="rounded-full w-10 h-10" src="https://res.cloudinary.com/dtgxrnxer/image/upload/v1708289743/img/themes/street-colors-img_v70itq.jpg" width={60} height={60} alt="Colores" />
        <span>
          Street
        </span>
      </button>
   </div>
  )
}