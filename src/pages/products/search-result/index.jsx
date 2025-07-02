import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar6 from "@/components/headers/Topbar6";
import SearchProducts from "@/components/products/SearchProducts";
import React from "react";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Search Result || Modave - Multipurpose Reactjs eCommerce Template",
  description: "Modave - Multipurpose Reactjs eCommerce Template",
};
export default function SearchResultPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar6 bgColor="bg-main" />
      <Header1 />
      <div
        className="page-title"
        style={{ backgroundImage: "url(/images/section/page-title.jpg)" }}
      >
        <div className="container-full">
          <div className="row">
            <div className="col-12">
              <h3 className="heading text-center">Search</h3>
            </div>
          </div>
        </div>
      </div>
      <SearchProducts />

      <Footer1 />
    </>
  );
}
