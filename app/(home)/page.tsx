
import Image from "next/image"
import Categories from "./components/categories"
import { prismaClient } from "@/lib/prisma"
import ProductList from "../../src/components/ui/product-list";
import SectionTitle from "./components/section-title";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where:{
      discountPercentage:{
        gt:0
      }
    }
  });

  const keyboards = await prismaClient.product.findMany({
    where:{
      category:{
        slug:"keyboards",
      },
    }
  });

  const mouses = await prismaClient.product.findMany({
    where:{
      category:{
        slug:"mouses",
      },
    }
  });

  return (
    <div className="flex flex-col gap-8">
      <Image
        src="/banner-home-1.png"
        alt="Até 55% de desconto esse mês!"
        height={0}
        width={0}
        className="h-auto w-full"
        sizes="100vh"
      />
      <div className=" flex justify-center">
        <Categories/>
      </div>

      <div>
        <SectionTitle>Ofertas</SectionTitle> 
        <ProductList products={deals}/>
      </div>

      <Image
        src="/banner-home-2.png"
        alt="Até 55% de desconto esse em mouses!"
        height={0}
        width={0}
        className="h-auto w-full py-[1.875rem]"
        sizes="100vh"
      />

      <div>
        <SectionTitle>Teclados</SectionTitle> 
        <ProductList products={keyboards}/>
      </div>

      <Image
        src="/banner-home-3.png"
        alt="Até 20% de desconto esse em Fones!"
        height={0}
        width={0}
        className="h-auto w-full py-[1.875rem]"
        sizes="100vh"
      />

<div>
        <SectionTitle>Mouses</SectionTitle> 
        <ProductList products={mouses}/>
      </div>
    </div>

  )
}
