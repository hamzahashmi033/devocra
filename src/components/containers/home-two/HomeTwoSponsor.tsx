import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";


const arr = ["/images/partners/icone-1.webp","/images/partners/icone-2.webp","/images/partners/icone-3.webp","/images/partners/icone-4.webp","/images/partners/icone-5.webp","/images/partners/icone-6.webp","/images/partners/icone-7.webp","/images/partners/icone-8.webp","/images/partners/icone-3.webp","/images/partners/icone-5.webp","/images/partners/icone-1.webp","/images/partners/icone-2.webp","/images/partners/icone-8.webp","/images/partners/icone-5.webp","/images/partners/icone-7.webp","/images/partners/icone-6.webp"]
const HomeTwoSponsor = () => {
  return (
    <div className="sponsor section liner">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span className="sub-title mb-0">
                Our Trusted Technological Partners
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="sponsor__slider-w">
              <Swiper
                slidesPerView={1}
                spaceBetween={70}
                slidesPerGroup={1}
                speed={1200}
                loop={true}
                roundLengths={true}
                centeredSlides={true}
                centeredSlidesBounds={false}
                modules={[Autoplay]}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  1400: {
                    slidesPerView: 6,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  576: {
                    slidesPerView: 2,
                  },
                }}
                className="sponsor__slider"
              >
                {arr.map ((item,index) => {
                  return(
                    <SwiperSlide>
                  <div className="sponsor__slider-item">
                    <Image src={item} alt="Image" width={140} height={140}/>
                  </div>
                </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="lines d-none d-lg-flex">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default HomeTwoSponsor;
