import React from "react";
import CommonLayout from "@/components/layout/CommonLayout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import TeamDetailsMain from "@/components/containers/TeamDetailsMain";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const TeamDetails = () => {
  return (
    <CommonLayout header={2} footer={5} video={0} title={"aaa"} keywords={"abc"} description={"abcd"}>
      <CmnBanner
        title="SANA P. LESH"
        navigation="Team Details"
        parent="Our Teams"
        parentLink="our-teams"
      />
      <TeamDetailsMain />
      <CtaTwo />
    </CommonLayout>
  );
};

export default TeamDetails;
