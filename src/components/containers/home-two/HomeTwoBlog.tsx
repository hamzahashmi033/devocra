import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

import ai from "public/images/blog/ai.webp";
import cms from "public/images/blog/cms.webp";
import devops from "public/images/blog/devops/devops1BlogHomeBanner.png";
import graphicDesign from "public/images/blog/graphic_design.webp";
import seo from "public/images/blog/seo.webp";
import development from "public/images/blog/development.webp";
const HomeTwoBlog = () => {
  return (
    <section className="section blog blog-two">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-8">
                  <div className="section__header text-center text-lg-start mb-0">
                    <span className="sub-title">
                      news & Blog
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                    <h2 className="title title-anim">
                      what&apos;s new in blog
                    </h2>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="slide-group justify-content-center justify-content-lg-end">
                    <button
                      aria-label="previous item"
                      className="slide-btn prev-blog"
                    >
                      <i className="fa-light fa-angle-left"></i>
                    </button>
                    <button
                      aria-label="next item"
                      className="slide-btn next-blog"
                    >
                      <i className="fa-light fa-angle-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-two__slider-w">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={1}
          speed={800}
          loop={true}
          roundLengths={false}
          centeredSlides={true}
          centeredSlidesBounds={false}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            nextEl: ".next-blog",
            prevEl: ".prev-blog",
          }}
          breakpoints={{
            992: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          className="blog-two__slider"
        >
          <SwiperSlide>
            <div className="blog-two__slider-single topy-tilt">
              <div className="blog__single-thumb">
                <Link href="blog-single">
                  <Image src={ai} alt="Image" />
                </Link>
              </div>
              <div className="blog__single-content">
                <h3>
                  <Link href="/">
                    Unleashing the Power of AI with Devocra: Transforming
                    Innovation and Technology
                  </Link>
                </h3>
                <div className="blog__single-meta">
                  <Link href="blog" className="sub-title">
                    Artifical Intelligence
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <p>MARCH 23, 2024</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog-two__slider-single topy-tilt">
              <div className="blog__single-thumb">
                <Link href="blog-single">
                  <Image src={cms} alt="Image" />
                </Link>
              </div>
              <div className="blog__single-content">
                <h3>
                  <Link href="/">
                    Explore the Power of CMS Solutions with Devocra: Simplify,
                    Manage, and Grow Your Digital Presence
                  </Link>
                </h3>
                <div className="blog__single-meta">
                  <Link href="blog" className="sub-title">
                    CMS
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <p>MARCH 23, 2024</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog-two__slider-single topy-tilt">
              <div className="blog__single-thumb">
                <Link href="/devops-category/unlock-the-future-of-software-quality-with-devOps-and-devSecOps">
                  <Image src={devops} alt="Image" />
                </Link>
              </div>
              <div className="blog__single-content">
                <h3>
                  <Link href="/devops-category/unlock-the-future-of-software-quality-with-devOps-and-devSecOps">
                    Top 23 Tools for Continuous Testing & DevOps Success
                  </Link>
                </h3>
                <div className="blog__single-meta">
                  <Link href="/devops-blogs" className="sub-title">
                    Devops
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <p>MARCH 23, 2023</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog-two__slider-single topy-tilt">
              <div className="blog__single-thumb">
                <Link href="/">
                  <Image src={graphicDesign} alt="Image" />
                </Link>
              </div>
              <div className="blog__single-content">
                <h3>
                  <Link href="/">
                    Creative Graphic Designs by Devocra: Transforming Ideas into
                    Visual Masterpieces
                  </Link>
                </h3>
                <div className="blog__single-meta">
                  <Link href="blog" className="sub-title">
                    Graphic
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <p>MARCH 23, 2023</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog-two__slider-single topy-tilt">
              <div className="blog__single-thumb">
                <Link href="/">
                  <Image src={seo} alt="Image" />
                </Link>
              </div>
              <div className="blog__single-content">
                <h3>
                  <Link href="/">
                    Boost Your Online Presence with SEO Strategies from Devocra
                  </Link>
                </h3>
                <div className="blog__single-meta">
                  <Link href="blog" className="sub-title">
                    Marketing
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <p>MARCH 23, 2024</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="blog-two__slider-single topy-tilt">
              <div className="blog__single-thumb">
                <Link href="/website-category/website-development-services-crafting-digital-experiences-that-drive-business-growth">
                  <Image src={development} alt="Image" />
                </Link>
              </div>
              <div className="blog__single-content">
                <h3>
                  <Link href="/website-category/website-development-services-crafting-digital-experiences-that-drive-business-growth">
                  Website Development Services Crafting Digital Experiences for Business Growth
                  </Link>
                </h3>
                <div className="blog__single-meta">
                  <Link href="/web-blogs" className="sub-title">
                    Website Development
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <p>february 15, 2025</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default HomeTwoBlog;
