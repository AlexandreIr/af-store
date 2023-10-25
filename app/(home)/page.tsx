"use client"

import Image from "next/image"
import Categories from "./components/categories"

export default function Home() {

  return (
    <div className="p-5">
      <Image
        src="/banner-home-1.png"
        alt="Até 55% de desconto esse mês"
        height={0}
        width={0}
        className="h-auto w-full"
        sizes="100vh"
      />
      <div className="mt-8 flex justify-center">
        <Categories/>
      </div>
    </div>

  )
}
