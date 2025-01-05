import React from "react";
import Image from "next/image";
import Link from "next/link";
import awardthumb from "public/images/award-thumb.png";
import star from "public/images/star.png";
import dotlarge from "public/images/agency/dot-large.png";
import Awwards from "public/images/achievement/awwards1.jpg"
const HomeTwoAward = () => {
  return (
    <section className="section award">
      <div className="container">
        <div className="row justify-content-between gaper align-items-center">
          <div className="col-12 col-lg-6">
            <div className="">
              <Image src={Awwards} alt="Image" style={{borderRadius:"20px"}} className=" fade-left" />
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-5 offset-xxl-1">
            <div className="award__content section__content">
              <span className="sub-title">
                WE PROUD THAT
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Discover Our <span>Awards</span>
              </h2>
              <div className="paragraph">
                <p>

                  We also feel privileged to have been awarded Best Performance Award in Website Development (2022) by Awwwards.com that celebrates the best and creativity in the world of the web. This belief has placed us on 1st place in the Shutterstock Competition in graphics as a testimony to our splendid work. Also, we secured 1st position in the Coursera App Development competition for designing brilliant and concise mobile applications. All these successes demonstrate our commitment to excellence in the delivery of all aspects of digital solutions.
                </p>
              </div>
              <div className="award__content-meta">
                <div className="single">
                  <h4>2022</h4>
                  <h4>Awwwards</h4>
                  <p>Website of the day</p>
                </div>
                <div className="single">
                  <h4>2023</h4>
                  <h4>Shutter Stock</h4>
                  <p>Graphic Design Contest</p>
                </div>
                <div className="single">
                  <h4>2024</h4>
                  <h4>Coursera</h4>
                  <p>App of the month</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt="Image" className="star" />
      <Image src={star} alt="Image" className="star-two" />
      <Image src={dotlarge} alt="Image" className="dot" />
      <Image src={dotlarge} alt="Image" className="dot-two" />
    </section>
  );
};

export default HomeTwoAward;
