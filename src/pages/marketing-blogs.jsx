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
        "seo vs paid search, ppc and seo marketing, paid search vs organic search, organic seo vs paid seo, paid social vs paid search, seo vs paid ads, organic seo vs pay per click, difference between organic and paid search, difference between organic and paid search results, difference between organic search and paid search, difference between paid search and organic search, difference between paid search and seo, difference between seo and paid or ppc keywords, how does paid search compare to search engine optimization, how does paid search compare to search engine optimization seo, is seo paid or organic, natural search vs organic search, natural search vs paid search, organic and paid search, organic and paid search results, organic keywords vs paid keywords, organic paid search, organic search and paid search, organic search paid search, organic search results vs paid, organic search vs paid search statistics, organic search vs ppc, organic seo vs ppc, organic versus paid search, organic vs paid keywords, organic vs paid search, organic vs paid search statistics, organic vs paid seo, organic vs ppc, paid and organic search strategy, paid search cannibalizing organic search, paid search vs paid social, paid seo vs organic seo, pay per click vs seo, ppc vs paid search, ppc vs paid social, search engine optimization vs pay per click, seo or paid ads, seo organic vs paid, seo paid vs organic, seo vs organic search, seo vs paid advertising, seo vs paid traffic, seo vs ppc statistics, what is the difference between organic search and paid search"
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
