import React from "react";
import CommonLayout from "@/components/layout/CommonLayout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import HomeTwoModal from "@/components/containers/home-two/HomeTwoModal";
import Agency from "@/components/containers/home/Agency";
import TeamMembers from "@/components/containers/TeamMembers";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";
import AboutSponsor from "@/components/containers/home-three/AboutSponsor";
import AboutCta from "@/components/containers/home-two/AboutCta";
import CtaTwo from "@/components/containers/service-details/CtaTwo";
import HomeTwoSponsor from "@/components/containers/home-two/HomeTwoSponsor";
import HomeTwoAward from "@/components/containers/home-two/HomeTwoAward";
import OurMission from "@/components/containers/OurMission";
import ServiceMain from "@/components/containers/ServiceMain";
import FaqMain from "@/components/containers/FaqMain";

const AboutUs = () => {
  return (
    <CommonLayout header={2} footer={1} video={0} title={"About Us - Devocra | Learn About Our Mission & Values"} keywords={"Web Development, App Development, Graphic Design, Marketing, DeVops, Software Quality Ensurance, Artificial Intelligence"} description={"Discover Devocra mission, vision, and values. Learn how we deliver innovative solutions to meet your needs. Explore more about us"} cononical={"https://devocra.com/about-us"}>
      <CmnBanner title="About Us" navigation="About Us" />
      <HomeTwoAward />
      <OurMission />
      <Agency />
      <ServiceMain />
      <HomeTestimonial />
      <HomeTwoSponsor />
      <FaqMain/>
      <CtaTwo />
    </CommonLayout>
  );
};

export default AboutUs;
