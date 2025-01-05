import React from "react";
import Image from "next/image";
import one from "public/images/mission/one.png";
import two from "public/images/mission/two.png";
import About1 from "public/images/achievement/about-1.png"
import About4 from "public/images/achievement/about-4.png"
import About2 from "public/images/achievement/about-2.png"
import About3 from "public/images/achievement/about-3.png"

const OurMission = () => {
  return (
    <section className="section mission-s fade-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-5 col-xxl-5">
                  <div className="section__header text-center text-lg-start mb-0">
                    <span className="sub-title">
                      mission & vission
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                    <h2 className="title title-anim">our mission & value</h2>
                  </div>
                </div>
                <div className="col-12 col-lg-7 col-xxl-5 offset-xxl-2">
                  <div className="text-center text-lg-start">
                    <p>
                      Devocvra’s goal is to help companies through creating attractive and efficient products applying the future-oriented technology and unique designs. Being integrity-driven, team-oriented, innovative and customer-focused, our activities are based on trust and focus on effective and sustainable partnership and outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row gaper">
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Authenticity in Solutions</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  At Devocra, we hold ourselves to high standards of plain-talking, integrity, and dependability as far as software solutions are concerned. All projects are built to financial honesty, the requirements of your business, and to start and end with efficiency to bolster the long term success of a firm. This is further backed by our solid professionalism which ensures you deal with a reputable partner.

                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single fade-top">
              <Image src={About1} alt="Image" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single fade-top">
              <Image src={About2} alt="Image" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Creativity with Integrity</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  We encourage creativity in everything we do but we always take our client’s brand value system into consideration. Our designs look beyond style, embracing your mission and goal and providing rich digital experiences considerate enough to the eyes.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Reliability in Development</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  Reliability is our brand slogan. Whether clients are looking for easy to use mobile applications or shatterproof software, we guarantee stabilized end results. Our areas of specialization are based on innovation and precision to solve problems that will not require repeated visit or advice.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single fade-top">
              <Image src={About3} alt="Image" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single fade-top">
              <Image src={About4} alt="Image" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="mission-s__single mission-s__single--alt fade-top">
              <h3>Excellence in Execution</h3>
              <div className="section__content-cta">
                <p className="primary-text">
                  You will notice that quality isn’t just a dream, it is an assurance. In web development to all computer related services, every undertaking we carry out is marked by precision, accuracy, and effectiveness in use and efficiency in its outcomes for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
