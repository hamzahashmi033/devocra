import React from "react";
import Image from "next/image";
import Link from "next/link";
import poster from "public/images/news/poster.png";
import groupone from "public/images/news/group-one.png";
import grouptwo from "public/images/news/group-two.png";
import ten from "public/images/news/ten.png";
import eleven from "public/images/news/eleven.png";
import twelve from "public/images/news/twelve.png";
import thirteen from "public/images/news/thirteen.png";
import fourteen from "public/images/news/fourteen.png";

const BlogDetailsMain = () => {
  return (
    <section className="section blog-main blog-details fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-xl-8">
            <div className="blog-details__content">
              <div className="bd-thumb fade-top">
                <Image src={poster} alt="Image" />
              </div>
              <div className="bd-content">
                <div className="bd-meta">
                  <div className="meta__left">
                    <p>
                      <strong>Written by :</strong>
                      Marry biden
                    </p>
                    <span></span>
                    <p>10/01/2023</p>
                  </div>
                </div>
                <div className="bd-content-info">
                  <h4 className="h4">
                    Guide dog shortage: The blind people who train their
                  </h4>
                  <div className="paragraph">
                    <p>
                      Proin ultricies ultricies est vitae cursus. Nulla sit amet
                      suscipit tortor. Maecenas dui erat, ornare eget tristique
                      vitae, rutrum pretium justo. Phasellus vitae consequat
                      nisi, quis luctus nisl. Praesent faucibus sem id massa
                      semper ornare. Nam eu magna at mi pellentesque mattis.
                      Morbi at condimentum velit. Phasellus aliquet, leo auctor
                      volutpat ultrices, metus dolor dictum enim, sed convallis
                      lacus urna nec erat.
                    </p>
                    <p>
                      consectetur adipiscing elit. Etiam at mauris accumsan mi
                      pulvinar lacinia a in justo. Ut tempor et libero quis
                      dignissim. Nulla at convallis libero, vitae aliquam leo.
                      Etiam ut augue nibh. In laoreet neque quis ex ornare, quis
                      auctor elit facilisis. Mauris dapibus massa rhoncus ligula
                      luctus vulputate. Fusce condimentum placerat vulputate.
                      Praesent ullamcorper dui in dui sagittis commodo.
                    </p>
                  </div>
                  <h4 className="h4">Where can I get some?</h4>
                </div>
              </div>
              <div className="bd-group">
                <Image src={groupone} alt="Image" className="fade-top" />
                <Image src={grouptwo} alt="Image" className="fade-top" />
              </div>
              <div className="bd-content ">
                <div className="bd-content__alt">
                  <p>
                    Proin ultricies ultricies est vitae cursus. Nulla sit amet
                    suscipit tortor. Maecenas dui erat, ornare eget tristique
                    vitae, rutrum pretium justo. Phasellus vitae consequat nisi,
                    quis luctus nisl. Praesent faucibus sem id massa semper
                    ornare. Nam eu magna at mi pellentesque mattis. Morbi at
                    condimentum velit. Phasellus aliquet, leo auctor volutpat
                    ultrices, metus dolor dictum enim, sed convallis lacus urna
                    nec erat.
                  </p>
                  <ul>
                    <li>Mauris maximus diam ac imperdiet dictum.</li>
                    <li>
                      Maecenas eget ipsum dapibus, rutrum mi non, ultricies
                      massa.
                    </li>
                    <li>Nam non purus porta risus tincidunt cursus.</li>
                    <li>Quisque blandit lacus vel urna pellentesque mattis.</li>
                    <li>Maecenas vehicula tortor et consectetur faucibus.</li>
                  </ul>
                </div>
              </div>
              <div className="bd-quote">
                <blockquote>
                  <q className="light-title-lg">
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit...
                  </q>
                </blockquote>
              </div>
              <div className="bd-content">
                <div className="bd-content__alt mt-0">
                  <p>
                    Proin ultricies ultricies est vitae cursus. Nulla sit amet
                    suscipit tortor. Maecenas dui erat, ornare eget tristique
                    vitae, rutrum pretium justo. Phasellus vitae consequat nisi,
                    quis luctus nisl. Praesent faucibus sem id massa semper
                    ornare. Nam eu magna at mi pellentesque mattis. Morbi at
                    condimentum velit. Phasellus aliquet, leo auctor volutpat
                    ultrices, metus dolor dictum enim, sed convallis lacus urna
                    nec erat.
                  </p>
                </div>
              </div>
              <div className="bd-tags">
                <div className="tags-left">
                  
                </div>
                <div className="tags-right">
                  <p>Share:</p>
                  <ul className="social">
                    <li>
                      <Link href="/" aria-label="social media">
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/" aria-label="social media">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/" aria-label="social media">
                        <i className="fa-brands fa-youtube"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/" aria-label="social media">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
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
                      <Link href="blog">Web Development</Link>
                    </li>
                    <li>
                      <Link href="blog">App Development</Link>
                    </li>
                    <li>
                      <Link href="blog">DevOps</Link>
                    </li>
                    <li>
                      <Link href="blog">CMS Development</Link>
                    </li>
                    <li>
                      <Link href="blog">Marketing</Link>
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
              <div className="widget">
                <div className="widget__head">
                  <h5 className="h5">Recent Posts</h5>
                </div>
                <div className="widget__latest">
                  <div className="latest-single ">
                    <div className="latest-thumb">
                      <Link href="blog-single">
                        <Image src={ten} alt="Image" />
                      </Link>
                    </div>
                    <div className="latest-content">
                      <p>10/01/2023</p>
                      <p>
                        <Link href="blog-single">
                          Guide dog shortage: The blind peo ple who train their
                          own guide
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="latest-single ">
                    <div className="latest-thumb">
                      <Link href="blog-single">
                        <Image src={eleven} alt="Image" />
                      </Link>
                    </div>
                    <div className="latest-content">
                      <p>10/01/2023</p>
                      <p>
                        <Link href="blog-single">
                          Guide dog shortage: The blind peo ple who train their
                          own guide
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="latest-single ">
                    <div className="latest-thumb">
                      <Link href="blog-single">
                        <Image src={twelve} alt="Image" />
                      </Link>
                    </div>
                    <div className="latest-content">
                      <p>10/01/2023</p>
                      <p>
                        <Link href="blog-single">
                          Guide dog shortage: The blind peo ple who train their
                          own guide
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="latest-single ">
                    <div className="latest-thumb">
                      <Link href="blog-single">
                        <Image src={thirteen} alt="Image" />
                      </Link>
                    </div>
                    <div className="latest-content">
                      <p>10/01/2023</p>
                      <p>
                        <Link href="blog-single">
                          Guide dog shortage: The blind peo ple who train their
                          own guide
                        </Link>
                      </p>
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

export default BlogDetailsMain;
