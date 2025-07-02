import { products5 } from "@/data/products";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

export default function Tiktok() {
  const videoRefs = useRef([]);
  const [activeVideoIndex, setActiveVideoIndex] = useState(null);

  const handleMouseEnter = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (video) {
        if (i === index) {
          video.play();
          setActiveVideoIndex(index); // Set active video index
        } else {
          video.pause();
        }
      }
    });
  };

  const handleMouseLeave = () => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
      }
    });
    setActiveVideoIndex(null); // Reset active video index
  };

  return (
    <section className="flat-spacing pt-0">
      <div className="container">
        <div className="heading-section text-center wow fadeInUp">
          <h3 className="heading">On Tiktok</h3>
          <p className="subheading text-secondary">
            "Join us on TikTok for exclusive brand releases, unboxings, reviews,
            and more!"
          </p>
        </div>
        <Swiper
          dir="ltr"
          className="swiper tf-sw-collection"
          spaceBetween={15}
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {products5.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="collection-social hover-img wow fadeInUp"
                data-wow-delay={slide.wowDelay}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  alt="poster"
                  className={`poster ${
                    activeVideoIndex === index ? "hide" : ""
                  }`}
                  src={slide.imgSrc}
                  width={450}
                  height={600}
                />
                <video
                  className="hover-video"
                  ref={(el) => (videoRefs.current[index] = el)}
                  controls
                  width={300}
                  height={400}
                  playsInline
                  muted
                  loop
                >
                  <source src={slide.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="cls-content">
                  <div className="avatar avt-60 round">
                    <img
                      alt="avatar"
                      src={slide.avatarSrc}
                      width={90}
                      height={90}
                    />
                  </div>
                  <div className="info">
                    <div>
                      <Link
                        to={`/product-detail/${slide.id}`}
                        className="title text-title text-white link text-line-clamp-1"
                      >
                        {slide.title}
                      </Link>
                    </div>
                    <span className="price text-button text-white">
                      ${slide.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="sec-btn text-center">
            <a href="#" className="btn-line">
              Follow us on Tiktok
            </a>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
