import { product10 } from "@/data/products";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";
export default function ShopGram4() {
  return (
    <section>
      <div className="heading-section text-center wow fadeInUp">
        <h3 className="heading">Shop Instagram</h3>
        <p className="subheading text-secondary">
          Elevate your wardrobe with fresh finds today!
        </p>
      </div>

      <Swiper
        spaceBetween={0}
        breakpoints={{
          1024: {
            slidesPerView: 6,
          },
          768: {
            slidesPerView: 4,
          },
          480: {
            slidesPerView: 3,
          },
          320: {
            slidesPerView: 2,
          },
        }}
        dir="ltr"
        className="swiper tf-sw-shop-gallery"
      >
        {product10.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="gallery-item rounded-0 hover-overlay hover-img wow fadeInUp"
              data-wow-delay={item.delay}
            >
              <div className="img-style">
                <img
                  className="lazyload img-hover"
                  data-src={item.imgSrc}
                  alt={item.alt}
                  src={item.imgSrc}
                  width={480}
                  height={480}
                />
              </div>
              <Link
                to={`/product-detail/${item.id}`}
                className="box-icon hover-tooltip"
              >
                <span className="icon icon-eye"></span>
                <span className="tooltip">View Product</span>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
