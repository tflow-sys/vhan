import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar6 from "@/components/headers/Topbar6";
import Contact1 from "@/components/otherPages/Contact1";
import StoreLocations2 from "@/components/otherPages/StoreLocations2";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Store List 02 || Modave - Multipurpose Reactjs eCommerce Template",
  description: "Modave - Multipurpose Reactjs eCommerce Template",
};

export default function StorelistPage2() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar6 bgColor="bg-main" />
      <Header1 />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.712380803123!2d-74.00594108459235!3d40.712775279328264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3168ef8b1f%3A0xe28a875ee38c8ed1!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2s!4v1617203294845!5m2!1sen!2s"
        width={600}
        height={450}
        style={{ border: 0, width: "100%" }}
        allowFullScreen=""
        loading="lazy"
      />
      <StoreLocations2 />
      <Contact1 />
      <Footer1 />
    </>
  );
}
