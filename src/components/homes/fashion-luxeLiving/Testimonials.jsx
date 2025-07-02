import { testimonials4 } from "@/data/testimonials";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
export default function Testimonials() {
  return (
    <section className="flat-spacing pt-0">
      <div className="container">
        <div className="heading-section text-center wow fadeInUp">
          <h3 className="heading">Customer Say!</h3>
          <p className="subheading">
            Our customers adore our products, and we constantly aim to delight
            them.
          </p>
        </div>
        <Swiper
          spaceBetween={15} // data-space
          slidesPerView={3} // data-preview
          breakpoints={{
            1200: { slidesPerView: 3, spaceBetween: 30 }, // data-space-lg
            752: { slidesPerView: 2, spaceBetween: 30 }, // data-tablet
            0: { slidesPerView: 1, spaceBetween: 15 }, // data-mobile
          }}
          className="swiper tf-sw-testimonial wow fadeInUp"
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".spd38",
          }}
        >
          {testimonials4.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item style-2">
                <div className="content-top">
                  <div className="list-star-default">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="icon icon-star" />
                    ))}
                  </div>
                  <p className="text-secondary">{testimonial.quote}</p>
                  <div className="box-author">
                    <div className="text-title author">
                      {testimonial.author}
                    </div>
                    <svg
                      className="icon"
                      width={20}
                      height={21}
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_15758_14563)">
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
                        <clipPath id="clip0_15758_14563">
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
                      alt="avt"
                      src={testimonial.avatar}
                      width={90}
                      height={91}
                    />
                  </div>
                  <div className="box-price">
                    <p className="text-title text-line-clamp-1">
                      {testimonial.product}
                    </p>
                    <div className="text-button price">{testimonial.price}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="sw-pagination-testimonial sw-dots type-circle d-flex justify-content-center spd38" />
        </Swiper>
      </div>
    </section>
  );
}
