import React from "react";
import CommonLayout from "@/components/layout/CommonLayout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ProjectDetailsMain from "@/components/containers/project/ProjectDetailsMain";
import UxProcess from "@/components/containers/service-details/UxProcess";

const ProjectDetails = () => {
  return (
    <CommonLayout header={2} footer={5} video={0} title={"aaa"} keywords={"abc"} description={"abcd"}>
      <CmnBanner
        title="Brand Identity"
        navigation="Brand Identity"
        parent="Projects"
        parentLink="our-projects"
      />
      <ProjectDetailsMain />
      <UxProcess />
    </CommonLayout>
  );
};

export default ProjectDetails;
