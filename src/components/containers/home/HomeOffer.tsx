import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import blogthumb from "public/images/offer/website.webp";
import appthumb from "public/images/offer/app.webp";
import marketingthumb from "public/images/offer/marketing.webp";
import graphicthumb from "public/images/offer/graphic.webp";
import aithumb from "public/images/offer/ai.webp";
import devopsthumb from "public/images/offer/devops.webp";
import cmsthumb from "public/images/offer/cms.webp";
import star from "public/images/offer/star.webp";

const HomeOffer = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const caseStudyItems = document.querySelectorAll(".offer__cta-single");
      const deviceWidth = window.innerWidth;

      if (deviceWidth > 576) {
        caseStudyItems.forEach((item) => {
          const contentBox = item.getBoundingClientRect();
          const dx = event.clientX - contentBox.x;
          const dy = event.clientY - contentBox.y;
          const thirdChild = item.children[2] as HTMLElement;
          thirdChild.style.transform = `translate(${dx}px, ${dy}px) rotate(10deg)`;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="section offer fade-wrapper light">
      <div className="container">
        <div className="row ">
          <div className="col-12 col-lg-5">
            <div className="offer__content section__content">
              <span className="sub-title">
                WHAT WE OFFER
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Bringing Big Ideas to Your Business
              </h2>
              <div className="paragraph">
                <p>
                  We provide comprehensive solutions to help businesses stand out and succeed. Our services include efficient websites, user-friendly applications, and custom software tailored to workflows. We also offer marketing solutions like SEO, PPC, email, and social media marketing to boost customer reach, along with branding services such as differentiation strategies, content marketing, and inspiring UI/UX designs. Our focus is on integrating cloud solutions for sustainable growth, ensuring your business thrives both now and in the future.
                </p>
              </div>
              <div className="section__content-cta">
                <Link href="our-services" className="btn btn--secondary">
                  view all services
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xl-6 offset-xl-1">
            <div className="offer__cta">
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  01
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h3>
                  <Link href="web-development">
                    Web Development
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                </h3>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={blogthumb} alt="Image" />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  02
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h3>
                  <Link href="mobile-app-development">
                    App development
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                </h3>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={appthumb} alt="Image" />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  03
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h3>
                  <Link href="cms-development">
                    CMS development
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                </h3>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={cmsthumb} alt="Image" />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  04
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h3>
                  <Link href="marketing">
                    digital marketing
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                </h3>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={marketingthumb} alt="Image" />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  05
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h3>
                  <Link href="graphic-design">
                    graphic design
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                </h3>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={graphicthumb} alt="Image" />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  06
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h3>
                  <Link href="video-animation">
                    Video Animation
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                </h3>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={aithumb} alt="Image" />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  07
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                <h3>
                  <Link href="devops">
                    devOps engineering
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                </h3>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={devopsthumb} alt="Image" objectFit="contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt="Image" className="star" />
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

export default HomeOffer;
