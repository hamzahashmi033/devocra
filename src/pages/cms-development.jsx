import React from "react";
import Layout from "@/components/layout/Layout";
import ServiceDetailsMain from "@/components/containers/service-details/ServiceDetailsMain";
import ServiceDetailsBanner from "@/components/layout/banner/ServiceDetailsBanner";
import UxProcess from "@/components/containers/service-details/UxProcess";
import CtaTwo from "@/components/containers/service-details/CtaTwo";
const mainDesc = [
    'At Devocra, We understand that a properly formatted and efficient CMS is what most businesses need to bring together their online presences. CMS development services provided to you equip your with a stable platform to create, edit and publish your contents. Whether you’re creating an online shop or a business site or a blog, then we have the solutions to you and your needs. Working with our team of professionals, you can achieve a stress-free process of managing your content in order to increase customers interest and their number.', 'That is why in today’s speed, managing content has become a critical factor for companies that want to be ahead of others. Our CMS solutions are designed on the basis of the most preferred platforms and tools including WordPress, Shopify, Magento & Custom Development; you can entrust us with the creation of an effective and easy to navigate website. From easy information sites to difficult and versatile commercial enterprises and online shopping, mals ensure your site is easy to manage and extend. We need to construct a CMS solution that will complement your needs as a business.',
];
const desc1 = [
    "This CMS is very popular; it serves over 40% of websites worldwide, and with good reason. Recognized as being user-friendly, and highly versatile with obvious growth opportunity, WordPress can be employed by businesses of any size. Regardless of whether you have a blog, shop connected to your blog, or a typical corporate website, WordPress can be adjusted to your preferences", "Here at Devocra, we’re WordPress developers, which means in addition to the site’s looks, you get a well-functioning website. Our websites can package custom themes and plugin integration so that you don’t need to spend much time maintaining your content, but the users find it interesting. All our WordPress solutions are optimized for speed and search engines so your website is easily found and fast."
]
const desc2 = [
    "Shopify is a highly popular and versatile platform, and is perhaps the best choice for those who want a simple, straightforward website to build their online business with. We at Devocra specialize in Shopify development where we can help in developing the right look that your customers would want to buy from.", "As a Shopify development agency, we work on the concept of designing and creating stunning, yet robust Shopify stores. Our services range from creating customized themes to payment gateway integration to product management to guaranteeing that your online store is optimally functional and optimally sells. Whether you are creating your first store or need to improve an existing store, Devocra is ready to help you improve your Shopify store."
]
const desc3 = [
    "Magento is an open source Content Management System platform that has garnered a lot offame due to its flexibility and extended functionality. It is the most suitable option for giant firms or firms with advanced requirements in e-commerce. Magento has multiple flexibility levels which can ensure that large websites dealing with multiple product types and customer activity can be supported effectively.", "For Magento development solutions, we at Devocra offer consultation, custom Magento theme development, integration and even maintenance. Magento specialists guarantee that your online store will be not only full-functional, but also easily scalable, secure, and high-performing. While our solutions are aimed at improving your customer satisfaction and your company’s operations."
]
const desc4 = [
    "Professional Graphic Services that Fit Each Brand Independently. A custom theme give you unique look and feel of your website and this will represent your brand appropriately. Today, at Devocra, we specialize in developing WordPress, Shopify, Magento, and other CMS program-specific themes. At Joomchart, the designers and developers collaborate with you to provide an appealing and customized design for your business.", "The individual theme is guaranteed to be personalized for its responsiveness, SEO implementation, and the optimization of its efficiency across all the available devices. In line with the appreciation of usability, we ensure that your website is not only aesthetically pleasant to the eye but also provides efficient and effective interactivity that compels visitors into taking wanted actions."
]
const desc5 = [
    "It is important for any website to be updated so that its security and the functionality of any CMS powered website is not compromised. When you work with Devocra, you’ll receive consistent updates, security copies, boost performance, and absolutely checkups so that your website stays safe, fast, and perfect", "Site maintenance services keep your site up to pace with the latest features or updates of the CMS, security updates, and improvements. We also have provisions for support in occasional problem solving, fixing of bugs or pushing extra enhancements to the website. When you choose to work with Devocra as your partner, you are guaranteed that your site will remain helpful to users even in the future and more effective in a rapidly evolving digital marketplace."
]
const CmsDevelopment = () => {
    return (
        <Layout header={2} footer={1} video={false}>
            <ServiceDetailsBanner title={"CMS Development"} breadcrumb={"CMS Development"} />
            <ServiceDetailsMain mainHead={"CMS Development Services at Devocra"} mainDesc={mainDesc} head1={"WordPress Development"} desc1={desc1}
                head2={"Shopify Development"} desc2={desc2}
                head3={"Magento Development"} desc3={desc3}
                head4={"Custom Theme Development"} desc4={desc4}
                head5={"Website Maintenance"} desc5={desc5}
                img1={"/images/cmsdevelopment/4.svg"}
                img2={"/images/cmsdevelopment/1.svg"}
                img3={"/images/cmsdevelopment/6.svg"}
                img4={"/images/cmsdevelopment/3.svg"}
                img5={"/images/cmsdevelopment/5.svg"}
            />
            <UxProcess />
            <CtaTwo />
        </Layout>
    )
}
export default CmsDevelopment