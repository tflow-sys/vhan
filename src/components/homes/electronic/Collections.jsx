import { collectionItems6 } from "@/data/collections";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
export default function Collections() {
  return (
    <section className="flat-spacing pt-0">
      <div className="container">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 1.7,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          className="swiper tf-sw-collection"
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".spd23",
          }}
        >
          {collectionItems6.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="collection-position-2 style-5 style-7 hover-img wow fadeInUp"
                data-wow-delay={item.wowDelay}
              >
                <a className="img-style">
                  <img
                    className="lazyload"
                    data-src={item.imgSrc}
                    alt={`banner-cls-${item.id}`}
                    src={item.imgSrc}
                    width={616}
                    height={410}
                  />
                </a>
                <div className="content text-start">
                  <h5 className="title mb_8">
                    <Link to={`/shop-default-grid`} className="link">
                      {item.title}
                    </Link>
                  </h5>
                  <p className="mb_16">{item.description}</p>
                  <div>
                    <Link to={`/shop-default-grid`} className="btn-line">
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="sw-pagination-collection sw-dots type-circle justify-content-center spd23" />
      </div>
    </section>
  );
}
