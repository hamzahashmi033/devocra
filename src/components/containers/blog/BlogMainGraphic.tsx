import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import YoutubeEmbed from "@/components/youtube/YoutubeEmbed";

import poster from "public/images/blog/graphic/graphic1InnerBannerMain.jpg";


const BlogMainGraphic = () => {
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
                                            <Link href="/graphic-category/graphic-designing-by-devocra-transforming-visual-communication">
                                                <Image src={poster} alt="Illustration of a human brain divided into two halves, representing logic and creativity. The left side is filled with structured black-and-white sketches of charts, graphs, formulas, and business concepts, symbolizing analytical thinking. The right side is colorful, with swirling patterns and paint splashes, representing artistic expression, imagination, and creativity." title="Illustration of a human brain divided into two halves, representing logic and creativity. The left side is filled with structured black-and-white sketches of charts, graphs, formulas, and business concepts, symbolizing analytical thinking. The right side is colorful, with swirling patterns and paint splashes, representing artistic expression, imagination, and creativity." />
                                            </Link>
                                        </div>
                                        <div className="meta">
                                            <div className="meta__left">
                                                <p>
                                                    <strong>Written by: </strong>
                                                    Balaj Hussain
                                                </p>
                                                <span></span>
                                                <p>03/03/2025</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content ">
                                        <h4 className="h4">
                                            <Link href="blog-single">
                                            Graphic Designing by Devocra Transforming Visual Communication
                                            </Link>
                                        </h4>
                                        <p>
                                            This article is about how Graphic design is a powerful tool in today's digital age, helping companies to establish strong brand identities, create engaging content and effectively communicate with their audience. Devocra specializes in offering first -rate graphic design services, serving companies, entrepreneurs and individuals who require professional visual solutions. Whether it's your logo design services, motion, brand or digital design charts, the document guarantees high quality designs, innovative and impactful to your needs.
                                        </p>
                                        <div className="cta">
                                            <Link href="/graphic-category/graphic-designing-by-devocra-transforming-visual-communication">
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

export default BlogMainGraphic;
