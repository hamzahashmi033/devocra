import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import YoutubeEmbed from "@/components/youtube/YoutubeEmbed";

import poster from "public/images/blog/cms/cms1InnerBannerMain.png";


const BlogMainCms = () => {
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
                                            <Link href="/cms-category/how-to-choose-the-right-cms-development-services-for-your-business-in-2025">
                                                <Image src={poster} alt="A robotic hand reaching towards a glowing light bulb with CMS written on it, symbolizing innovation in content management systems." title="A robotic hand reaching towards a glowing light bulb with CMS written on it, symbolizing innovation in content management systems." />
                                            </Link>
                                        </div>
                                        <div className="meta">
                                            <div className="meta__left">
                                                <p>
                                                    <strong>Written by: </strong>
                                                    Balaj Hussain
                                                </p>
                                                <span></span>
                                                <p>27/02/2025</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content ">
                                        <h4 className="h4">
                                            <Link href="blog-single">
                                            How to Choose the Right CMS Development Services for Your Business in 2025
                                            </Link>
                                        </h4>
                                        <p>
                                            This article is about CMS offers scalable, secure, and customizable content management solutions for businesses. Features include SEO optimization, performance speed, third-party integrations, security, and user-friendly design. It supports e-commerce, corporate sites, and enterprises with reliable support, cost-effective plans, and seamless content management.
                                        </p>
                                        <div className="cta">
                                            <Link href="/cms-category/how-to-choose-the-right-cms-development-services-for-your-business-in-2025">
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

export default BlogMainCms;
