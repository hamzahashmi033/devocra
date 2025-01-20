import React from "react";
import CommonLayout from "@/components/layout/CommonLayout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ErrorMain from "@/components/containers/ErrorMain";

const ErrorPage = () => {
  return (
    <CommonLayout header={2} footer={5} video={0} title={"aaa"} keywords={"abc"} description={"abcd"}>
      <CmnBanner title="Error" navigation="Error" />
      <ErrorMain />
    </CommonLayout>
  );
};

export default ErrorPage;
