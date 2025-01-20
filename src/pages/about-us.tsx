import React from "react";
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
import CustomLayout from "@/components/layout/CustomLayout";

const AboutUs = () => {
  return (
    <CustomLayout header={2} footer={1} video={0} title="About Us" description={"About Us Page"} keywords={"About Us"}>
      <CmnBanner title="About Us" navigation="About Us" />
      <HomeTwoAward />
      <OurMission />
      <Agency />
      <ServiceMain />
      <HomeTestimonial />
      <HomeTwoSponsor />
      <CtaTwo />
    </CustomLayout>
  );
};

export default AboutUs;
