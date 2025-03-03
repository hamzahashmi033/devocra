import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

import ai from "public/images/blog/ai.webp";
import cms from "public/images/blog/cms/cms1InnerBannerMain.png";
import devops from "public/images/blog/devops/devops1BlogHomeBanner.png";
import graphicDesign from "public/images/blog/graphic_design.webp";
import marketing1 from "public/images/blog/marketing/marketing1InnerBannerMain.png";
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
                  <Image src={cms} alt="A robotic hand reaching towards a glowing light bulb with CMS written on it, symbolizing innovation in content management systems." />
                </Link>
              </div>
              <div className="blog__single-content">
                <h3>
                  <Link href="/cms-category/how-to-choose-the-right-cms-development-services-for-your-business-in-2025">
                  How to Choose the Right CMS Development Services for Your Business in 2025
                  </Link>
                </h3>
                <div className="blog__single-meta">
                  <Link href="blog" className="sub-title">
                    CMS
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <p>February 27, 2025</p>
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
                <Link href="/marketing-category/seo-vs-paid-search-understanding-the-best-strategy-for-your-business">
                  <Image src={marketing1} alt="Image" />
                </Link>
              </div>
              <div className="blog__single-content">
                <h3>
                  <Link href="/marketing-category/seo-vs-paid-search-understanding-the-best-strategy-for-your-business">
                  SEO vs Paid Search Understanding the Best Strategy for Your Business
                  </Link>
                </h3>
                <div className="blog__single-meta">
                  <Link href="marketing-blogs" className="sub-title">
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
