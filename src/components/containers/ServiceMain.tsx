import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

const ServiceMain = () => {
  return (
    <section className="section service-t">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="service-t__slider-w">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={800}
                loop={true}
                centeredSlides={false}
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  nextEl: ".next-service-t",
                  prevEl: ".prev-service-t",
                }}
                className="service-t__slider"
                breakpoints={{
                  1400: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          01
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="/web-development">Web Development</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Frontend Development</li>
                        <li>Backend Development</li>
                        <li>Website Design</li>
                        <li>Website Maintainance</li>
                        <li>Enterprise-Level Websites</li>
                      </ul>
                      <div className="cta">
                        <Link href="/web-development">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          02
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="/mobile-app-development">App Development</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Native App Development</li>
                        <li>Hybrid App Development</li>
                        <li>Firebase and Supabase</li>
                        <li>App Maintainance</li>
                        <li>App Deployment</li>
                      </ul>
                      <div className="cta">
                        <Link href="/mobile-app-development">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          03
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="/cms-development">CMS Development</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>WordPress Development</li>
                        <li>Shopify Development</li>
                        <li>Magento Development</li>
                        <li>Custom Theme Development</li>
                        <li>CMS Maintenance</li>
                      </ul>
                      <div className="cta">
                        <Link href="/cms-development">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          04
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="/graphic-design">Graphic Design</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Logo Design</li>
                        <li>Packaging Design</li>
                        <li>Crafting UI/UX</li>
                        <li>Illustration</li>
                        <li>Advertising Design</li>
                      </ul>
                      <div className="cta">
                        <Link href="/graphic-design">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          05
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="/marketing">Marketing</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Search Engine Optimisation(SEO)</li>
                        <li>Social Media Marketing</li>
                        <li>Pay-per-click(PPC)</li>
                        <li>Email Marketing</li>
                        <li>Content Marketing</li>
                      </ul>
                      <div className="cta">
                        <Link href="/marketing">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          06
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="/devops">DevOps</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>CI / CD</li>
                        <li>Infrastructure as Code (IaC)</li>
                        <li>Containerization and Orchestration</li>
                        <li>Cloud Computing and Automation</li>
                        <li>Monitoring and Logging</li>
                      </ul>
                      <div className="cta">
                        <Link href="/devops">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          07
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="/artificial-intelligence">Artificial Intelligence</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Generative AI</li>
                        <li>AI Model Fine-Tuning</li>
                        <li>Smart AI Assistant</li>
                        <li>Natural Language Processing (LLM)</li>
                        <li>Automated Optimization</li>
                      </ul>
                      <div className="cta">
                        <Link href="/artificial-intelligence">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          08
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="/video-animation">Video Animation</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>2D Animation</li>
                        <li>3D Animation</li>
                        <li>Stop Motion</li>
                        <li>Motion Graphics</li>
                        <li>Whiteboard Animation</li>
                      </ul>
                      <div className="cta">
                        <Link href="/video-animation">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-group">
        <button aria-label="previous item" className="slide-btn prev-service-t">
          <i className="fa-light fa-angle-left"></i>
        </button>
        <button aria-label="next item" className="slide-btn next-service-t">
          <i className="fa-light fa-angle-right"></i>
        </button>
      </div>
      <div className="lines d-none d-lg-flex">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </section>
  );
};

export default ServiceMain;
