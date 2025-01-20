import React from "react";
import CommonLayout from "@/components/layout/CommonLayout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import BlogMain from "@/components/containers/blog/BlogMain";

const BlogPage = () => {
  return (
    <CommonLayout header={2} footer={1} video={0} title={"abc"} description={"abc"}>
      <CmnBanner title="Blogs" navigation="Blogs" />
      <BlogMain />
    </CommonLayout>
  );
};

export default BlogPage;
