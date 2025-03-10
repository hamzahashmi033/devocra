import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "public/images/devocralogo.png";
import logoLight from "public/images/logo-light.png";
import Offcanvas from "./Offcanvas";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
  handleNav: () => void;
}

const HeaderTwo = ({ openNav, handleNav, setOpenNav }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const defaultClasses = "primary-navbar cmn-nav";

  const combinedClasses = `${scrolled ? " navbar-active" : " "
    } ${defaultClasses}`;

  let logoSrc = logo;

  const router = useRouter();
  if (router.pathname === "/index-two-light") {
    logoSrc = logoLight;
  }

  return (
    <>
      <header className="header">
        <div className={combinedClasses}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar p-0">
                  <div className="navbar__logo">
                    <Link href="/" aria-label="go to home">
                      <Image src={logoSrc} priority alt="Image" width={200} height={160} />
                    </Link>
                  </div>
                  <div className="navbar__menu">
                    <ul>


                      
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className=""
                        >
                          <Link href="/about-us">ABOUT US</Link>
                        </button>

                      </li>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className="navbar__dropdown-label"
                        >
                          <Link href="/our-services">Services</Link>
                        </button>
                        <ul className="navbar__sub-menu">
                          <li>
                            <Link href="/web-development">Web Development</Link>
                          </li>
                          <li>
                            <Link href="/mobile-app-development">App Development</Link>
                          </li>
                          <li>
                            <Link href="/cms-development">CMS Development</Link>
                          </li>
                          <li>
                            <Link href="/graphic-design">Graphic Design</Link>
                          </li>
                          {/* <li>
                            <Link href="/artificial-intelligence">Artifical Intelligence</Link>
                          </li> */}
                          <li>
                            <Link href="/devops">Devops</Link>
                          </li>
                          <li>
                            <Link href="/marketing">Marketing</Link>
                          </li>
                          <li>
                            <Link href="/video-animation">Video Animation</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className=""
                        >
                          <Link href="/portfolio">PORTFOLIO</Link>
                        </button>

                      </li>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className=""
                        >
                          <Link href="/contact-us">CONTACT US</Link>
                        </button>

                      </li>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                          aria-label="dropdown menu"
                          className=""
                        >
                          <Link href="/blog">BLOGS</Link>
                        </button>

                      </li>
                    </ul>
                  </div>
                  <div className="navbar__options">
                    <div className="navbar__mobile-options d-none d-sm-flex">
                      <Link href="/contact-us" className="btn btn--secondary">
                        Let&apos;s Talk
                      </Link>
                    </div>
                    <button
                      className="open-mobile-menu d-flex d-xl-none"
                      aria-label="toggle mobile menu"
                      onClick={handleNav}
                    >
                      <i className="fa-light fa-bars-staggered"></i>
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas openNav={openNav} setOpenNav={setOpenNav} />
    </>
  );
};

export default HeaderTwo;
