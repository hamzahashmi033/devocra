import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import PortfolioMain from "@/components/containers/PortfolioMain";
import Portfolio from "@/components/containers/home-two/Portfolio";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const OurPortfolio = () => {
  return (
    <Layout header={2} footer={1} video={0}>
      <CmnBanner title="Portfolio Gallery" navigation="Portfolio Gallery" />
      < Portfolio />
      <div className="lines d-none d-lg-flex">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <CtaTwo />
    </Layout>
  );
};

export default OurPortfolio;
