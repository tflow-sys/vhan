import ProductCard1 from "@/components/productCards/ProductCard1";
import { products } from "@/data/products";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const tabItems = ["Bottoms", "On pieces", "Tops", "Skirts", "Dresses", "Sale"];
export default function Products({ parentClass = "flat-spacing-3 pt-0" }) {
  const [activeItem, setActiveItem] = useState(tabItems[0]); // Default the first item as active

  const [selectedItems, setSelectedItems] = useState([]);
  useEffect(() => {
    document.getElementById("newArrivals2").classList.remove("filtered");
    setTimeout(() => {
      setSelectedItems(
        products.filter((elm) => elm.tabFilterOptions.includes(activeItem))
      );

      document.getElementById("newArrivals2").classList.add("filtered");
    }, 300);
  }, [activeItem]);

  return (
    <section className={parentClass}>
      <div className="container">
        <div className="heading-section text-center wow fadeInUp">
          <h3>Today's Top Picks</h3>
          <ul className="tab-product-v2 justify-content-sm-center">
            {tabItems.map((item) => (
              <li key={item} className="nav-tab-item">
                <a
                  className={activeItem === item ? "active" : ""}
                  onClick={() => setActiveItem(item)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flat-animate-tab">
          <div className="tab-content">
            <div
              className="tab-pane active show tabFilter filtered"
              id="newArrivals2"
              role="tabpanel"
            >
              <div className="tf-grid-layout tf-col-2 lg-col-3 xl-col-4">
                {selectedItems.map((product, i) => (
                  <ProductCard1 key={i} product={product} />
                ))}
              </div>
              <div className="sec-btn text-center">
                <Link to={`/shop-default-grid`} className="btn-line">
                  View All Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
