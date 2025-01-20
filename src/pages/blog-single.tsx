import React from "react";
import CommonLayout from "@/components/layout/CommonLayout";
import BlogSingleBanner from "@/components/layout/banner/BlogSingleBanner";
import BlogDetailsMain from "@/components/containers/blog/BlogDetailsMain";

const BlogSingle = () => {
  return (
    <CommonLayout header={2} footer={5} video={0} title={"aaa"} keywords={"abc"} description={"abcd"}>
      <BlogSingleBanner />
      <BlogDetailsMain />
    </CommonLayout>
  );
};

export default BlogSingle;
