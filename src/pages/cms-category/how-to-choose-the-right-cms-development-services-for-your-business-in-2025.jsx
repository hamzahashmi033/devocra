import BlogDetailCms1 from "@/components/containers/blog/BlogDetailCms1";
import CommonLayout from "@/components/layout/CommonLayout";
import BlogSingleBanner from "@/components/layout/banner/BlogSingleBanner";

const Cms1 = ()=>{
    return(

            <>
              <CommonLayout
                header={2}
                footer={1}
                video={false}
                title={"How to Choose the Right CMS Development Services for Your Business in 2025"}
                description={
                  "Discover how to choose the right CMS development services for your business in 2025. Compare features, benefits, and top providers."
                }
                keywords={"cms development services, custom cms development services, wordpress cms development services, sitecore cms development services, drupal cms development services, cms development services in usa, contentful cms development services, .net cms development services company united states, hubspot cms development services, custom cms development services usa, content management system cms development services"}
                cononical={"https://devocra/cms-category/how-to-choose-the-right-cms-development-services-for-your-business-in-2025"}
              >
                <BlogSingleBanner title={"How to Choose the Right CMS Development Services for Your Business in 2025"} breadcrumb={"How to Choose the Right CMS Development Services for Your Business in 2025"}
                />
                <BlogDetailCms1/>
              </CommonLayout>
            </> 
        
    );
};
export default Cms1