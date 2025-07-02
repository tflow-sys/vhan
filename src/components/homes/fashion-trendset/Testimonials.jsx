import { testimonialData } from "@/data/testimonials";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="heading-section text-center wow fadeInUp">
          <h3 className="heading">Customer Say!</h3>
          <p className="subheading">
            Our customers adore our products, and we constantly aim to delight
            them.
          </p>
        </div>
        <Swiper
          className="tf-sw-testimonial wow fadeInUp"
          data-wow-delay="0.1s"
          spaceBetween={30}
          slidesPerView={3}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".spd332",
          }}
          breakpoints={{
            1124: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {testimonialData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item style-2">
                <div className="content-top">
                  <div className="list-star-default">
                    {[...Array(item.stars)].map((_, i) => (
                      <i key={i} className="icon icon-star" />
                    ))}
                  </div>
                  <p className="text-secondary">"{item.review}"</p>
                  <div className="box-author">
                    <div className="text-title author">{item.author}</div>
                    <svg
                      className="icon"
                      width={20}
                      height={21}
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0)">
                        <path
                          d="M6.875 11.6255L8.75 13.5005L13.125 9.12549"
                          stroke="#3DAB25"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 18.5005C14.1421 18.5005 17.5 15.1426 17.5 11.0005C17.5 6.85835 14.1421 3.50049 10 3.50049C5.85786 3.50049 2.5 6.85835 2.5 11.0005C2.5 15.1426 5.85786 18.5005 10 18.5005Z"
                          stroke="#3DAB25"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect
                            width={20}
                            height={20}
                            fill="white"
                            transform="translate(0 0.684082)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="box-avt">
                  <div className="avatar avt-60 round">
                    <img
                      alt="avatar"
                      src={item.avatar}
                      width={90}
                      height={91}
                    />
                  </div>
                  <div className="box-price">
                    <p className="text-title text-line-clamp-1">
                      {item.product.title}
                    </p>
                    <div className="text-button price">
                      {item.product.price}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="sw-pagination-testimonial sw-dots type-circle d-flex justify-content-center spd332"></div>
        </Swiper>
      </div>
    </section>
  );
}
