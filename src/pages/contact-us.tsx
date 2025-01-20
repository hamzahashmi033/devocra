import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ContactMain from "@/components/containers/ContactMain";
import CtaTwo from "@/components/containers/service-details/CtaTwo";
import CustomLayout from "@/components/layout/CustomLayout";

const ContactUs = () => {
  return (
    <CustomLayout header={2} footer={1} video={0} title={"Contact Us"} description={"Contact Us Description"} keywords={"Contact Us Keyword"}>
      <CmnBanner title="Contact Us" navigation="Contact Us" />
      <ContactMain />
      <CtaTwo />
    </CustomLayout>
  );
};

export default ContactUs;
