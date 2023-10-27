
import Image from "next/image"
import Categories from "./components/categories"
import { prismaClient } from "@/lib/prisma"
import ProductList from "../../src/components/ui/product-list";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where:{
      discountPercentage:{
        gt:0
      }
    }
  });
  return (
    <div className="">
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

      <div className="mt-8">
        <ProductList products={deals}/>
      </div>
    </div>

  )
}
