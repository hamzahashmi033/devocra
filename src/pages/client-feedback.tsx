import React from "react";
import CommonLayout from "@/components/layout/CommonLayout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ClientFeedbackMain from "@/components/containers/ClientFeedbackMain";

const ClientFeedback = () => {
  return (
    <CommonLayout header={2} footer={5} video={0} title={"aaa"} keywords={"abc"} description={"abcd"}>
      <CmnBanner title="Client's Feedback" navigation="Client's Feedback" />
      <ClientFeedbackMain />
    </CommonLayout>
  );
};

export default ClientFeedback;
