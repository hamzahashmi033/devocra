import dynamic from 'next/dynamic';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/images/devocralogo.png";
const TrustpilotWidget = dynamic(() => import('./TrustpilotWidget'), { ssr: false });
const ClutchWidget = dynamic(() => import('./ClutchWidget'), { ssr: false });
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="footer section pb-0"

    >
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-5 col-xl-3">
            <div className="footer__single">
              <Link href="/" className="logo">
                <Image src={logo} alt="Image" width={250} height={250} />
              </Link>
              <div className="footer__single-meta">
                <Link
                  href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=18.672105000000013%2C105.68673800000003&z=17"
                  target="_blank"
                >
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                  6519 Greenhouse Rd, <br></br>
                  Katy, 77449, TX, US

                </Link>

                <Link href="tel:406-555-0120">
                  <i className="fa-sharp fa-solid fa-phone-volume"></i>
                  +1 281-297-8909
                </Link>
                <Link href="mailto:info@xpovio.com">
                  <i className="fa-sharp fa-solid fa-envelope"></i>
                  info@devocra.com
                </Link>
              </div>
              <div className="footer__cta text-start">
                <Link href="contact-us" className="btn btn--secondary">
                  book a call now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-2 col-xl-5">
            <div className="middle">
              <div className="footer__single">
                <div className="footer__single-intro">
                  <h3>Quick Links</h3>
                </div>
                <div className="footer__single-content">
                  <ul>
                    <li>
                      <Link href="about-us">About Us</Link>
                    </li>
                    <li>
                      <Link href="our-services">Services</Link>
                    </li>
                    <li>
                      <Link href="portfolio">Portfolio</Link>
                    </li>
                    <li>
                      <Link href="contact-us">Contact US</Link>
                    </li>
                    <li>
                      <Link href="blog">Blogs</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer__single">
                <div className="footer__single-intro">
                  <h3>Services</h3>
                </div>
                <div className="footer__single-content">
                  <ul>
                    <li>
                      <Link href="web-development">Website Development</Link>
                    </li>
                    <li>
                      <Link href="mobile-app-development">App Development</Link>
                    </li>
                    <li>
                      <Link href="cms-development">CMS Development</Link>
                    </li>
                    <li>
                      <Link href="graphic-design">Graphic Design</Link>
                    </li>
                    <li>
                      <Link href="video-animation">Video Animation</Link>
                    </li>
                    <li>
                      <Link href="devops">DevOps Engineering</Link>
                    </li>
                    {/* <li>
                      <Link href="artificial-intelligence">Artificial Intelligence</Link>
                    </li> */}

                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xl-4">
            <div className="footer__single">
              <div className="footer__single-intro">
                <h3>Subscribe our newsletter</h3>
              </div>
              <div className="footer__single-content">
                <p>
                  Welcome to our Software and Creative Company, we specialize in helping
                  business most like yours succeed online.
                </p>
                <div className="footer__single-form">
                  <form action="#" method="post">
                    <div className="input-email">
                      <input
                        type="email"
                        name="subscribe-news"
                        id="subscribeNews"
                        placeholder="Enter Your Email"
                        required
                      />
                      <button type="submit" className="subscribe">
                        <i className="fa-sharp fa-solid fa-paper-plane"></i>
                      </button>
                    </div>
                  </form>
                  <div className='row '>
                    <div className='col-6 '>
                      <TrustpilotWidget />
                    </div>
                    <div className='col-5 '>
                      <ClutchWidget />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer__copyright">
              <div className="row align-items-center gaper">
                <div className="col-12 col-lg-8">

                  <div className="footer__copyright-text text-center text-lg-start">
                    <p>
                      Copyright &copy;
                      <span id="copyYear">{currentYear}</span> Devocra{" "}
                    </p>

                  </div>


                </div>
                <div className="col-12 col-lg-4">
                  <div className="social justify-content-center justify-content-lg-end">

                    <Link href="https://www.facebook.com/profile.php?id=61571265142118" target="_blank">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    {/* <Link href="https://www.twitter.com/" target="_blank">
                      <i className="fa-brands fa-twitter"></i>
                    </Link> */}
                    <Link href="https://www.linkedin.com/company/devocraofficial/" target="_blank">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                    <Link href="https://www.instagram.com/devocraofficial/" target="_blank">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
