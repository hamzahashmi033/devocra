import React from "react";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ServiceMain from "@/components/containers/ServiceMain";
import HomeTwoModal from "@/components/containers/home-two/HomeTwoModal";
import UxProcessTwo from "@/components/containers/service-details/UxProcessTwo";
import HomeTestimonialThree from "@/components/containers/home-three/HomeTestimonialThree";
import CtaTwo from "@/components/containers/service-details/CtaTwo";
import FaqMain from "@/components/containers/FaqMain";
import CustomLayout from "@/components/layout/CustomLayout";

const OurServices = () => {
  return (
    <CustomLayout header={2} footer={1} video={0} title={"Our Services"} description={"Our Services Description"} keywords={"Our Services Keyword"}>
      <CmnBanner title="Our Services" navigation="Our Services" />
      <ServiceMain />
      <UxProcessTwo />
      <FaqMain />
      <HomeTestimonialThree />
      <CtaTwo />
    </CustomLayout>
  );
};

export default OurServices;
