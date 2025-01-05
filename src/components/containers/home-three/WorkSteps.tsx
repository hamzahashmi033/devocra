import React, { useState, useEffect } from "react";
import Image from "next/image";
import YoutubeEmbed from "@/components/youtube/YoutubeEmbed";
import videoframe from "public/images/video-frame.png";

const WorkSteps = () => {
  const [hover, setHover] = useState(1);
  const [videoActive, setVideoActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (typeof window !== "undefined") {
        const deviceWidth = window.innerWidth;

        if (deviceWidth > 576) {
          const workImgItems = document.querySelectorAll<HTMLElement>(
            ".work-steps__single"
          );

          workImgItems.forEach((item) => {
            const contentBox = item.getBoundingClientRect();
            const dx = event.clientX - contentBox.x;
            if (item.children[2] instanceof HTMLElement) {
              item.children[2].style.transform = `translateX(${dx}px)`;
            }
          });
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <section className="section work-steps fade-wrapper">
        <div className="">
          <div className="row">
            <div className="col-12 container">
              <div className="section__header--secondary">
                <div className="row gaper align-items-center">
                  <div className="col-12 col-lg-5 col-xxl-5">
                    <div className="section__header text-center text-lg-start mb-0">
                      <span className="sub-title">
                        working steps
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                      <h2 className="title title-anim">Our Work Process</h2>
                    </div>
                  </div>
                  <div className="col-12 col-lg-7 col-xxl-5 offset-xxl-2">
                    <div className="text-lg-start">
                      <p>
                        The procedure we use in our work is team work, creativity and quality work delivery. To begin with, firstly we analyze your requirements for current and future marketing and sales development. By constantly engaging with each other we present ideas that are groundbreaking and leave a stamp in every project.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="workStepContainer row">
            <div className="col-12 col-sm-6 col-xl-2 ">
              <div
                className={
                  "work-steps__single fade-top" +
                  (hover === 0 ? " work-steps__single-active" : " ")
                }
                onMouseEnter={() => setHover(0)}
              >
                <span>
                  0
                  <br />%
                </span>
                <h5> Idea Capture</h5>
                <div
                  className="work-thumb-hover d-none d-md-block" >
                  <p>By booking a consultation, we make conclusions about the goals you have set, generate ideas, plus filter them into a coherent idea of our cooperation that will meet your expectations.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-2">
              <div
                className={
                  "work-steps__single fade-top work-two" +
                  (hover === 1 ? " work-steps__single-active" : " ")
                }
                onMouseEnter={() => setHover(1)}
              >
                <span>
                  25
                  <br />%
                </span>
                <h5>Plan Creation</h5>
                <div
                  className="work-thumb-hover d-none d-md-block" >
                  <p>Our team maintains clear goals and objectives for a project, which include putting into consideration the activities to be accomplished, the human resources and resources in general to be used, and also the time factor.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-2">
              <div
                className={
                  "work-steps__single fade-top work-three" +
                  (hover === 2 ? " work-steps__single-active" : " ")
                }
                onMouseEnter={() => setHover(2)}
              >
                <span>
                  50
                  <br />%
                </span>
                <h5>Smart Development</h5>
                <div
                  className="work-thumb-hover d-none d-md-block" >
                  <p>The constructed solutions are highly reliable and functional, while the coding and quality control used are accurate and detailed.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-2">
              <div
                className={
                  "work-steps__single fade-top work-four" +
                  (hover === 3 ? " work-steps__single-active" : " ")
                }
                onMouseEnter={() => setHover(3)}
              >
                <span>
                  75
                  <br />%
                </span>
                <h5> Continuous Improvement</h5>
                <div
                  className="work-thumb-hover d-none d-md-block" >
                  <p>We continuously refine the solution approach based on participation results to offer unparalleled results while improving user experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-2">
              <div
                className={
                  "work-steps__single fade-top work-five" +
                  (hover === 4 ? " work-steps__single-active" : " ")
                }
                onMouseEnter={() => setHover(4)}
              >
                <span>
                  100
                  <br />%
                </span>
                <h5>Smooth Deployment</h5>
                <div
                  className="work-thumb-hover d-none d-md-block" >
                  <p>We deliver a successful implementation, the final product becomes fully integrated into your enterprise and is market ready.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

    </>
  );
};

export default WorkSteps;
