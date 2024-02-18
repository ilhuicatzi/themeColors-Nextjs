"use client";

import { useRouter } from "next/navigation"

function ButtonLanding({path} : {path: string}) {
  const router = useRouter()
  return (
    <button
      onClick={() => {
        router.push(path)
      }}
    >Example</button>
  )
}

export default ButtonLanding