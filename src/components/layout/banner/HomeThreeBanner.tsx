import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import YoutubeEmbed from "@/components/youtube/YoutubeEmbed";
import videobg from "public/images/banner/video-bg.webp";
import dotlarge from "public/images/agency/dot-large.webp";
import arrow from "public/images/banner/arrow.webp";
const arr = [
  {
    title: "Exceptional Web and App Development Solutions", description: "We deliver top-notch web and app development solutions with professional designs, transforming businesses through innovative strategies, cutting-edge technology, and expert management tailored to diverse business needs.", url: "/images/banner/development.webp"
  },
  {
    title: "Outstanding CMS Development Solutions", description: "Discover exceptional open-source CMS platforms designed for efficiency and excellence, offering optimal functionality, scalability, and reliability to empower your business with seamless growth and top-tier performance.", url: "/images/banner/cms.webp"
  },
  {
    title: "Effective marketing solutions", description: "Advanced approaches create value, sustain interest, and guarantee positive outcomes.Innovative methodologies, identifying unique campaigns, perfecting the message strengthens your brand. Find out innovative strategies that are aimed to engage and motivate.", url: '/images/banner/marketing.webp'
  },
  {
    title: "Stunningly Unique Graphic Gesign Concepts", description: "Discover exceptional open-source CMS platforms designed for efficiency and excellence, offering optimal functionality, scalability, and reliability to empower your business with seamless growth and top-tier performance.", url: "/images/banner/graphicDesign.webp"
  },
  {
    title: " Revolutionary DevOps engineering strategies", description: "Improving operational efficiency through tools and techniques in the transforming environment.Creating solid foundations that guarantee secure pipelines of delivery. Valuing up of processes to decrease periods of inactivity and increase capacity", url: "/images/banner/devops.webp"
  },
  {
    title: " Groundbreaking Artificial Intelligence Service", description: "We inspire the world with cutting-edge AI solutions, transforming ideas into business innovations, enhancing productivity through seamless integration, and revolutionizing industries with large-scale innovation.", url: "/images/banner/ai.webp"
  }
]
const HomeThreeBanner = () => {
  const [videoActive, setVideoActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <>
      <section className="banner-three">
        <div className="banner-three__slider-w banner-three-alt-w">
          <Swiper
            slidesPerView={1}
            speed={1000}
            loop={true}
            centeredSlides={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              reverseDirection: false,
            }}
            onSlideChange={handleSlideChange}
            className="banner-three__slider banner-three-alt"
          >
            {arr.map((item, index) => {
              return (
                <SwiperSlide key = {index}>
                  <div className="single_slide" style={{ backgroundImage: `url(${item.url})` }}>
                    <div className="overlay_bg"></div>
                    <div className="content">
                      <h1>{item.title}</h1>
                      <p>{item.description}</p>
                      <div className="section__content-cta cta">
                        <div className="arrow-wrapper d-none d-md-block">
                          <span className="arrow"></span>
                        </div>
                        <Link
                          href="/contact-us"
                          className="btn btn--secondary"
                        >
                          book now &nbsp;
                          <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide >
              )
            })}


          </Swiper >
        </div >
        {/* <div className="social justify-content-center justify-content-lg-end">
          <Link href="https://www.facebook.com/" target="_blank">
            <i className="fa-brands fa-facebook-f"></i>
          </Link>
          <Link href="https://www.twitter.com/" target="_blank">
            <i className="fa-brands fa-twitter"></i>
          </Link>
          <Link href="https://www.pinterest.com/" target="_blank">
            <i className="fa-brands fa-linkedin-in"></i>
          </Link>
          <Link href="https://www.instagram.com/" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </Link>
        </div> */}


        <div className="banner-three__slider-progress-wrapper">
          <div className="container">
            <div className="banner-three__slider-progress">
              <div
                className={
                  "single-item" +
                  (activeIndex === 0 ? " single-item-active" : " ")
                }
              >
                <span>01</span>
                <p>WEB/APP DEVELOPMENT</p>
                <div className="slider-progress"></div>
              </div>
              <div
                className={
                  "single-item" +
                  (activeIndex === 1 ? " single-item-active" : " ")
                }
              >
                <span>02</span>
                <p>CMS Development</p>
                <div className="slider-progress"></div>
              </div>
              <div
                className={
                  "single-item" +
                  (activeIndex === 2 ? " single-item-active" : " ")
                }
              >
                <span>03</span>
                <p>MARKETING</p>
                <div className="slider-progress"></div>
              </div>
              <div
                className={
                  "single-item" +
                  (activeIndex === 3 ? " single-item-active" : " ")
                }
              >
                <span>04</span>
                <p>GRAPHIC DESIGN</p>
                <div className="slider-progress"></div>
              </div>
              <div
                className={
                  "single-item" +
                  (activeIndex === 4 ? " single-item-active" : " ")
                }
              >
                <span>05</span>
                <p>DEVOPS ENGINEERING</p>
                <div className="slider-progress"></div>
              </div>
              <div
                className={
                  "single-item" +
                  (activeIndex === 5 ? " single-item-active" : " ")
                }
              >
                <span>06</span>
                <p>ARTIFICAL INTELLIGENCE</p>
                <div className="slider-progress"></div>
              </div>
            </div>
          </div>
        </div>

      </section >

    </>
  );
};

export default HomeThreeBanner;
