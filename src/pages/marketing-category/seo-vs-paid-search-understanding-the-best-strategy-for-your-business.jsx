import BlogDetailMarketing1 from "@/components/containers/blog/BlogDetailMarketing1";
import CommonLayout from "@/components/layout/CommonLayout";
import BlogSingleBanner from "@/components/layout/banner/BlogSingleBanner";

const Marketing1 = ()=>{
    return(

            <>
              <CommonLayout
                header={2}
                footer={1}
                video={false}
                title={"SEO vs Paid Search"}
                description={
                  "SEO vs Paid Search Understanding the Best Strategy for Your Business."
                }
                keywords={"digital marketing, Marketing, social media marketing, digital marketing agency, email marketing, content marketing, marketing agency, digital marketing company, digital marketing services, digital marketing consultant, digital marketing agency near me, best digital marketing agency,"}
                cononical={"https://devocra/marketing-category/seo-vs-paid-search-understanding-the-best-strategy-for-your-business"}
              >
                <BlogSingleBanner title={"SEO vs Paid Search Understanding the Best Strategy for Your Business"} breadcrumb={"SEO vs Paid Search Understanding the Best Strategy for Your Business"}
                />
                <BlogDetailMarketing1/>
              </CommonLayout>
            </> 
        
    );
};
export default Marketing1
