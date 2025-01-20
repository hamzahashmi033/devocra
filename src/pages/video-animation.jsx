import React from "react";
import Layout from "@/components/layout/Layout";
import ServiceDetailsMain from "@/components/containers/service-details/ServiceDetailsMain";
import ServiceDetailsBanner from "@/components/layout/banner/ServiceDetailsBanner";
import UxProcess from "@/components/containers/service-details/UxProcess";
import CtaTwo from "@/components/containers/service-details/CtaTwo";
import CustomLayout from "@/components/layout/CustomLayout";

const mainDesc = [
    'At Devocra, we are about achieving the objectives through the use of images in conveying the concepts with so much allure. Video Animation services are tailored to help put your vision into effective and creative visual on screen. All our animation solutions are designed to teach, brand, or entertain, depending on what you wish to achieve because we have a vast array of animation styles to suit your needs. Our experts boast of crafting 2D & 3D animations, motion graphics, andeven whiteboard animations and are prepared to offer you thoroughly professional animations that will rock your target base', 'Today video animation has proven to be one of the most effective methods for content marketing, education, and entertainment. As the business have shifted towards the use of digital platforms, the content being posted needs to be unique, appealing to the eye as well as convey messages efficiently. So at Devocra we provide a wide variety of animation services that may fit your business needs and assist in catching your audience’s attention. Whether making a promotional video, a product demonstration, or just an explainer video, Devocra’s animation services make sure that people perceive your work in the best way.',
];
const desc1 = [
    "2D Animation is an old but highly effective technique of communication that stylizes your message with beautiful flat images. At Devocra, we have expertise in crafting delightful 2D animated characters and animations for characters, explainer videos, and informative contents. The team applies the right tools and strategies to animate your product in the best way possible to capture the audience’s attention. Our goal is to make an animation that fits your brand’s logo and effectively communicates your message whether it is a simple or complex animation.", "2D animation is particularly useful in helping customers to explain their processes, promote theirbrands or give their audience something visually interesting to look at. Maximizing the narration and illustration, we make sure that your viewers understand and grasp the information we present without losing attention. Communication messages can be made more engaging and fun through Devocra’s 2D animation services."
]
const desc2 = [
    "3D animation adds an incredible dimension to your visuals by making them 3D, realistic models with motion to your concepts. From the product to the simulation, or even an entire 3D environment, Devocra’s 3D animation services help to make your imagination a reality in stunning detail. In producing avatars, models, animations, and renderings, we employ high-tech systems that will make your audiences glued on what you have to present. ", "Due to its features, 3D animations are used by such sectors of the economy as video game, construction, manufacturing of products, and multimedia. At Flicks, our team collaborates with you to make sure that every aspect in the 3D animation, from characters and environment designs, animating the modelling up to final rendering is to your liking. Devocra has highly skilled experts in 3D animation services; they will assist you in elevating your content to fantastic and memorable visuals on your site."
]
const desc3 = [
    "Stop Motion animation is unique and unconventional way in which objects are physically manipulated and photographed sequentially-producing-animated-like-movement. This typical animation technique makes this form suitable to create videos with a handmade appearance that distinguishes itself. At Devocra we focus on stop motion animation that can be applied to any type of project such as product demonstration, advert, short film or even usage in school projects.", "Stop Motion is one of the most beautiful techniques because of its natural character, thus Stop Motion is perfect for brands which want people-like video. Our experienced animators operate with various types of materials and approache s to make stop motion animation that would be eye-catching and trigger interest among your audience."
]
const desc4 = [
    "Animation is defined as the process of making objects, figures or images look as if they are moving when in fact they are still, and Motion Graphic design is a subcategory of graphic design that involves making illustrations move. In this case at Devocra, we develop motion graphics thathelp to visually explain content to viewers in a simple, concise manner. Be it an explainer video orproduct demonstration or a presentation our motion graphics serve as a brilliant addition which create the much needed noise and add the element of drama to the storytelling process.", "Motion graphics are ideal when it comes to illustrating ideas, showcasing data visualization or merely passing information in an engaging manner. To this end, we practice smooth scrolling, bright colors and vivid designs together with suitable animations to make sure the intended message is passed in a clear and interesting way. If you need an informative video, or you need commercial that will impact your audience visually, then our motion graphics services are customized appropriately."
]
const desc5 = [
    "Whiteboard Animation tells a story more engaging than any PowerPoint presentation while usingillustrations and drawings on the whiteboard. This style nicely fits into making educational videos, tutoriales and explainer videos corresponding to the theme, which represent concepts that must be simplified. Our team of talented artists at Devocra brings to the table professionally designed whiteboard animations that explain your message in an easy-to-understand manner, while holding your audience’s attention.", "Whiteboard animation can be used to convey products, services or a process that a business offers, or maybe in correlation to the business and in this view, it is quite common. Thus, employing Devocra’s whiteboard animation services we guarantee our clients’ message would be presented effectively and all viewers would stay engaged through the length of the video."
]
const VideoAnimation = () => {
    return (
        <CustomLayout header={2} footer={1} video={false} title={"Video Animation"} description={"Video Animation Description"} keywords={"Video Animation Keyword"}>
            <ServiceDetailsBanner title={"Video Animation"} breadcrumb={"Video Animation"} />
            <ServiceDetailsMain mainHead={"Video Animation at Devocra"} mainDesc={mainDesc} head1={"2D Animation"} desc1={desc1}
                head2={"3D Animation"} desc2={desc2}
                head3={"Stop Motion"} desc3={desc3}
                head4={"Motion Graphics"} desc4={desc4}
                head5={"Whiteboard Animation"} desc5={desc5}
                img1={"/images/videoanimation/2d.svg"}
                img2={"/images/videoanimation/3d.png"}
                img4={"/images/videoanimation/stopmotion.svg"}
                img5={"/images/videoanimation/motion.svg"}
                img3={"/images/videoanimation/whiteboard.svg"}
            />
            <UxProcess />
            <CtaTwo />
        </CustomLayout>
    )
}
export default VideoAnimation