import React from "react";
import Layout from "@/components/layout/Layout";
import HomeOneBanner from "@/components/layout/banner/HomeOneBanner";
import Agency from "@/components/containers/home/Agency";
import PortfolioText from "@/components/containers/home/PortfolioText";
import HomeOffer from "@/components/containers/home/HomeOffer";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";

import HomeThreeBanner from "@/components/layout/banner/HomeThreeBanner";
import HomeTwoSponsor from "@/components/containers/home-two/HomeTwoSponsor";
import HomeTwoPortfolio from "@/components/containers/home-two/HomeTwoPortfolio";
import HomeTwoBlog from "@/components/containers/home-two/HomeTwoBlog";
import Technologies from "@/components/containers/technologies/Technologies"
import AboutCta from "@/components/containers/home-two/AboutCta";
import CtaTwo from "@/components/containers/service-details/CtaTwo";
import WorkSteps from "@/components/containers/home-three/WorkSteps";

const Home = () => {
  return (
    <Layout header={2} footer={1} video={false}>
      <HomeThreeBanner />
      <HomeTwoSponsor />
      <HomeOffer />
      <Agency />
      <WorkSteps />
      <HomeTwoPortfolio />
      <HomeTestimonial />
      <Technologies />
      <HomeTwoBlog />
      <CtaTwo />
    </Layout>
  );
};

export default Home;
