import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import TechnologyItem from "./TechnologyItem.jsx"
import "swiper/swiper-bundle.css";
import { useState } from "react";
const Technologies = () => {
    const [technologies, setTechnologies] = useState('mobile_apps')
    return (
        <>
            <section className="section portfolio portfolio-two portfolio-filter fade-wrapper" >
                <div className="portfolio__text-slider-w">
                    <Swiper
                        slidesPerView="auto"
                        spaceBetween={40}
                        speed={5000}
                        loop={true}
                        centeredSlides={true}
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 1,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                            reverseDirection: false,
                        }}
                        className="portfolio__text-slider"
                    >
                        <SwiperSlide>
                            <div className="portfolio__text-slider-single">
                                <h2 className="h1">
                                    <Link href="portfolio">
                                        devocra Technologies
                                        <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                                    </Link>
                                </h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="portfolio__text-slider-single">
                                <h2 className="h1 str">
                                    <Link href="portfolio">
                                        devocra Technologies
                                        <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                                    </Link>
                                </h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="portfolio__text-slider-single">
                                <h2 className="h1">
                                    <Link href="portfolio">
                                        devocra Technologies
                                        <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                                    </Link>
                                </h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="portfolio__text-slider-single">
                                <h2 className="h1 str">
                                    <Link href="portfolio">
                                        devocra Technologies
                                        <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                                    </Link>
                                </h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="portfolio__text-slider-single">
                                <h2 className="h1">
                                    <Link href="portfolio">
                                        devocra Technologies
                                        <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                                    </Link>
                                </h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="portfolio__text-slider-single">
                                <h2 className="h1 str">
                                    <Link href="portfolio">
                                        devocra Technologies
                                        <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                                    </Link>
                                </h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="portfolio__text-slider-single">
                                <h2 className="h1">
                                    <Link href="portfolio">
                                        devocra Technologies
                                        <i className="fa-sharp fa-solid fa-arrow-down-right"></i>
                                    </Link>
                                </h2>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <div className="technologies">
                <p>Hire from our pool of 350+ specialized experts in web, mobile, and software engineering, specializing in the latest technologies and frameworks, ready to scale your development teams effortlessly.</p>
                <div className="technologiesContainer">
                    <div className="child1">
                        <ul>
                            <li className={`${technologies === "mobile_apps" ? "techActive" : ""} `} onClick={() => setTechnologies("mobile_apps")}>Mobile Apps</li>
                            <li className={`${technologies === "web_platforms" ? "techActive" : ""} `} onClick={() => setTechnologies("web_platforms")}>Web Platform</li>
                            <li className={`${technologies === "cross_platform" ? "techActive" : ""} `} onClick={() => setTechnologies("cross_platform")}>Cross Platform</li>
                            <li className={`${technologies === "database" ? "techActive" : ""} `} onClick={() => setTechnologies("database")}>Database</li>
                            <li className={`${technologies === "cloud_devops" ? "techActive" : ""} `} onClick={() => setTechnologies("cloud_devops")}>Cloud & Devops</li>
                        </ul>
                    </div>
                    <div className="child2">
                        {technologies === "mobile_apps" && (
                            <>

                                <h2 className="techName">IOS</h2>
                                <div className="tech">
                                    <TechnologyItem title={"Swift"} img={"/images/technologies/swift.svg"} />
                                    <TechnologyItem title={"UI Kit"} img={"/images/technologies/uiKit.svg"} />
                                    <TechnologyItem title={"RxSwift"} img={"/images/technologies/rxSwift.svg"} />
                                    <TechnologyItem title={"Combine"} img={"/images/technologies/combine.svg"} />
                                    <TechnologyItem title={"MVVM"} img={"/images/technologies/MVVM.svg"} />
                                    <TechnologyItem title={"Alomofire"} img={"/images/technologies/alomofire.svg"} />
                                    <TechnologyItem title={"Core Data"} img={"/images/technologies/coreData.svg"} />
                                </div>
                                <h2 className="techName">Android</h2>
                                <div className="tech">
                                    <TechnologyItem title={"Kotlin"} img={"/images/technologies/kotlin.svg"} />
                                    <TechnologyItem title={"MVVM"} img={"/images/technologies/MVVM.svg"} />

                                    <TechnologyItem title={"RxJava"} img={"/images/technologies/rxJava.svg"} />
                                    <TechnologyItem title={"Java"} img={"/images/technologies/rxJava.svg"} />
                                    <TechnologyItem title={"Retrofit"} img={"/images/technologies/retrofit.svg"} />
                                    <TechnologyItem title={"Jetpack"} img={"/images/technologies/jetpack.svg"} />
                                </div>
                            </>
                        )}
                        {technologies === "web_platforms" && (
                            <>

                                <h2 className="techName">Frontend</h2>
                                <div className="tech">
                                    <TechnologyItem title={"React Js"} img={"/images/technologies/react.svg"} />
                                    <TechnologyItem title={"Next Js"} img={"/images/technologies/next.svg"} />
                                    <TechnologyItem title={"Angular"} img={"/images/technologies/angular.svg"} />
                                    <TechnologyItem title={"Vue"} img={"/images/technologies/vue.svg"} />
                                    <TechnologyItem title={"TypeScript"} img={"/images/technologies/typescript.svg"} />
                                    <TechnologyItem title={"HTML5"} img={"/images/technologies/html.svg"} />
                                    <TechnologyItem title={"CSS"} img={"/images/technologies/css.svg"} />
                                    <TechnologyItem title={"JavaScript"} img={"/images/technologies/javascript.svg"} />
                                    <TechnologyItem title={"GraphQL"} img={"/images/technologies/graphQL.svg"} />
                                    <TechnologyItem title={"Apollo"} img={"/images/technologies/apollo.svg"} />
                                    <TechnologyItem title={"Material UI"} img={"/images/technologies/materialUI.svg"} />
                                    <TechnologyItem title={"Rest API"} img={"/images/technologies/restAPI.svg"} />
                                </div>
                                <h2 className="techName">Backend</h2>
                                <div className="tech">
                                    <TechnologyItem title={"Node Js"} img={"/images/technologies/nodeJS.svg"} />
                                    <TechnologyItem title={"Python"} img={"/images/technologies/python.svg"} />

                                    <TechnologyItem title={"Scala"} img={"/images/technologies/scala.svg"} />
                                    <TechnologyItem title={"Php"} img={"/images/technologies/php.svg"} />
                                    <TechnologyItem title={"Java"} img={"/images/technologies/rxJava.svg"} />
                                    <TechnologyItem title={"Spring"} img={"/images/technologies/spring.svg"} />
                                    <TechnologyItem title={".Net"} img={"/images/technologies/net.svg"} />
                                    <TechnologyItem title={"Laravel"} img={"/images/technologies/laravel.svg"} />
                                </div>
                                <h2 className="techName">CMS</h2>
                                <div className="tech">
                                    <TechnologyItem title={"Wordpress"} img={"/images/technologies/wordpress.svg"} />
                                    <TechnologyItem title={"Magento"} img={"/images/technologies/magento.svg"} />

                                    <TechnologyItem title={"Shopify"} img={"/images/technologies/shopify.svg"} />
                                    <TechnologyItem title={"Contentful"} img={"/images/technologies/Contentful.svg"} />

                                </div>
                            </>
                        )}
                        {technologies === "cross_platform" && (
                            <>

                                <h2 className="techName">React Native</h2>
                                <div className="tech">
                                    <TechnologyItem title={"Redux"} img={"/images/technologies/redux.svg"} />
                                    <TechnologyItem title={"Mobx"} img={"/images/technologies/mobx.svg"} />
                                    <TechnologyItem title={"RxJS"} img={"/images/technologies/rxSwift.svg"} />
                                    <TechnologyItem title={"Redux Thunk"} img={"/images/technologies/redux.svg"} />

                                </div>
                                <h2 className="techName">Flutter</h2>
                                <div className="tech">
                                    <TechnologyItem title={"Bloc"} img={"/images/technologies/bloc.svg"} />
                                    <TechnologyItem title={"Dart"} img={"/images/technologies/dart.svg"} />

                                    <TechnologyItem title={"MVVM"} img={"/images/technologies/MVVM.svg"} />
                                    <TechnologyItem title={"Rx Dart"} img={"/images/technologies/rxSwift.svg"} />

                                </div>

                            </>
                        )}
                        {technologies === "database" && (
                            <>

                                <h2 className="techName">Database</h2>
                                <div className="tech">
                                    <TechnologyItem title={"MongoDB"} img={"/images/technologies/mongodb.svg"} />
                                    <TechnologyItem title={"MySQL"} img={"/images/technologies/mysql.svg"} />
                                    <TechnologyItem title={"MySQL"} img={"/images/technologies/mysql2.svg"} />
                                    <TechnologyItem title={"DynamoDB"} img={"/images/technologies/dynamodb.svg"} />
                                    <TechnologyItem title={"PostgreSQL"} img={"/images/technologies/postgress.svg"} />
                                    <TechnologyItem title={"IBM"} img={"/images/technologies/ibm.svg"} />
                                    <TechnologyItem title={"Redis"} img={"/images/technologies/redis.svg"} />
                                    <TechnologyItem title={"Elastic Search"} img={"/images/technologies/elasticsearch.svg"} />

                                </div>

                            </>
                        )}
                        {technologies === "cloud_devops" && (
                            <>

                                <h2 className="techName">DevOps</h2>
                                <div className="tech">
                                    <TechnologyItem title={"Nginx"} img={"/images/technologies/nginx.svg"} />
                                    <TechnologyItem title={"Docker"} img={"/images/technologies/docker.svg"} />
                                    <TechnologyItem title={"Kubernetes"} img={"/images/technologies/kubernetes.svg"} />
                                    <TechnologyItem title={"Gradle"} img={"/images/technologies/gradle.svg"} />
                                    <TechnologyItem title={"Jenkins"} img={"/images/technologies/jenkins.svg"} />


                                </div>
                                <h2 className="techName">Cloud</h2>
                                <div className="tech">
                                    <TechnologyItem title={"AWS"} img={"/images/technologies/aws.svg"} />
                                    <TechnologyItem title={"Appium"} img={"/images/technologies/Appium.svg"} />
                                    <TechnologyItem title={"Azure"} img={"/images/technologies/azure.svg"} />
                                    <TechnologyItem title={"Rackspace"} img={"/images/technologies/rackspace.svg"} />
                                    <TechnologyItem title={"Linode"} img={"/images/technologies/linode.svg"} />
                                    <TechnologyItem title={"Firebase"} img={"/images/technologies/firebase.svg"} />
                                    <TechnologyItem title={"Oracle Cloud"} img={"/images/technologies/oracle.svg"} />
                                    <TechnologyItem title={"Heroku"} img={"/images/technologies/heroku.svg"} />


                                </div>

                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className="lines d-none d-lg-flex">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </>

    )
}
export default Technologies;