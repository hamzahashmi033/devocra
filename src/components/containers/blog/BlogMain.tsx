import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import YoutubeEmbed from "@/components/youtube/YoutubeEmbed";
import eight from "public/images/news/eight.png";
import devops1 from "public/images/blog/devops/devops1InnerBannerMain.png";
import website1 from "public/images/blog/website/website1InnerBannerMain.jpeg";
import marketing1 from "public/images/blog/marketing/marketing1InnerBannerMain.png";
import app1 from "public/images/blog/app/app1InnerBannerMain.jpg";
import cms1 from "public/images/blog/cms/cms1InnerBannerMain.png";
import graphic1 from "public/images/blog/graphic/graphic1InnerBannerMain.jpg";
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

                <div className="blog-main__single fade-top">
                  <div className="thumb">
                    <div className="thumb-link ">
                      <Link href="blog-single">
                        <Image
                          src={app1}
                          alt="A programmer working at a desk with multiple screens, including a laptop, a monitor, and a smartphone, all displaying lines of code. The individual is holding the smartphone in one hand and typing on the laptop with the other. The workspace has a clean, modern setup with a keyboard and other office essentials in the background."
                          title="A programmer working at a desk with multiple screens, including a laptop, a monitor, and a smartphone, all displaying lines of code. The individual is holding the smartphone in one hand and typing on the laptop with the other. The workspace has a clean, modern setup with a keyboard and other office essentials in the background."
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
                        <p>23/02/2025</p>
                      </div>
                    </div>
                  </div>
                  <div className="content ">
                    <h4 className="h4">
                      <Link href="/app-category/how-does-converting-an-app-to-react-native-improve-performance">
                        How Does Converting an App to React Native Improve Performance
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

                <div className="blog-main__single fade-top">
                  <div className="thumb">
                    <div className="thumb-link ">
                      <Link href="blog-single">
                        <Image
                          src={cms1}
                          alt="A robotic hand reaching towards a glowing light bulb with CMS written on it, symbolizing innovation in content management systems."
                          title="A robotic hand reaching towards a glowing light bulb with CMS written on it, symbolizing innovation in content management systems."
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
                        <p>27/02/2025</p>
                      </div>
                    </div>
                  </div>
                  <div className="content ">
                    <h4 className="h4">
                      <Link href="/cms-category/how-to-choose-the-right-cms-development-services-for-your-business-in-2025">
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

                <div className="blog-main__single fade-top">
                  <div className="thumb">
                    <div className="thumb-link ">
                      <Link href="blog-single">
                        <Image
                          src={graphic1}
                          alt="Illustration of a human brain divided into two halves, representing logic and creativity. The left side is filled with structured black-and-white sketches of charts, graphs, formulas, and business concepts, symbolizing analytical thinking. The right side is colorful, with swirling patterns and paint splashes, representing artistic expression, imagination, and creativity."
                          title="Illustration of a human brain divided into two halves, representing logic and creativity. The left side is filled with structured black-and-white sketches of charts, graphs, formulas, and business concepts, symbolizing analytical thinking. The right side is colorful, with swirling patterns and paint splashes, representing artistic expression, imagination, and creativity."
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
                        <p>03/03/2025</p>
                      </div>
                    </div>
                  </div>
                  <div className="content ">
                    <h4 className="h4">
                      <Link href="/graphic-category/graphic-designing-by-devocra-transforming-visual-communication">
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
