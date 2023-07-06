import React, { useEffect, useState } from "react";
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";

export default function Home({ products }) { 
  // ! We should not fetc the product data in use effect if we want to make the website SEO optimized
  // ! In order to make it SEO optimized the data that will be searched in the google, and conributes to the page rankshould be loaded using some different methods.
  // https://nextjs.org/docs/app/building-your-application/data-fetching/fetching
  // !SSG = Server Side Generation using the getStaticProps has to be done: Check documentation above for more

  // useEffect(()=>{
  //   fetchProducts();
  // }, []);

  // const fetchProducts = async ()=> {
  //   const {data} = await fetchDataFromApi('/api/products');
  //   setData(data);
  // };

  return (
    <main>
      <HeroBanner />
      <Wrapper>
        {/* Heading and Paragraph start */}
        <div className="text-center max-w-[880px] mx-auto my-[50px] md:my-[80px] ">
          <div className="text-[28px] md:text-[34px] mb-5 font-bold leading-tight uppercase ">
            Never Before.
            <br></br>
            Forever After.
          </div>
          <div className="text-md md:text-xl">
            A lightweight Nike ZoomX midsole is combined with increased stack
            heights to help provide cushioning during extended stretches of
            running.
          </div>
        </div>
        {/* Heading and Paragraph end */}

        {/* Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {products?.data?.map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))}

          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </div>
        {/* Product Section End */}
      </Wrapper>
    </main>
  );
}

export async function getStaticProps() {
  const products = await fetchDataFromApi("/api/products?populate=*");

  return {
    props: { products },
  };
}
