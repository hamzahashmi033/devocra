import React, { useState } from "react";
import Image from "next/image";
import thumb from "public/images/faq-thumb.png";

const FaqMain = () => {
  const [imgTab, setImgTab] = useState(0);
  return (
    <section className="section faq fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span className="sub-title">
                FAQS
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">Frequently Asked Questions</h2>
            </div>
          </div>
        </div>
        <div className="row gaper">
          {/* <div className="col-12 col-lg-6">
            <div className="faq__thumb fade-left">
              <Image src={thumb} alt="Image" />
            </div>
          </div> */}
          <div className="col-12 col-lg-12">
            <div className="accordion" id="accordion">
              <div
                className={
                  "accordion-item content__space fade-top" +
                  (imgTab === 0 ? " faq-one-active" : " ")
                }
              >
                <h5 className="accordion-header" id="headingOne">
                  <button
                    className={
                      (imgTab == 0 ? "  " : " collapsed") + " accordion-button"
                    }
                    onClick={() => setImgTab(imgTab === 0 ? -1 : 0)}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What types of software development services does Devocra offer?
                  </button>
                </h5>
                <div
                  id="collapseOne"
                  className={`accordion-collapse collapse${imgTab === 0 ? " show " : ""
                    }`}
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p>
                      At Devocra, we specialize in custom software development, delivering scalable and innovative solutions tailored to your business needs. From enterprise-grade applications to niche software tools, our team ensures high-quality, reliable solutions with a user-centric approach.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={
                  "accordion-item content__space fade-top" +
                  (imgTab === 1 ? " faq-one-active" : " ")
                }
              >
                <h5 className="accordion-header" id="headingTwo">
                  <button
                    className={
                      (imgTab == 1 ? "  " : " collapsed") + " accordion-button"
                    }
                    onClick={() => setImgTab(imgTab === 1 ? -1 : 1)}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How can Devocra help with website and app development?
                  </button>
                </h5>
                <div
                  id="collapseTwo"
                  className={`accordion-collapse collapse${imgTab === 1 ? " show " : ""
                    }`}
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p>
                      We create dynamic websites and mobile applications optimized for performance, scalability, and user experience. Our services cover front-end and back-end development, responsive design, e-commerce solutions, and seamless integrations with third-party tools.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={
                  "accordion-item content__space fade-top" +
                  (imgTab === 2 ? " faq-one-active" : " ")
                }
              >
                <h5 className="accordion-header" id="headingThree">
                  <button
                    className={
                      (imgTab == 2 ? "  " : " collapsed") + " accordion-button"
                    }
                    onClick={() => setImgTab(imgTab === 2 ? -1 : 2)}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What DevOps services do you provide to streamline development workflows?
                  </button>
                </h5>
                <div
                  id="collapseThree"
                  className={`accordion-collapse collapse${imgTab === 2 ? " show " : ""
                    }`}
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p>
                      Devocra’s DevOps services include CI/CD pipeline setup, cloud migration, infrastructure as code (IaC), monitoring, and automation. We help businesses improve operational efficiency and accelerate their software delivery cycles.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={
                  "accordion-item content__space fade-top" +
                  (imgTab === 3 ? " faq-one-active" : " ")
                }
              >
                <h5 className="accordion-header" id="headingFour">
                  <button
                    className={
                      (imgTab == 3 ? "  " : " collapsed") + " accordion-button"
                    }
                    onClick={() => setImgTab(imgTab === 3 ? -1 : 3)}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Can Devocra assist with branding and marketing strategies?
                  </button>
                </h5>
                <div
                  id="collapseFour"
                  className={`accordion-collapse collapse${imgTab === 3 ? " show " : ""
                    }`}
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p>
                      Yes, we offer a range of marketing and graphic design services, including logo design, social media marketing, content creation, and branding strategies to help businesses establish a strong online presence and attract their target audience.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={
                  "accordion-item content__space fade-top" +
                  (imgTab === 4 ? " faq-one-active" : " ")
                }
              >
                <h5 className="accordion-header" id="headingFour">
                  <button
                    className={
                      (imgTab == 4 ? "  " : " collapsed") + " accordion-button"
                    }
                    onClick={() => setImgTab(imgTab === 4 ? -1 : 4)}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Do you provide CMS development for content-driven websites?
                  </button>
                </h5>
                <div
                  id="collapseFour"
                  className={`accordion-collapse collapse${imgTab === 4 ? " show " : ""
                    }`}
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordion"
                >
                  <div className="accordion-body">
                    <p>
                    Absolutely! Devocra specializes in CMS development for platforms like WordPress, Joomla, and custom-built solutions. We deliver easy-to-manage, SEO-friendly websites tailored to your content and business requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqMain;
