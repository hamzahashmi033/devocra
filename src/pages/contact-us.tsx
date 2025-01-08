import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ContactMain from "@/components/containers/ContactMain";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const ContactUs = () => {
  return (
    <Layout header={2} footer={1} video={0}>
      <CmnBanner title="Contact Us" navigation="Contact Us" />
      <ContactMain />
      <CtaTwo />
    </Layout>
  );
};

export default ContactUs;
