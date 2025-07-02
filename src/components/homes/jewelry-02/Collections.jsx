import { collectionData2 } from "@/data/collections";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
export default function Collections() {
  const params = {
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
    spaceBetween: 15,
  };
  return (
    <section>
      <div className="container">
        <div dir="ltr" className="swiper tf-sw-collection" data-space={15}>
          <Swiper
            {...params}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: ".spd61",
            }}
          >
            {collectionData2.map((item, index) => (
              <SwiperSlide className="swiper-slide" key={index}>
                <div className="collection-position radius style-lg hover-img">
                  <a className="img-style">
                    <img
                      className="lazyload"
                      data-src={item.imgSrc}
                      alt={item.alt}
                      src={item.imgSrc}
                      width={945}
                      height={630}
                    />
                  </a>
                  <div className="content">
                    <h3 className="title wow fadeInUp">
                      <Link
                        to={`/shop-default-grid`}
                        className="link text-white"
                      >
                        {item.title}
                      </Link>
                    </h3>
                    <p className="desc text-white wow fadeInUp">
                      {item.description}
                    </p>
                    <div>
                      <Link
                        to={`/shop-default-grid`}
                        className="btn-line style-white"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sw-pagination-collection sw-dots type-circle justify-content-center spd61" />
        </div>
      </div>
    </section>
  );
}
