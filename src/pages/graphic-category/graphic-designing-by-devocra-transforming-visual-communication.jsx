import BlogDetailGraphic1 from "@/components/containers/blog/BlogDetailGraphic1";
import CommonLayout from "@/components/layout/CommonLayout";
import BlogSingleBanner from "@/components/layout/banner/BlogSingleBanner";

const Graphic1 = ()=>{
    return(

            <>
              <CommonLayout
                header={2}
                footer={1}
                video={false}
                title={"How to Elevate Your Visual Communication Skills with Graphic Design"}
                description={
                  "Enhance your visual communication with expert graphic design services by Devocra. Logos, branding, motion graphics & more. Get started today!"
                }
                keywords={"graphic design service, unlimited graphic design service, best unlimited graphic design service, graphic design service provider, monthly graphic design service, professional graphic design service, motion graphic design service, graphic design service singapore, graphic design service london, best graphic design service, online graphic design service, best monthly graphic design service, graphic design service near me, flat rate graphic design service, pittsburgh graphic design service, white label graphic design service, graphic design service packages, graphic design service list"}
                cononical={"https://devocra/graphic-category/graphic-designing-by-devocra-transforming-visual-communication"}
              >
                <BlogSingleBanner title={"Graphic Designing by Devocra Transforming Visual Communication"} breadcrumb={"Graphic Designing by Devocra Transforming Visual Communication"}
                />
                <BlogDetailGraphic1/>
              </CommonLayout>
            </> 
        
    );
};
export default Graphic1