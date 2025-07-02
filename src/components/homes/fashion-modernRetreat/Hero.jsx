import React from "react";

import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="tf-slideshow slider-center">
      <div className="wrap-slider">
        <img
          alt="fashion-slideshow"
          src="/images/slider/slider-modernRetreat.jpg"
          width={1920}
          height={848}
        />
        <div className="box-content">
          <div className="container">
            <div className="content-slider">
              <div className="box-title-slider">
                <div
                  className="heading text-white title-display wow fadeInUp"
                  data-wow-delay="0s"
                >
                  Limited <br />
                  Edition
                </div>
                <p
                  className="body-text-1 subheading text-white wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  Don't miss out on our exclusive limited edition pieces.
                </p>
              </div>
              <div className="box-btn-slider wow fadeInUp" data-wow-delay=".2s">
                <Link
                  to={`/shop-default-grid`}
                  className="tf-btn btn-fill btn-white"
                >
                  <span className="text">Explore Collection</span>
                  <i className="icon icon-arrowUpRight" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
