import React from "react";
import Link from "next/link";
interface ServiceDetailsBannerProps {
  title: string; // The title to display in the banner
  breadcrumb: string; // Array of breadcrumb items
}
const ServiceDetailsBanner = ({ title, breadcrumb }:ServiceDetailsBannerProps) => {
  return (
    <section
      className="cmn-banner service-single-banner bg-img"
      style={{ backgroundImage: "url('/images/banner/cmn-banner-bg.png')" }}
    >
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-5 col-xl-7">
            <div className="text-center text-lg-start">
              <h1 className="title title-anim serviceHeadInnerPage">{title}</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <i className="fa-solid fa-house"></i>
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="our-services">Our Services</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {breadcrumb}
                  </li>
                </ol>
              </nav>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsBanner;
