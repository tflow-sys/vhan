import { testimonialsWithProduct7 } from "@/data/products";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import { useContextElement } from "@/context/Context";
export default function Testimonials() {
  const { setQuickViewItem } = useContextElement();
  return (
    <section className="flat-spacing pt-0">
      <div className="container">
        <div className="heading-section text-center">
          <h3 className="heading wow fadeInUp">Customer Say!</h3>
          <p className="subheading wow fadeInUp">
            Our customers adore our products, and we constantly aim to delight
            them.
          </p>
        </div>

        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          dir="ltr"
          className="swiper tf-sw-testimonial"
          breakpoints={{
            1024: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 1.3,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".spd78",
          }}
        >
          {testimonialsWithProduct7.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item hover-img">
                <div className="img-style">
                  <img
                    data-src={testimonial.imgSrc}
                    alt={testimonial.alt}
                    src={testimonial.imgSrc}
                    width={352}
                    height={468}
                  />
                  <a
                    href="#quickView"
                    onClick={() => setQuickViewItem(testimonial)}
                    data-bs-toggle="modal"
                    className="box-icon hover-tooltip center"
                  >
                    <span className="icon icon-eye" />
                    <span className="tooltip">Quick View</span>
                  </a>
                </div>
                <div className="content">
                  <div className="content-top">
                    <div className="list-star-default">
                      <i className="icon icon-star" />
                      <i className="icon icon-star" />
                      <i className="icon icon-star" />
                      <i className="icon icon-star" />
                      <i className="icon icon-star" />
                    </div>
                    <p className="text-secondary">{testimonial.testimonial}</p>
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
                        src={testimonial.avatarSrc}
                        width={91}
                        height={90}
                      />
                    </div>
                    <div className="box-price">
                      <p className="text-title text-line-clamp-1">
                        {testimonial.product}
                      </p>
                      <div className="text-button price">
                        ${testimonial.price.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="sw-pagination-testimonial sw-dots type-circle d-flex justify-content-center spd78" />
        </Swiper>
      </div>
    </section>
  );
}
