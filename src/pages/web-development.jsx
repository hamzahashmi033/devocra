import React from "react";
import ServiceDetailsMain from "@/components/containers/service-details/ServiceDetailsMain";
import ServiceDetailsBanner from "@/components/layout/banner/ServiceDetailsBanner";
import UxProcess from "@/components/containers/service-details/UxProcess";
import CtaTwo from "@/components/containers/service-details/CtaTwo";
import CustomLayout from "@/components/layout/CustomLayout";
const mainDesc = [
    'At Devocra, we design and develop effective, fast, and easy-to-navigate websites that cater to your company’s specific needs. We deliver web development solutions that are technology-driven, distinctive in design, and user-friendly for success. Whether you need front-end development, back-end integration, or a full-blown corporate website, look no further.', 'Our professional team guarantees that every website to be based on an individual project is adapted to its operations’ efficiency as well as to the identification of potential visitors’ needs. Designing visually appealing solutions and implementing advanced technologies are our goals to provide you with more than expected solutions. Providing emphasis to the needs of user experience responsiveness and interactions, we guarantee you a perfect interface across different platforms.',
];
const desc1 = [
    "Front-end is defined as the part of the client application that is visible and accessible to the users and which is integrated with the website under construction. In Devocra, our front-end development team tends to develop effective, user friendly and eye appealing design and development solution for the website.", "With the latest tools such as HTML5, CSS3, JavaScript, and new frameworks including the React, Vue.js, Angular, we make your website dynamic, fast, and touch-friendly. This way we guarantee a perfect usability, high level of performance and visually pleasing experience on all devices available."
]
const desc2 = [
    "The back-end therefore can be regarded as the wheel house of any strong website since it is instrumental in the running of every face value functionality. At Devocra, we develop efficient, robust and fast backend solutions to make your website run like a charm.", "While working with our programmers, you will get a unique back-end based on Node.js, PHP, Ruby on Rails, and Python integrated into your front-end. If you require a database solution, membership system, or data processing, our back end development meets your website required functionality and security level."
]
const desc3 = [
    "Website design or layout can actually be seen not just as graphic design but as a part of branding. The creative team of Devocra will take your ideas and ensure to design an appealing and interactive site layout that represents your company’s personality.", "Our focus and effort for our clients go towards fully functional and elegantly designed websites. From simple diagrams to the hi-fidelity prototypes, we guarantee that your website will distinguish itself of being a one that users could easily remember. And our designs adapt to fit any handheld device to ensure your brand looks great on any screen size."
]
const desc4 = [
    "At Devocra, we also know that every glitch is disastrous to users and it’s detrimental to the brand reputation you have built. That is why our web site maintenance solutions are implemented in such a way that will help keep your website full of life, secure and up to date.", "Included topics are broken links, performance bugs, compatibility issues, and many others. Our staff is committed to provide timely analysis and problem solving with least interruption and with utmost effectiveness. Devocra proposes full-fledged maintenance services, this means that your website will remain as efficient to use for users as it is now – ensuring your company’s reputation online."
]
const desc5 = [
    "On the other hand, for businesses that need the creation of intricate, large Web portals, they can contract with Devocra for enterprise Web development services. Our team focuses on the development of performance-oriented Internet Solutions for Enterprises with complex requirements.", "We prefer to create and deploy unique solutions that fit your needs best and enable handling of significantly large traffics, complicated data processing and integration with various in-house systems. Including B2B e-commercial websites, CMS and CRMs, we develop cost-effective solutions that stand the test of time and customer’s traffic growth."
]
const WebDevelopment = () => {
    return (
        <CustomLayout header={2} footer={1} video={false} title={"Web Development"} description={"Web Development Description"} keywords={"Web Development Keyword"}>
            <ServiceDetailsBanner title={"Web App Development"} breadcrumb={"Web Development"} />
            <ServiceDetailsMain mainHead={"Web Development Services at Devocra"} mainDesc={mainDesc} head1={"Front-End Development"} desc1={desc1}
                head2={"Back-End Development"} desc2={desc2}
                head3={"Website Design"} desc3={desc3}
                head4={"Website Maintainance"} desc4={desc4}
                head5={"Enterprise-Level Websites"} desc5={desc5}
                img1={"/images/webdevelopment/1.png"}
                img2={"/images/webdevelopment/3.svg"}
                img3={"/images/webdevelopment/3.svg"}
                img4={"/images/webdevelopment/4.svg"}
                img5={"/images/webdevelopment/5.svg"}
            />
            <UxProcess />
            <CtaTwo />
        </CustomLayout>
    )
}
export default WebDevelopment