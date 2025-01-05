import React from "react";
import Layout from "@/components/layout/Layout";
import ServiceDetailsMain from "@/components/containers/service-details/ServiceDetailsMain";
import ServiceDetailsBanner from "@/components/layout/banner/ServiceDetailsBanner";
import UxProcess from "@/components/containers/service-details/UxProcess";
import CtaTwo from "@/components/containers/service-details/CtaTwo";
const mainDesc = [
    'At Devocra, we realize that today’s marketing requires effort and great plans for companies to succeed in the market. The variety of marketing services we provide aims at ensuring the effectiveness in terms of the communication impact and return on investment. Our focus is todesign and create bespoke marketing strategies to make your message heard by the right people and to achieve your business objectives. Whether you want more exposure or more clicks and sales, Devocra is here to help you organize the best marketer actions.', 'That is why our marketing team can boast of all the relevant tools, trends, and techniques to achieve the maximum result for your company. starting from utilization of URL on the web index, Social Media Marketing, PPC we assist with end support to draw in clients that will go further to create drawn-out business. Although our specialty is Lead Generation, we support your brand, analyse your market, and set up marketing strategies that target, capture, and convert the right audience.',
];
const desc1 = [
    "SEO stands for Search Engine Optimization and amid stiff competition in the online marketing space, it can be one of the best practices to help your website rank high on search engine results pages. Search engine optimization, better known as SEO, is a service that tunes your website for google, making sure your content ranks for certain keywords. Ourteam that optimizes the initial characters of your internet site such as the title tags, URLs, H1.FindGameObjectWithTag tags, and meta descriptions to assist your website rank tremendously high on the SERPs through keyword research, on-site optimization, technical SEO, and link building.", "Through advanced SEO techniques we maintain high rankings for your website and ensure that our clients get better traffic and enhanced growth. From the above all that has been saidand done, with the help of Devocra SEO services you are assured of a constant growth as well as constant position ahead of the competitors."
]
const desc2 = [
    "Facebook, Instagram, Twitter, and LinkedIn alone plays a critical role in improving the organization’s awareness, customers relationships, as well as engagement. Social Media Marketing (SMM) is a technique of publishing efforts and content, community management, and advertisement where the goal is to reach out to the people. At Devocra, we assist you inembracing a powerful social media platform that shares your brand voice and achieves your marketing goals.", "Through analytics and insights we build up a plan to increase the outreach of your brand on social media as well as proper management of your audiences. No matter if you require content creation, community management or paid advertisement, our team guarantees that your social media marketing will bring tangible results. This we achieve by developing relatable content and launching paid promotional campaigns that attract more visitors, recognition, and quality prospects."
]
const desc3 = [
    "Pay per click (PPC) advertising is a method of promoting website traffic through ads to search engine and social media networks. At Devocra, we are well aware of the best strategies for ppc advertising in Google Ads, Bing Ads and social networks. It’s importance isbased on our aim and promise to give you the best return on investment (ROI) through placing your ads in front of the right target market; high converting ads.", "From keyword research and creative to marketing management and campaign development, we focus on every aspect to ensure your PPC campaigns are successful. Our team constantly monitors and analyses campaign data to improve performance, reduce ad spend, and attract more qualified leads. Whether you’re looking for ad campaigns, ad impressions, or creative strategies, our PPC services are designed to help you achieve your business goals and drive meaningful results."
]
const desc4 = [
    "Email marketing remains one of the most important tools for nurturing and building customer relationships. At Devocra, we create unique email marketing campaigns that reach your target audience and motivate them to take action. From newsletters to classified ads and automated drip campaigns, we help you connect with your customers and deliver valuable content that drives conversions.", "Our email marketing services include segmentation, A/B testing, campaign optimization, and performance tracking to ensure your emails deliver the best results. By delivering relevant and engaging content, we help you build trust and loyalty with your customers, which ultimately increases sales and customer retention. Let Devocra help you create email campaigns with lasting impact."
]
const desc5 = [
    "Content marketing is the foundation of any marketing strategy. At Devocra, we create useful, actionable, and long-lasting content to engage, engage, and transform your team. Whether it’s a blog post, white paper, e-book, infographic, or video, content connects with your audience while driving your message.", "We understand that content is more than just words - it’s delivering the right message at the righttime. Our team works closely with you to create a content strategy that aligns with your goals, optimizes SEO, and drives qualified traffic. By creating something that adds value to your customers’ lives, we help you position your brand as an industry leader, increasing long-term engagement and conversions."
]
const Marketing = () => {
    return (
        <Layout header={2} footer={1} video={false}>
            <ServiceDetailsBanner title={"Marketing"} breadcrumb={"Marketing"} />
            <ServiceDetailsMain mainHead={"Marketing Services at Devocra"} mainDesc={mainDesc} head1={"Search Engine Optimisation (SEO)"} desc1={desc1}
                head2={"Social Media Marketing"} desc2={desc2}
                head3={"Pay-per-click (PPC)"} desc3={desc3}
                head4={"Email Marketing"} desc4={desc4}
                head5={"Content Marketing"} desc5={desc5}
                img1={"/images/marketing/seo.svg"}
                img2={"/images/marketing/ssm.svg"}
                img4={"/images/marketing/ppc.svg"}
                img5={"/images/marketing/email.svg"}
                img3={"/images/marketing/content.svg"}
            />
            <UxProcess />
            <CtaTwo />
        </Layout>
    )
}
export default Marketing