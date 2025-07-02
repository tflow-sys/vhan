import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar6 from "@/components/headers/Topbar6";
import Products1 from "@/components/products/Products1";
import { Link } from "react-router-dom";
import React from "react";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Shop Breadcumb Left || Modave - Multipurpose Reactjs eCommerce Template",
  description: "Modave - Multipurpose Reactjs eCommerce Template",
};
export default function ShopBreadcumbLeftPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar6 bgColor="bg-main" />
      <Header1 />
      <div className="breadcrumbs-default">
        <div className="container">
          <div className="breadcrumbs-content">
            <ul className="breadcrumbs d-flex align-items-center">
              <li>
                <Link className="link" to={`/`}>
                  Homepage
                </Link>
              </li>
              <li>
                <i className="icon-arrRight" />
              </li>
              <li>Women</li>
            </ul>
            <div className="content-bottom">
              <h3>Clothing for Women</h3>
              <p className="text-secondary">
                Discover sought-after designer styles at Madave for a fresh
                season ahead.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Products1 parentClass="flat-spacing pt-0" />
      <Footer1 />
    </>
  );
}
