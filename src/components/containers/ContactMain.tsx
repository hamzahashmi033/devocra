import React from "react";
import Image from "next/image";
import Link from "next/link";
import phone from "public/images/phone.png";
import mail from "public/images/mail.png";
import location from "public/images/location.png";
import time from "public/images/time.png";

const ContactMain = () => {
  return (
    <section className="section contact-m fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={phone} alt="Image" />
              </div>
              <div className="content">
                <h3>Phone & Fax</h3>
                <p>
                  <Link href="tel:197-90-56-780">US : +1 281-297-8909</Link>
                </p>
                <p>
                  <Link href="tel:197-90-56-780">PK : +9231-8096486</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={mail} alt="Image" />
              </div>
              <div className="content">
                <h3>Mail Address</h3>
                <p>
                  <Link href="mailto:info@devocra.com">
                    info@devocra.com
                  </Link>
                  <Link href="mailto:collaborate@devocra.com">
                    collaborate@devocra.com
                  </Link>
                </p>

              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={location} alt="Image" />
              </div>
              <div className="content">
                <h3>Our Location</h3>
                <p>
                  <Link
                    href="https://www.google.com/maps/d/u/0/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=29.87350785608051%2C-95.70397795138499&z=20#"
                    target="_blank"
                  >
                    6519 Greenhouse Rd, <br></br>
                    Katy, 77449, TX, US
                  </Link>
                </p>
                <p>
                  <Link
                    href="https://www.google.com/maps/d/u/0/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&hl=en_US&ll=24.86274088931823%2C67.06774635000001&z=15#"
                    target="_blank"
                  >
                    Block 6 P.E.C.H.S., Karachi, Sindh, Pakistan
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={time} alt="Image" />
              </div>
              <div className="content">
                <h3>Office Hour</h3>
                <p>24/7 Hours Operational</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="map-wrapper">
              <div className="row gaper">
                <div className="col-12 col-lg-6">
                  {/* <div className="contact__map fade-top">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20342.411046372905!2d-74.16638039276373!3d40.719832743885284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1649562691355!5m2!1sen!2sbd"
                      width="100"
                      height="800"
                      style={{ border: "0px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div> */}
                </div>
                <div className="col-12 col-lg-12">
                  <div className="contact-main__form  fade-top">
                    <h3>Leave A Message</h3>
                    <form
                      action="#"
                      method="post"
                      className="section__content-cta"
                    >
                      <div className="group-wrapper">
                        <div className="group-input ">
                          <input
                            type="text"
                            name="contact-name"
                            id="contactName"
                            placeholder="Name"
                          />
                        </div>
                        <div className="group-input ">
                          <input
                            type="email"
                            name="contact-email"
                            id="contactEmail"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="group-input drt">
                        <select className="subject">
                          <option data-display="Subject">Service</option>
                          <option value="1">Web Development</option>
                          <option value="2">App Development</option>
                          <option value="3">CMS Development</option>
                          <option value="4">Marketing</option>
                          <option value="4">Graphic Design</option>
                          <option value="4">Video Animation</option>
                          <option value="4">DevOps</option>
                        </select>
                      </div>
                      <div className="group-input ">
                        <textarea
                          name="contact-message"
                          id="contactMessage"
                          placeholder="Message"
                        ></textarea>
                      </div>
                      <div className="form-cta justify-content-start">
                        <button type="submit" className="btn btn--primary">
                          Send Message
                        </button>
                      </div>
                    </form>
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

export default ContactMain;
