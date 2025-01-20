import React from "react";
import Image from "next/image";
import thumbone from "public/images/service/thumb-one.png";
import thumbtwo from "public/images/service/thumb-two.png";
interface ServiceDetailsMainProps {
  mainHead: string,
  mainDesc: string[],
  head1: string,
  desc1: string[],
  head2: string,
  desc2: string[],
  head3: string,
  desc3: string[],
  head4: string,
  desc4: string[],
  head5: string,
  desc5: string[],
  img1: string,
  img2: string,
  img3: string,
  img4: string,
  img5: string,
}
const ServiceDetailsMain = ({ mainHead, mainDesc, head1, desc1, head2, desc2, head3, desc3, head4, desc4, head5, desc5,img1,img2,img3,img4,img5 }: ServiceDetailsMainProps) => {
  return (
    <section className="section service-details fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="service-details__slider">
              <div className="service-details__slider-single">
                <div className="details-group section__cta text-start">
                  <h3 className="title-anim">{mainHead}</h3>
                  <p>
                    {mainDesc[0]}
                  </p>
                  <p>
                    {mainDesc[1]}
                  </p>
                </div>
                <div className="section__content-cta">
                  <div className="row align-items-center gaper">
                    <div className="col-12 col-lg-7">
                      <div className="details-group">
                        <h3 className="title-anim">{head1}</h3>
                        <p>
                          {desc1[0]}
                        </p>
                        <p>
                          {desc1[1]}
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-5">
                      <div className="poster-small">
                        <Image src={img1} alt="Image" layout="responsive" width={16} height={12}/>
                      </div>
                    </div>
                  </div>
                  <div className="spacer" style={{ marginTop: "70px" }}></div>
                  <div className="row align-items-center gaper">
                    <div className="col-12 col-lg-5">
                      <div className="poster-small">
                        <Image src={img2} alt="Image" layout="responsive" width={16} height={12}/>
                      </div>
                    </div>

                    <div className="col-12 col-lg-7">
                      <div className="details-group">
                        <h3 className="title-anim">{head2}</h3>
                        <p>
                          {desc2[0]}
                        </p>
                        <p>
                          {desc2[1]}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="spacer" style={{ marginTop: "70px" }}></div>
                  <div className="row align-items-center gaper">
                    <div className="col-12 col-lg-7">
                      <div className="details-group">
                        <h3 className="title-anim">{head3}</h3>
                        <p>
                          {desc3[0]}
                        </p>
                        <p>
                          {desc3[1]}
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-5">
                      <div className="poster-small">
                        <Image src={img4} alt="Image" layout="responsive" width={16} height={12}/>
                      </div>
                    </div>
                  </div>
                  <div className="spacer" style={{ marginTop: "70px" }}></div>
                  <div className="row align-items-center gaper">
                    <div className="col-12 col-lg-5">
                      <div className="poster-small">
                        <Image src={img5} alt="Image" layout="responsive" width={16} height={12}/>
                      </div>
                    </div>

                    <div className="col-12 col-lg-7">
                      <div className="details-group">
                        <h3 className="title-anim">{head4}</h3>
                        <p>
                          {desc4[0]}
                        </p>
                        <p>
                          {desc4[1]}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="spacer" style={{ marginTop: "70px" }}></div>
                  <div className="row align-items-center gaper">
                    <div className="col-12 col-lg-7">
                      <div className="details-group">
                        <h3 className="title-anim">{head5}</h3>
                        <p>
                          {desc5[0]}
                        </p>
                        <p>
                          {desc5[1]}
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-5">
                      <div className="poster-small">
                        <Image src={img3} alt="Image" layout="responsive" width={16} height={12}/>
                      </div>
                    </div>
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

export default ServiceDetailsMain;
