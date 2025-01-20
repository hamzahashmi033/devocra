import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import BlogMain from "@/components/containers/blog/BlogMain";
import CustomLayout from "@/components/layout/CustomLayout";

const BlogPage = () => {
  return (
    <CustomLayout header={2} footer={1} video={0} title={"Blog"} description={"Blog Description"} keywords={"Blog Keyword"}>
      <CmnBanner title="Blogs" navigation="Blogs" />
      <BlogMain />
    </CustomLayout>
  );
};

export default BlogPage;
