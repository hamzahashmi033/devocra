import React from "react";
import CommonLayout from "@/components/layout/CommonLayout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import BlogMainMarketing from "@/components/containers/blog/BlogMainMarketing";

const MarketingBlogs = () => {
  return (
    <CommonLayout
      header={2}
      footer={1}
      video={0}
      title={"Marketing Insights, Tips, and Best Practices | Devocra"}
      description={
        "Discover the latest marketing trends, strategies, and tools to grow your brand. Stay ahead with expert insights on social media, content marketing, advertising, and audience engagement to drive business success."
      }
      keywords={
        "digital marketing, Marketing, social media marketing, digital marketing agency, email marketing, content marketing, marketing agency, digital marketing company, digital marketing services, digital marketing consultant, digital marketing agency near me, best digital marketing agency,"
      }
      cononical={"https://devocra.com/marketing-blogs"}
    >
      <CmnBanner
        title="Marketing Blogs"
        navigation="Marketing Blogs"
        parent={"Blogs"}
        parentLink={"/blog"}
      />
      <BlogMainMarketing />
    </CommonLayout>
  );
};

export default MarketingBlogs;
