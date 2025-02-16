import React from "react";
import CommonLayout from "@/components/layout/CommonLayout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import BlogMain from "@/components/containers/blog/BlogMain";

const BlogPage = () => {
  return (
    <CommonLayout
      header={2}
      footer={1}
      video={0}
      title={"Blog Posts | Devocra - Software & Creative Agency"}
      description={
        "Explore insightful articles on technology, design, and innovation at Devocra. Stay updated with expert insights, industry trends, and creative solutions from our software and creative agency."
      }
      cononical={"https://devocra.com/blog"}
    >
      <CmnBanner title="Blogs" navigation="Blogs" />
      <BlogMain />
    </CommonLayout>
  );
};

export default BlogPage;
