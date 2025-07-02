import Testimonials from "@/components/common/Testimonials";
import Footer1 from "@/components/footers/Footer1";
import Header7 from "@/components/headers/Header7";
import Collections from "@/components/homes/fashion-modernRetreat/Collections";
import Hero from "@/components/homes/fashion-modernRetreat/Hero";
import Lookbook from "@/components/homes/fashion-modernRetreat/Lookbook";
import Products from "@/components/homes/fashion-modernRetreat/Products";
import Products2 from "@/components/homes/fashion-modernRetreat/Products2";
import MarqueeSection from "@/components/common/MarqueeSection2";
import React from "react";
import Features from "../../../components/common/Features2";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home Fashion Modern Retreate || Modave - Multipurpose Reactjs eCommerce Template",
  description: "Modave - Multipurpose Reactjs eCommerce Template",
};

export default function HomeFashionModernRetreatPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header7 />
      <Hero />
      <Products />
      <Lookbook />
      <Products2 />
      <Testimonials parentClass="flat-spacing pt-0" />
      <Collections />
      <Features />
      <MarqueeSection />
      <Footer1 dark />
    </>
  );
}
