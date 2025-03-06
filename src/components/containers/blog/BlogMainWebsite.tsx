import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import YoutubeEmbed from "@/components/youtube/YoutubeEmbed";

import website1 from "public/images/blog/website/website1InnerBannerMain.jpeg";

const BlogMainWebsite = () => {
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
                      <Link href="/website-category/website-development-services-crafting-digital-experiences-that-drive-business-growth">
                        <Image
                          src={website1}
                          alt="Explore Cutting-Edge website development Solutions"
                          title="Explore Cutting-Edge website development Solutions"
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
                      <Link href="blog-single">
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
                        <Link href="/app-blogs">App Development</Link>
                      </li>
                      <li>
                        <Link href="/devops-blogs">DevOps</Link>
                      </li>
                      <li>
                        <Link href="/cms-blogs">CMS Development</Link>
                      </li>
                      <li>
                        <Link href="/marketing-blogs">Marketing</Link>
                      </li>
                      <li>
                        <Link href="/graphic-blogs">Graphic Designs</Link>
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

export default BlogMainWebsite;
