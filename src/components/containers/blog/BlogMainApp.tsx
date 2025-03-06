import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import YoutubeEmbed from "@/components/youtube/YoutubeEmbed";

import poster from "public/images/blog/app/app1InnerBannerMain.jpg";


const BlogMainApp = () => {
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
                                            <Link href="/app-category/how-does-converting-an-app-to-react-native-improve-performance">
                                                <Image src={poster} alt="A programmer working at a desk with multiple screens, including a laptop, a monitor, and a smartphone, all displaying lines of code. The individual is holding the smartphone in one hand and typing on the laptop with the other. The workspace has a clean, modern setup with a keyboard and other office essentials in the background." title="A programmer working at a desk with multiple screens, including a laptop, a monitor, and a smartphone, all displaying lines of code. The individual is holding the smartphone in one hand and typing on the laptop with the other. The workspace has a clean, modern setup with a keyboard and other office essentials in the background." />
                                            </Link>
                                        </div>
                                        <div className="meta">
                                            <div className="meta__left">
                                                <p>
                                                    <strong>Written by: </strong>
                                                    Balaj Hussain
                                                </p>
                                                <span></span>
                                                <p>23/02/2025</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content ">
                                        <h4 className="h4">
                                            <Link href="blog-single">
                                                How Does Converting an App to React Native Improve Performance?
                                            </Link>
                                        </h4>
                                        <p>
                                            This article focuses on the guide demonstrates the process to convert mobile apps between Android and iOS to React Native format through runtime migration methods alongside advantages and technical obstacles. The development process for cross-platform apps using React Native becomes more simplified through Devocra to deliver both performance excellence and efficient development capabilities.
                                        </p>
                                        <div className="cta">
                                            <Link href="/app-category/how-does-converting-an-app-to-react-native-improve-performance">
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

export default BlogMainApp;
