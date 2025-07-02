import { product10 } from "@/data/products";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";
export default function ShopGram({ parentClass = "" }) {
  return (
    <section className={parentClass}>
      <div className="container">
        <div className="heading-section text-center">
          <h3 className="heading wow fadeInUp">Shop Instagram</h3>
          <p className="subheading text-secondary wow fadeInUp">
            Elevate your wardrobe with fresh finds today!
          </p>
        </div>
        <Swiper
          dir="ltr"
          className="swiper tf-sw-shop-gallery"
          spaceBetween={10}
          breakpoints={{
            1200: { slidesPerView: 5 },
            768: { slidesPerView: 3 },
            0: { slidesPerView: 2 },
          }}
        >
          {product10.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className="gallery-item hover-overlay hover-img wow fadeInUp"
                data-wow-delay={item.delay}
              >
                <div className="img-style">
                  <img
                    className="lazyload img-hover"
                    data-src={item.imgSrc}
                    alt="image-gallery"
                    src={item.imgSrc}
                    width={640}
                    height={640}
                  />
                </div>
                <Link
                  to={`/product-detail/${item.id}`}
                  className="box-icon hover-tooltip"
                >
                  <span className="icon icon-eye" />
                  <span className="tooltip">View Product</span>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
