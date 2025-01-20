import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

const arr = [  
  {
  date:"MARCH 23, 2024",
  title:"Artifical Intelligence",
  description:"Unleashing the Power of AI with Devocra: Transforming Innovation and Technology",
  img:"/images/blog/ai.webp",
},
{
  date:"MARCH 23, 2024",
  title:"CMS",
  description:"Explore the Power of CMS Solutions with Devocra: Simplify, Manage, and Grow Your Digital Presence",
  img:"/images/blog/cms.webp" , 
},
{
  date:"MARCH 23, 2024",
  title:"Devops",
  description:" DevOps Excellence with Devocra: Transforming Software Development and Operations",
  img:"/images/blog/devops.webp",
},
{
  date:"MARCH 23, 2024",
  title:"Graphic",
  description:" Creative Graphic Designs by Devocra: Transforming Ideas into Visual Masterpieces",
  img:"/images/blog/graphic_design.webp",
},
{
  date:"MARCH 23, 2024",
  title:"Marketing",
  description:"Boost Your Online Presence with SEO Strategies from Devocra",
  img:"/images/blog/seo.webp" ,
},
{
  date:"MARCH 23, 2024",
  title:"Development",
  description:"Building the FutureDevocra's Vision for Transformative Development",
  img: "/images/blog/development.webp",
}

]     

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
          {arr.map((item,index) => {
            return(
              <SwiperSlide>
            <div className="blog-two__slider-single topy-tilt">
              <div className="blog__single-thumb">
                <Link href="blog-single">
                  <Image src={item.img} alt="Image" width={140} height={140} />
                </Link>
              </div>
              <div className="blog__single-content">
                <h3>
                  <Link href="/">
                    {item.description}
                  </Link>
                </h3>
                <div className="blog__single-meta">
                  <Link href="blog" className="sub-title">
                    {item.title}
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <p>{item.date}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
            )
          })}
          
        </Swiper>
      </div>
    </section>
  );
};

export default HomeTwoBlog;
