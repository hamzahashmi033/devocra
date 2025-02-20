import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import YoutubeEmbed from "@/components/youtube/YoutubeEmbed";
import eight from "public/images/news/eight.png";
import devops1 from "public/images/blog/devops/devops1InnerBannerMain.png";
import website1 from "public/images/blog/website/website1InnerBannerMain.jpeg";
import marketing1 from "public/images/blog/marketing/marketing1InnerBannerMain.png";
import nine from "public/images/news/nine.png";
import ten from "public/images/news/ten.png";
import eleven from "public/images/news/eleven.png";
import twelve from "public/images/news/twelve.png";
import thirteen from "public/images/news/thirteen.png";
import fourteen from "public/images/news/fourteen.png";

const BlogMain = () => {
  const [videoActive, setVideoActive] = useState(false);
  return (
    <>
      <section className="section blog-main fade-wrapper">
        <div className="container">
          <div className="row gaper">
            <div className="col-12 col-xl-8">
              <div className="blog-main__content">
                <div className="blog-main__single fade-top">
                  <div className="thumb">
                    <div className="thumb-link ">
                      <Link href="blog-single">
                        <Image src={devops1} alt="Image" />
                      </Link>
                    </div>
                    <div className="meta">
                      <div className="meta__left">
                        <p>
                          <strong>Written by: </strong>
                          Balaj Hussain
                        </p>
                        <span></span>
                        <p>08/02/2025</p>
                      </div>
                    </div>
                  </div>
                  <div className="content ">
                    <h4 className="h4">
                      <Link href="/devops-category/unlock-the-future-of-software-quality-with-devOps-and-devSecOps">
                        Top 23 Essential Tools for Continuous Testing & DevOps
                        Boost Your Software Quality and Efficiency
                      </Link>
                    </h4>
                    <p>
                      This article focuses on the testing phase at devocra Agile
                      and DevOps,highlighting benefits like faster time to
                      market, enhanced quality assurance, and cost savings. It
                      also delves into the current tools and phenomenon that
                      define DevOps and software delivery in 2025.
                    </p>
                    <div className="cta">
                      <Link href="/devops-category/unlock-the-future-of-software-quality-with-devOps-and-devSecOps">
                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="blog-main__single fade-top">
                  <div className="thumb">
                    <div className="thumb-link ">
                      <Link href="blog-single">
                        <Image
                          src={website1}
                          alt="Discover expert Web development services including Python, Java, C++, 
                          and DevOps to enhance your digital projects and development."
                          title="Explore Cutting-Edge website development  Solutions"
                        />
                      </Link>
                    </div>
                    <div className="meta">
                      <div className="meta__left">
                        <p>
                          <strong>Written by: </strong>
                          Balaj Hussain
                        </p>
                        <span></span>
                        <p>15/02/2025</p>
                      </div>
                    </div>
                  </div>
                  <div className="content ">
                    <h4 className="h4">
                      <Link href="/website-category/website-development-services-crafting-digital-experiences-that-drive-business-growth">
                        Website Development Services Crafting Digital
                        Experiences That Drive Business Growth
                      </Link>
                    </h4>
                    <p>
                      Devocra delivers custom website development, integrating
                      responsive design, e-commerce solutions, CMS, and SEO
                      optimization. Services include tailored design, UX-focused
                      prototyping, scalable coding, comprehensive testing,
                      seamless deployment, and ongoing optimization.
                      Technologies like React, Angular, Node.js, and WordPress
                      ensure dynamic, performance-driven websites for business
                      growth.
                    </p>
                    <div className="cta">
                      <Link href="/website-category/website-development-services-crafting-digital-experiences-that-drive-business-growth">
                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="blog-main__single fade-top">
                  <div className="thumb">
                    <div className="thumb-link ">
                      <Link href="blog-single">
                        <Image
                          src={marketing1}
                          alt="SEO vs PPC – A Visual Comparison of Search Strategies,SEO vs PPC: A visual comparison of organic growth vs paid ads, highlighting key differences in digital marketing strategies."
                          title="SEO vs PPC – A Visual Comparison of Search Strategies,SEO vs PPC: A visual comparison of organic growth vs paid ads, highlighting key differences in digital marketing strategies"
                        />
                      </Link>
                    </div>
                    <div className="meta">
                      <div className="meta__left">
                        <p>
                          <strong>Written by: </strong>
                          Balaj Hussain
                        </p>
                        <span></span>
                        <p>20/02/2025</p>
                      </div>
                    </div>
                  </div>
                  <div className="content ">
                    <h4 className="h4">
                      <Link href="/marketing-category/seo-vs-paid-search-understanding-the-best-strategy-for-your-business">
                      SEO vs Paid Search Understanding the Best Strategy for Your Business
                      </Link>
                    </h4>
                    <p>
                    This article focuses on Traditional businesses struggle to determine which approach between SEO and Paid Search will work best for them in digital marketing. Businesses need to determine between these two options according to their specific objectives and financial constraints as well as implementation schedule. The article delivers a thorough analysis of PPC and SEO marketing which defines the distinction between organic and paid search visibility together with their respective impact on internet exposure.
                    </p>
                    <div className="cta">
                      <Link href="/marketing-category/seo-vs-paid-search-understanding-the-best-strategy-for-your-business">
                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="pagination-wrapper">
                  <ul className="pagination">
                    <li>
                      <Link href="blog">01</Link>
                    </li>
                    <li>
                      <Link href="blog" className="active">
                        02
                      </Link>
                    </li>
                    <li>
                      <Link href="blog">03</Link>
                    </li>
                    <li>
                      <button>
                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-4">
              <div className="blog-main__sidebar">
                <div className="widget ">
                  <div className="widget__head">
                    <h5 className="h5">Categories</h5>
                  </div>
                  <div className="widget__list">
                    <ul>
                      <li>
                        <Link href="/web-blogs">Web Development</Link>
                      </li>
                      <li>
                        <Link href="blog">App Development</Link>
                      </li>
                      <li>
                        <Link href="/devops-blogs">DevOps</Link>
                      </li>
                      <li>
                        <Link href="blog">CMS Development</Link>
                      </li>
                      <li>
                        <Link href="/marketing-blogs">Marketing</Link>
                      </li>
                      <li>
                        <Link href="blog">Graphic Designs</Link>
                      </li>
                      <li>
                        <Link href="blog">Video Animation</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"}
        onClick={() => setVideoActive(false)}
      >
        <div className="video-inner">
          <div
            className="video-container"
            onClick={(e: any) => e.stopPropagation()}
          >
            {videoActive && <YoutubeEmbed embedId="fSv6UgCkuTU" />}
            <button
              aria-label="close video popup"
              className="close-video-popup"
              onClick={() => setVideoActive(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogMain;
