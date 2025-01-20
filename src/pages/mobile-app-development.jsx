import React from "react";
import Layout from "@/components/layout/Layout";
import ServiceDetailsMain from "@/components/containers/service-details/ServiceDetailsMain";
import ServiceDetailsBanner from "@/components/layout/banner/ServiceDetailsBanner";
import UxProcess from "@/components/containers/service-details/UxProcess";
import CtaTwo from "@/components/containers/service-details/CtaTwo";
import CustomLayout from "@/components/layout/CustomLayout";

const mainDesc = [
    'Devocra powered ideas present your vision with state of the art mobile application development services adapted to your specific requirements. Mobile applications are critical in the current world than ever before especially for any company that intends to grow in size and functionality amid the rapidly advancing technological division. Whether it’s your first app or you are an existing company or a large corporation the team at Scompass is ready to design and deliver efficient and effective mobile apps that will create success for you.', 'At Devocra, we support our clients to transform vision into reality with such application that are not only commercial oriented but also,user friendly. Critical Features Our proficient team of app developers uses creativity integrated with advanced technology and innovation to timely deliver mobile applications that are not only scalable but are allied with security and are easily collapsible into your current systems. What you need – whether it is a consumer-driven application or an enterprise-grade tool – is an effective combination of strategies, designs, products, architectures, layouts, and overall stickiness that we provide from the ground up to the alpha and beta Testing. Rather than delay, lets assist you in being one up with unique apps that shapes your brand while driving value to the business.',
];
const desc1 = [
    "Native apps are always characterized by high performance, proper work of all the functions, and rather pleasant appearance of the interface. At Devocra, we offer expert services in native application development for both android and iOS using strong technologies such as kotlin, swift, and Java. Each of these apps is built for each platform and is faster, more efficient and more reliable than the other.", "Native app solutions from Appyecto are perfect for any business relying on good app performance and requiring apps for individual operating platforms or devices. How your app looks, feels, functions, and performs – from ideas to materialization, our team delivers what you envision while providing users with excellent experience."
]
const desc2 = [
    "If you are aiming at the development of a cheap solution but also want to have the benefits of both types of hybrid applications should be considered. Our team develops native, cross-platform applications using the most-widely used open source frameworks including React Native, Flutter and IONIC resulting in the development of hybrid applications that support both the operating systems of the Android and the iOS devices.", "Hybrid apps are known to minimize development time but still possess efficient and decent user interface design. It is suitable for startup projects or companies that desire to reach the public with one code base. Through our services at Devocra, we make your hybrid app speedy, maintainable and good looking for the competitive advantage you would wish."
]
const desc3 = [
    "The so called backend services and functions are of paramount importance of the mobile application. Since woking at Devocra we use Firebase and Supabase to build applications that are reliable, secure, and easily scalable. Firebase facilitates real-time database and cloud operations, analytical features having interactive and dynamic updates, which is the reason why apps which involve a lot of interaction and updates prefer this service.", "Likewise, there is an open-source backend known as Supabase that is as flexible, secure, and dependable as any other. If your project requires authentication, real-time manipulation, or database connection, our experience with these tools guarantees the creation of an efficient application with additional features to meet your expectations."
]
const desc4 = [
    "This doesn’t end with the development of the app at Devocra. Our maintenance services for your mobile application will help you guarantee that your app stays protected, operative and compliant to current innovations.", "Whether you’ve encountered a small issue with your program, like a bug, or you want to increase the speed at which your system works, or you have in mind a new idea or an addition to your software, we have what it takes to assist you. Maintenance makes sure you keep users involved, reduce as much time as possible that your application is offline, and remain competitive in a constantly changing world. When you choose Devocra, your app will always run smoothly and meet customers’ expectations."
]
const desc5 = [
    "Choosing the right platform for the deployment of your app is an important stage, and we simplify the process for you. To make the submission process easier, we manage it throughout for Google Play Store and Apple App Store while also considering all the requirements and guidelines for each platform.", "Listing & Tags: On this front, we offer help with app listing, metadata optimization and adherence to the current standard. Our experience lets you begin your app release with the right foot forward and stand out in a saturated marketplace."
]

const MobileAppDevelopment = () => {
    return (
        <CustomLayout header={2} footer={1} video={false} title={"App Development"} description={"App Development Description"} keywords={"App Development Keyword"}>
            <ServiceDetailsBanner title={"Mobile App Development"} breadcrumb={"App Development"} />
            <ServiceDetailsMain mainHead={"Mobile App Development Services at Devocra"} mainDesc={mainDesc} head1={"Native App Development"} desc1={desc1}
                head2={"Hybrid App Development"} desc2={desc2}
                head3={"App Development with Firebase and Supabase"} desc3={desc3}
                head4={"App Maintainance"} desc4={desc4}
                head5={"App Deployment on Play Store and App Store"} desc5={desc5}
                img1={"/images/mobiledevelopment/2.svg"}
                img2={"/images/mobiledevelopment/5.svg"}
                img3={"/images/mobiledevelopment/3.svg"}
                img4={"/images/mobiledevelopment/6.svg"}
                img5={"/images/mobiledevelopment/1.svg"}
            />
            <UxProcess />
            <CtaTwo />
        </CustomLayout>
    )

}
export default MobileAppDevelopment