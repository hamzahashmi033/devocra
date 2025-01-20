import React from "react";
import CommonLayout from "@/components/layout/CommonLayout";
import ServiceDetailsMain from "@/components/containers/service-details/ServiceDetailsMain";
import ServiceDetailsBanner from "@/components/layout/banner/ServiceDetailsBanner";
import UxProcess from "@/components/containers/service-details/UxProcess";
import CtaTwo from "@/components/containers/service-details/CtaTwo";
const mainDesc = [
    'At Devocra, we always turn your concepts into professional visualization that disseminates your brand’s message in the best and unique way possible. When it comes to our graphic design solutions, our goal is to help your business grow and become memorable within your market sector. We have designers who provide cutting edge designs regardless of whether the client is a start up or a known trademark hence we fully understand the need to create designs expected by the targeted demographic and the overreaching vision of the brand. Wefocus on creating effective designs that describe your business vision, and enable you to compete favorably with other businesses in the market.', 'Design is not just about making things look pleasing to the eye, it is more about narrating a story, emotionally appealing and a convincing point being driven home. You might need a logo, attractive packaging design, or elaborate UI/UX designing for your digital products; we are capable to deliver that with quality. At Devocra, you do not get mere graphics; instead, you receive sophisticated solutions that can enhance target audience interaction and can stimulate your enterprise’s development.',
];
const desc1 = [
    "A logo symbolizes a brand to the public and is one of the single most utilized aspects of a brand. At Devocra, we have focused our practice in the creation of customized logos that would not only be easily memorable but also would resonate with your business’ virtues and goals. Whether it is a new start-up company or rebranding a firm, we design logos that dictate the character of the existing or the new company.", "Here at Insigni Tees, logo design is a personal and custom affair that will meet or exceed your expectations. We assist from the ideation stage and develop the logo towards the final stage together in a way that is acceptable to the target audience and your brand’s ethos. A logo is a strategic asset that strengthens a brand identity and credibility; at Devocra, we ensure it cuts through competition in any market."
]
const desc2 = [
    "It is more than just covering your product so as to arrive at the customers in one piece, but also provides the much-needed platform to sway your customers. It is a fact that attractive packaging to the product increases chances of the product being noticed, purchased and passed around. By working with Devocra, you get distinct, aesthetic and practical packaging solutions that reflect the spirit of your offerings and fit established norms.", "To create compelling and on-brand packaging our team focuses on understanding your company’s image and values. This is true whether the packaging requirements are for foods,cosmetics, electronics, and any other product since we design for functionality, beauty, and sustainability to create a packaging that is consistent with your brand message and a unboxing experience that will be memorable."
]
const desc3 = [
    "In the digital age, usability and graphic design determine the effectiveness of your site or application, otherwise known as user experience (UX) and user interface (UI) design. Everything at Devocra is focused on creating frictionless and fun user interfaces, and this is most noticeable when it comes to the interactions clients’ users will have with the end product. Aesthetics is always important, but more of the emphasis is given to usability, including navigation and accessibility.", "The UI/UX design solutions that we offer to clients relate to the branch of design known as user-centered design. First we analyze who your audience is, what you want to achieve, andwhat the user of your product will go through and then devise clean, purposeful and intuitive layouts. Whether you require web site, mobile application, or powerful web form, we provide design that will increased usage rates, higher examinations, and enhance your image."
]
const desc4 = [
    "It is one of the best methods of branding and designing because it offers a personal touch to your branding and designing compared to other companies. About Devocra – We provide our clients with custom illustration solutions that set your brand apart. Whether it is a detailedvector graphics design or casually drawn illustrations, we provide real-time visuals that interest and inform the targeted audience.", "Children’s books are a great way of grasping simple ideas, narrating an idea, & even presenting creativity to marketing strategies. Whatever it may be – a website, an advertisement, social media posts, or product packaging, our team collaborates with you to achieve graphics that reflect your brand’s attitude and goals."
]
const desc5 = [
    "In advertising the single biggest concept is pulling attention and arousing interest. Using our print advertisement services at Devocra, you’ll get advertisements that pull the audience in and make them act. Our designs always consider the placement of the advertisement regardless if it is a print ad, banner ads, social media ads or billboards.", "Our advertising designs are crafted with one goal in mind: to improve your brand exposure and sales as you target your audience more effectively. Through great attention to your audience, we develop ads that directly capture their needs and wants, thus making sure yourmessage gets through and sticks. Through advertising design from Devocra, your brand can therefore stand out as it impacts the recipient of your message."
]
const GraphicDesign = () => {
    return (
        <CommonLayout header={2} footer={1} video={false} title={"aaa"} keywords={"abc"} description={"abcd"}>
            <ServiceDetailsBanner title={"Graphic Design"} breadcrumb={"Graphic Design"} />
            <ServiceDetailsMain mainHead={"Graphic Design Services at Devocra"} mainDesc={mainDesc} head1={"Logo Design"} desc1={desc1}
                head2={"Packaging Design"} desc2={desc2}
                head3={"Crafting UI/UX"} desc3={desc3}
                head4={"Illustration"} desc4={desc4}
                head5={"Advertising Design"} desc5={desc5}
                img1={"/images/graphicdesign/6.svg"}
                img2={"/images/graphicdesign/5.svg"}
                img4={"/images/graphicdesign/4.svg"}
                img5={"/images/graphicdesign/2.svg"}
                img3={"/images/graphicdesign/1.svg"}
            />
            <UxProcess />
            <CtaTwo />
        </CommonLayout>
    )
}
export default GraphicDesign