import React from "react";
import CommonLayout from "@/components/layout/CommonLayout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import FaqMain from "@/components/containers/FaqMain";

const FaqPage = () => {
  return (
    <CommonLayout header={2} footer={5} video={0} title={"aaa"} keywords={"abc"} description={"abcd"}>
      <CmnBanner title="Faq" navigation="Faq" />
      <FaqMain />
    </CommonLayout>
  );
};

export default FaqPage;
