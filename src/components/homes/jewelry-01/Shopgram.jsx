import { product16 } from "@/data/products";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";
export default function Shopgram() {
  return (
    <section className="flat-spacing pt-0">
      <div className="container">
        <div className="heading-section text-center wow fadeInUp">
          <h3 className="heading">Shop Instagram</h3>
          <p className="subheading text-secondary">
            Elevate your wardrobe with fresh finds today!
          </p>
        </div>
        <Swiper
          className="tf-sw-shop-gallery"
          slidesPerView={5}
          spaceBetween={10}
          pagination={{
            clickable: true,
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {product16.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="gallery-item hover-overlay hover-img wow fadeInUp"
                data-wow-delay={item.delay}
              >
                <div className="img-style">
                  <img
                    className="lazyload img-hover"
                    data-src={item.imgSrc}
                    alt={item.alt}
                    src={item.imgSrc}
                    width={500}
                    height={500}
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
