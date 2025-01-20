import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import sthumb from "public/images/testimonial/s-thumb.png";
import sthumbtwo from "public/images/testimonial/s-thumb-two.png";
import sthumbthree from "public/images/testimonial/s-thumb-three.png";
import client1 from "public/images/testimonial/client1.webp"
import client2 from "public/images/testimonial/client2.webp"
import client3 from "public/images/testimonial/client3.webp"
import client4 from "public/images/testimonial/client4.webp"
import client5 from "public/images/testimonial/client5.webp"
import client6 from "public/images/testimonial/client6.jpg"
const line = ["client&apos;s testimonial","client&apos;s testimonial","client&apos;s testimonial","client&apos;s testimonial","client&apos;s testimonial","client&apos;s testimonial","client&apos;s testimonial",]

const arr = [
  {
    name:"Scarlett Austin",
    title:"Co Managing Partner",
    description:" It has been such a great honor and privilege to partner with Devocra in the management of our enterprise. Their team not only came up with a novel piece of software but also a lot of good advice in the process. We are very satisfied with the results of the experiment.",
    url: "/images/testimonial/client1.webp" ,
  },
  {
    name:"CEO",
    title:"Omar Almidani",
    description:" As a company, we went to Devocra for a software solution where we had a number of requirements and the company delivered more than expected. Our development team met our needs to a T, met every deadline given to them, and offered continued support after the launch of the site. Highly recommend!",
    url: "/images/testimonial/client2.webp" ,
  },
  {
    name:"Founder",
    title:"Cleitn Kimberly A",
    description:"We went to Devocra for a custom software and they are more than up to the task. Our development team was able to relate well to what we wanted and saw the project through to completion and even after that was willing to help if any issue arose. Highly recommend",
    url: "/images/testimonial/client3.webp" ,
  },
  {
    name:"Co-Founder and CEO",
    title:"Logan Anderson",
    description:"All through the process, Devocra was all business with excellent work, timely delivery and great imagination. Their design team implemented on our concept a practical model of software that one can actually use to improving its performance was the work of their development team. A top-tier agency!",
    url: "/images/testimonial/client4.webp" ,
  },
  {
    name:"Digital Manager",
    title:"Amelia",
    description:" It’s nice to see that Devocra is experienced in software and creative solutions. Organizations have benefited from them for a few projects; they always do quality and timely projects and very responsive to customer needs.",
    url: "/images/testimonial/client5.webp" ,
  }
]
const HomeTestimonial = () => {
  const [nextSlideIndex, setNextSlideIndex] = useState<number>(1);

  const handleSlideChange = (swiper: any) => {
    const nextIndex = (swiper.realIndex + 1) % swiper.slides.length;
    setNextSlideIndex(nextIndex);
  };
  return (
    <section className="section testimonial pt-0 position-relative">
      <div className="testimonial__text-slider-w">
        <Swiper
          slidesPerView="auto"
          spaceBetween={40}
          speed={5000}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: false,
          }}
          className="testimonial__text-slider"
        >
          {line.map((item,index) => {
            return( <SwiperSlide>
              <div className="testimonial__text-slider-single">
                <h2 className="h1">
                  <Link href="about-us" >
                    <span dangerouslySetInnerHTML={{__html:item}}></span>
                    <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                  </Link>
                </h2>
              </div>
            </SwiperSlide>)


          })}
          
        </Swiper>
      </div>
      <div className="container position-relative">
        <div className="row">
          <div className="col-12 col-xxl-10">
            <div className="testimonial-s__slider-w">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={800}
                loop={true}
                roundLengths={false}
                centeredSlides={false}
                centeredSlidesBounds={false}
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  nextEl: ".next-testimonial-three",
                  prevEl: ".prev-testimonial-three",
                }}
                onSlideChange={(swiper) => handleSlideChange(swiper)}
                className="testimonial-s__slider"
              >
                {arr.map ((item,index) => {
                  return(
                    <SwiperSlide>
                  <div className="testimonial-s__slider-single">
                    <div className="row gaper align-items-center">
                      <div className="col-12 col-lg-4 col-xxl-4">
                        <div className="thumb">
                        <Image src={item.url} alt="Image" width={400} height={400} />

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="44"
                            height="322"
                            viewBox="0 0 44 322"
                            fill="none"
                            className="d-none d-lg-block"
                          >
                            <path
                              d="M43 -0.000976562V151.999L2 192.999H43V321.999"
                              stroke="#414141"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="col-12 col-lg-7 offset-lg-1 col-xxl-7 offset-xxl-1">
                        <div className="testimonial-s__content">
                          <div className="quote">
                            <i className="fa-solid fa-quote-right"></i>
                          </div>
                          <div className="content">
                            <h2 className="testimonialText">
                              {item.description}
                            </h2>
                          </div>
                          <div className="content-cta">
                            <h2 className="testimonialName">{item.title}</h2>
                            <p>{item.name}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                  )
                })}
                
              </Swiper>
            </div>
          </div>
        </div>
        <div className="slide-group justify-content-start">
          <button
            aria-label="previous item"
            className="slide-btn prev-testimonial-three"
          >
            <i className="fa-light fa-angle-left"></i>
          </button>
          <button
            aria-label="next item"
            className="slide-btn next-testimonial-three"
          >
            <i className="fa-light fa-angle-right"></i>
          </button>
        </div>
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

export default HomeTestimonial;
