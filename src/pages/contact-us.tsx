import React from "react";
import CommonLayout from "@/components/layout/CommonLayout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ContactMain from "@/components/containers/ContactMain";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const ContactUs = () => {
  return (
    <CommonLayout header={2} footer={1} video={0} title={"aaa"} keywords={"abc"} description={"abcd"}>
      <CmnBanner title="Contact Us" navigation="Contact Us" />
      <ContactMain />
      <CtaTwo />
    </CommonLayout>
  );
};

export default ContactUs;
