import BlogDetailApp1 from "@/components/containers/blog/BlogDetailApp1";
import CommonLayout from "@/components/layout/CommonLayout";
import BlogSingleBanner from "@/components/layout/banner/BlogSingleBanner";

const App1 = ()=>{
    return(

            <>
              <CommonLayout
                header={2}
                footer={1}
                video={false}
                title={"Converting an App to React Native"}
                description={
                  "How Does Converting an App to React Native Improve Performance?"
                }
                keywords={"react native, react native app development company, what is react native, react native app development services, react native development services, react native development company, react native mobile app development company, react native mobile app development, react native mobile app, react native mobile app development services, react native mobile app developer, react native mobile app development services company, react native mobile app development agency, top react native mobile app developers, react native mobile app development service, app development, mobile app development, ios app development company, mobile app development company, mobile app development services, mobile app development agency, android app development, android app development agency, app development company, android app development company, app development companies, web app development, web app development services, ios app development, app development agency, iphone app development company, web app development company, app development services, android app development services, app development software"}
                cononical={"https://devocra/app-category/how-does-converting-an-app-to-react-native-improve-performance"}
              >
                <BlogSingleBanner title={"How Does Converting an App to React Native Improve Performance"} breadcrumb={"How Does Converting an App to React Native Improve Performance"}
                />
                <BlogDetailApp1/>
              </CommonLayout>
            </> 
        
    );
};
export default App1