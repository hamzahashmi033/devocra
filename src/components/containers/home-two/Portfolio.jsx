import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "public/images/portfolio/one.png";
import ten from "public/images/portfolio/ecommerce.png";
import two from "public/images/portfolio/two.png";
import three from "public/images/portfolio/three.png";
import four from "public/images/portfolio/four.png";
import five from "public/images/portfolio/five.png";
import fresha from "public/images/portfolio/mobile/2.png"
import brakeTime from "public/images/portfolio/mobile/1.png"
import ecommerce from "public/images/portfolio/mobile/3.png"
import plano from "public/images/portfolio/mobile/4.png"
import web1 from "public/images/portfolio/website/1.png"
import web2 from "public/images/portfolio/website/2.png"
import web3 from "public/images/portfolio/website/3.png"
import web4 from "public/images/portfolio/website/4.png"
import web5 from "public/images/portfolio/website/5.png"
import web6 from "public/images/portfolio/website/6.png"
import web7 from "public/images/portfolio/website/7.png"
import web8 from "public/images/portfolio/website/8.png"
import web9 from "public/images/portfolio/website/9.png"
import web10 from "public/images/portfolio/website/10.png"
import web11 from "public/images/portfolio/website/11.png"
// import video1 from "public
import cms1 from "public/images/portfolio/cms/1.png"
import cms2 from "public/images/portfolio/cms/2.png"
import cms3 from "public/images/portfolio/cms/3.png"
import cms4 from "public/images/portfolio/cms/4.png"
import cms5 from "public/images/portfolio/cms/5.png"
import cms6 from "public/images/portfolio/cms/6.png"
import logo1 from "public/images/portfolio/logo/1.png"
import logo2 from "public/images/portfolio/logo/2.png"
import logo3 from "public/images/portfolio/logo/3.png"
import logo4 from "public/images/portfolio/logo/4.png"
import logo5 from "public/images/portfolio/logo/5.png"
import logo6 from "public/images/portfolio/logo/6.png"
import logo7 from "public/images/portfolio/logo/7.png"
import logo8 from "public/images/portfolio/logo/8.png"
import logo9 from "public/images/portfolio/logo/9.png"
import logo10 from "public/images/portfolio/logo/10.png"
import logo11 from "public/images/portfolio/logo/11.png"
import logo12 from "public/images/portfolio/logo/12.png"
import banner1 from "public/images/portfolio/banners/1.png"
import banner2 from "public/images/portfolio/banners/2.png"
import banner3 from "public/images/portfolio/banners/3.png"
import banner4 from "public/images/portfolio/banners/4.png"
import banner5 from "public/images/portfolio/banners/5.png"
import banner6 from "public/images/portfolio/banners/6.png"
import banner7 from "public/images/portfolio/banners/7.png"
import banner8 from "public/images/portfolio/banners/8.png"
import banner9 from "public/images/portfolio/banners/9.png"
import banner10 from "public/images/portfolio/banners/10.png"
import banner11 from "public/images/portfolio/banners/11.png"
const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("*");

  const handleTabClick = (filter) => {
    setActiveFilter(filter);
  };
  return (
    <section className="section portfolio portfolio-two portfolio-filter fade-wrapper">
  
      <div className="">
        <div className="row ">

          <div className="col-12 col-lg-12 col-xl-4">
            <div className="portfolio-two__filter-btn section__header g-ind" >
              <button
                aria-label="Filter Portfolio"
                className={activeFilter === "*" ? "active" : ""}
                onClick={() => handleTabClick("*")}
              >
                <span>01</span>
                All
              </button>
              <button
                aria-label="Filter Portfolio"
                className={activeFilter === ".web" ? "active" : ""}
                onClick={() => handleTabClick(".web")}
              >
                <span>02</span>
                Web Development
              </button>
              <button
                aria-label="Filter Portfolio"
                className={activeFilter === ".app" ? "active" : ""}
                onClick={() => handleTabClick(".app")}
              >
                <span>03</span>
                App Development
              </button>
              <button
                aria-label="Filter Portfolio"
                className={activeFilter === ".cms" ? "active" : ""}
                onClick={() => handleTabClick(".cms")}
              >
                <span>04</span>
                CMS Development
              </button>
              <button
                aria-label="Filter Portfolio"
                className={activeFilter === ".graphic" ? "active" : ""}
                onClick={() => handleTabClick(".graphic")}
              >
                <span>05</span>
                Graphic Design
              </button>
              <button
                aria-label="Filter Portfolio"
                className={activeFilter === ".video" ? "active" : ""}
                onClick={() => handleTabClick(".video")}
              >
                <span>06</span>
                Video Animation
              </button>

            </div>
          </div>
        </div>
        <div className="row masonry-grid">
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main design ${activeFilter === ".app" || activeFilter === ".app" ? "" : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={fresha} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Mobile App</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main design ${activeFilter === ".app" || activeFilter === ".app" ? "" : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={brakeTime} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Mobile App</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".app" || activeFilter === "*"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={ecommerce} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Mobile App</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main technology ${activeFilter === ".app" || activeFilter === "*"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={plano} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Mobile App</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main design ${activeFilter === ".web" || activeFilter === ".web" ? "" : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={web1} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Website</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".web" || activeFilter === ".web"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={web2} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Website</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".web" || activeFilter === ".web"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={web3} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Website</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".web" || activeFilter === "*"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={web4} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Website</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".web" || activeFilter === "*"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={web5} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Website</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".web" || activeFilter === ".web"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={web6} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Website</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".web" || activeFilter === ".web"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={web7} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Website</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".web" || activeFilter === ".web"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={web8} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Website</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".web" || activeFilter === ".web"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={web9} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Website</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".web" || activeFilter === ".web"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={web10} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Website</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".web" || activeFilter === ".web"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={web11} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Website</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".video" || activeFilter === "*"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <video
                  src="/images/portfolio/video/CateringIntroVisualOnly.mp4"
                  height={550}
                  width={550}
                  autoPlay
                  muted
                  loop
                // controls
                />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Video Animation</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".video" || activeFilter === "*"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <video
                  src="/images/portfolio/video/ConstructionIntroFineAudio.mp4"
                  height={550}
                  width={550}
                  autoPlay
                  muted
                  loop
                // controls
                />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Video Animation</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".video" || activeFilter === ".video"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <video
                  src="/images/portfolio/video/UrbanAppIntroFineAudio.mp4"
                  height={550}
                  width={550}
                  autoPlay
                  muted
                  loop
                // controls
                />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Video Animation</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".video" || activeFilter === ".video"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <video
                  src="/images/portfolio/video/ElectricianIntroFineAudio.mp4"
                  height={550}
                  width={550}
                  autoPlay
                  muted
                  loop
                // controls
                />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Video Animation</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".cms" || activeFilter === "*"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={cms1} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">CMS Development</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".cms" || activeFilter === "*"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={cms2} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">CMS Development</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".cms" || activeFilter === ".cms"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={cms3} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">CMS Development</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".cms" || activeFilter === ".cms"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={cms4} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">CMS Development</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".cms" || activeFilter === ".cms"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={cms5} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">CMS Development</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".cms" || activeFilter === ".cms"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={cms6} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">CMS Development</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".graphic" || activeFilter === "*"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={logo9} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Graphic Design</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".graphic" || activeFilter === "*"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={logo7} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Graphic Design</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".graphic" || activeFilter === ".graphic"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={logo1} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Graphic Design</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".graphic" || activeFilter === ".graphic"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={logo2} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Graphic Design</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".graphic" || activeFilter === ".graphic"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={logo3} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Graphic Design</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".graphic" || activeFilter === ".graphic"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={logo4} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Graphic Design</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".graphic" || activeFilter === ".graphic"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={logo5} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Graphic Design</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".graphic" || activeFilter === ".graphic"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={logo6} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Graphic Design</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".graphic" || activeFilter === ".graphic"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={logo8} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Graphic Design</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".graphic" || activeFilter === ".graphic"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={logo10} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Graphic Design</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".graphic" || activeFilter === ".graphic"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={logo11} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Graphic Design</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".graphic" || activeFilter === ".graphic"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={logo12} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Graphic Design</Link>
                </h3>
              </div>
            </div>
          </div>

          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".graphic" || activeFilter === "*"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={banner1} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Graphic Design</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".graphic" || activeFilter === "*"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={banner5} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Graphic Design</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".graphic" || activeFilter === ".graphic"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={banner2} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Graphic Design</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".graphic" || activeFilter === ".graphic"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={banner3} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Graphic Design</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".graphic" || activeFilter === ".graphic"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={banner4} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Graphic Design</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".graphic" || activeFilter === ".graphic"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={banner6} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Graphic Design</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".graphic" || activeFilter === ".graphic"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={banner7} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Graphic Design</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".graphic" || activeFilter === ".graphic"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={banner8} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Graphic Design</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".graphic" || activeFilter === ".graphic"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={banner9} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Graphic Design</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".graphic" || activeFilter === ".graphic"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={banner10} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Graphic Design</Link>
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 col-xl-4 filter-item-space grid-item-main development ${activeFilter === ".graphic" || activeFilter === ".graphic"
              ? ""
              : "hidden"
              }`}
          >
            <div className="portfolio__single topy-tilt ">
              <Link href="portfolio">
                <Image src={banner11} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h3 className="portfolioText">
                  <Link href="portfolio">Graphic Design</Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
