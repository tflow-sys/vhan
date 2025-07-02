import Features from "@/components/common/Features";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Banner from "@/components/homes/decor/Banner";
import Collections from "@/components/homes/decor/Collections";
import Hero from "@/components/homes/decor/Hero";
import ListCollections from "@/components/homes/decor/ListCollections";
import LookBook from "@/components/homes/decor/LookBook";
import Products from "@/components/homes/decor/Products";
import Products2 from "@/components/common/Products6";
import Testimonials from "@/components/homes/decor/Testimonials";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home Decor || Modave - Multipurpose Reactjs eCommerce Template",
  description: "Modave - Multipurpose Reactjs eCommerce Template",
};

export default function HomeDecorPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 fullWidth />
      <Hero />
      <Collections />
      <ListCollections />
      <Products />
      <LookBook />
      <Products2 />
      <Testimonials />
      <Features parentClass="flat-spacing line-top-container" />
      <Banner />
      <Footer1 />
    </>
  );
}
