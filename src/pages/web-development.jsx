import React from "react";
import CommonLayout from "@/components/layout/Layout";
import ServiceDetailsMain from "@/components/containers/service-details/ServiceDetailsMain";
import ServiceDetailsBanner from "@/components/layout/banner/ServiceDetailsBanner";
import UxProcess from "@/components/containers/service-details/UxProcess";
import CtaTwo from "@/components/containers/service-details/CtaTwo";
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
        <CommonLayout header={2} footer={1} video={false} title={" Top Web Development Services | Devocra Web Solutions"} keywords={"Web Development, App Development, Graphic Design, Marketing, DeVops, Software Quality Ensurance, Artificial Intelligence,digital solutions, web development, website company, design website, web app development, website software, web development services, digital solutions company, web development company, web design company, front end development, website solutions, develop website, web development website, your website, web design, website construction, website app development, web app development services, make your website, web software, web site, web application development, web development agency, corporate website, website and app development, web development solutions, web design websites, website design website, front end, website development services, web designing services, web creation, web design software, company site, design a website, web and app development, solutions company, web development software, web company, digital website, make website, website design and development services, company websites, back end web development, website services, website design company, user experience, website tools, back end development, web application development services, design site, website design software, web development and design, digital design, web app design, website development website, easy website, need website, web application, corporate website development, website design and development, design app, website designing services, website development software, web app creation, front end and back end development, simple website design, site creation, app software, web solutions, web design app, website design development, website development company, website and app design, website platforms, front end app development, design your website, corporate website design, web and app development services, make web, brand website, website to app, web development design, web site creation, website app design, software development website, web development team, web app development company, website to make a website, web website, graphic design website, web development services company, digital website design, enterprise web development, web dev company, make your on website, website programmer, web app company, business website, app website, website development team, app design and development services, web development company website, web design solutions, app development company, web and app development company, web development front end, website creation, website for company, web development businesses, software company websites, easy website design, app design company, web design platforms, digital design websites, app designing website, website and app development company, app and web development company, easy website development, make site, online websites, create your website, website design platforms, website design and app development, website coding, business website design, front end coding, website maintenance, layout website, front and back end web development, software digital, software and app development company, about web development, it services website, it solutions websites, website application development, website creating company, website development cost, cms development, application development services company, front end website development, it company website, software and web development, website building, web development platforms, front end development services, graphic design company, website and app development cost, business website development services, web app development software, web design businesses, user friendly website, web application development solutions, website design and development company, we make your website, website maintenance services, web creation software, web sites design, website creation tools, website for web development, make your site, web application development company, website redesign company, to create website, graphic design and web development, web and app design, online business website, website creation website, web application development agency, get your website, digital design company, make your website an app, website maintenance company, the website design, front end back end, web app development agencies, business website creation, new web site, digital web design, fast website design, us it company, web app software, simple websites, business website platforms, website design site, front end website design, web design services website, website web development, web dev services, back end front end, web & app development, website under construction, back end website development, quick websites, web development company in us, web development and app development, brand website design, commercial website, website user experience, make your business website, start your website, it website design, web site designs, front end web design, web development services us, web design and web development, i need website, website development services company, the website company, make a website fast, app solutions, user design, make you website, develop your website, websites that create websites, website construction company, create a www website, backend development, web development services in us, website coding software, company to create a website, web development services website, graphic design and web design, easy website design software, web design for company, website integration, website creating software, web application company, web creation and design, website design solutions, website websites, website development solutions, web layout, easy website platforms, front end development company, web based application development, web design and development services, your company website, website and app design company, corporate web design, generate a website, we design websites, website development app, design web sites, design a web application, user experience software, web site creation software, web design and app development, front end software, web based app development, it and web development, front end design, app development and design, app dev company, website design development company, software to make websites, web application development platforms, website dev, website needed, front end web dev, we create websites, website creating services, web development agency website, website developer services, fast website development, website interface, business website development, web development about us, software app development company, website and app, need a business website, new web site design, graphic design company website, web app designers, digital web, we create your website, elite web design, your site, make a web app, html5 app development, business to business website, enterprise web development services, web development it, web design web development, make a website app, web application development software, enterprise website development, web solutions company, app software company, web development it company, website and application development, front end and back end, quick and easy website, we design company, user experience company, websites to design websites, web development requirements, web app design software, effective website design, digital solutions website, web design & development services, we make website, website to design, website design for company, software app design, site company, it company website design, it web design, enterprise web app development, app for web development, web graphic design, website design company website, web app development platforms, web front end, web development technologies, site to app, app development and web development, front end and back end web development, create a website design, web design company services, website creating app, app for website creation, website design & development services, we web, website and software development, website layout software, website for a company, web design team, websites to make designs, development website company, web coding software, website layout designer, app to design, web software development company, web digital, web site design tools, website interface design, website app development company, website layout planner, back end app development, enterprise web, web dev websites, web design and software development company, web design services us, webpage services, it solution company website, back end development services, enterprise website design, web and software development company, app to design website, cms website development, internet websites, graphic design services website, software development company websites, web creation tools, user friendly web design, front end web development company, make on website, web and graphic design, web development website design,online digital solutions, websites you need, enterprise level website, requirements of web development, as digital solutions, online website software, about front end development, need of web development, it digital solutions, graphic design in web development, web app web app, front end for website, digital development solutions, digital web development, websites website, front end web development requirements, back end for website, we create company, web creation services, software front end and back end, back front end development, front end for web development, a web development company, website development requirements, our team web design, front end to back end, back end web dev, front end in web development, site development software, software & web development, website under, web design technology, develop design, web development is, website and software, website user, front end and back end of website, enterprise web solutions, web dev solutions, fast web app development, web app coding, front end web development technologies, web development layout, web development how to, about website development, back end web development technologies, web for design, platforms for web design, corporate web design services, enterprise website platforms, front and development, web and digital design, website functionality, need website development, solution for web, design app web, solutions internet, app for designing website, app web app, branding for website, front end application development, front end design and development, in web development, digital website development, website to software, website our services, front end technologies and back end technologies, front end technologies in web development, graphic web, quick it solutions, web development and app development courses, software development front end back end, web digital solutions, enterprise web development company, latest web development, www in web development, front end back end coding, front end and back end coding, website where you can, elite websites, web and website, web development in, on your website, web development i, to make your, design and development services, corporate business website, graphic design web app, website design and graphic design, web app websites, software development web development, web design brand, web designing web development, back end web, web your brand, software development and web development, web and graphic design services, front end web application, develop a web, e web development, for web development, web development software house, software and website, front end of, make your website into an app, design digital solutions, front end and backend development, web application front end and back end, team website design, your business website, front end web design tools, development site web, e web site, front end web development tools, front end front end, develop a company, website to web app, web design web design, about us web, app solutions company, back end of website, our team website, back end for web development, need business website, web and software, your we, corporate website design company, front end back end software, website our team, web development full, appealing website, web development and software development, back end in web development, digital software house, users website, visually appealing design, website of the company, integrating front end and back end, web design back end, web and development, any company website, back end software, web app front end, our services website, front end and back end software development, web you, under website, website team, in design web, back end development technologies, front end and back end for web application, www web design, user experience solutions, user experience web design, web dev design, web app app, the web elite, web designing layout, web development frontend and backend, web development development, need web design, front development, website application development company, website design and website development, new web development, web and digital, web designing frontend and backend, web site application, corporate site design, web design and application, front end and backend web development, website establishment, web under construction, websites you, front and back end, design for site, back end web application, www web site, contact us on website, web development company in, front end and backend technologies, front end web design and development, web implementation, appealing design, front end web development software, front web design, layout company, node js front end development, online solutions company, site development design, website layout app, appealing website design, about us of any company, web software house, websites to develop, create digital solutions, website dynamic, software development front end, design app website, services for website, front back end, latest web, web web site, website for an app, application development web, latest tools for web development, latest website, on the web site, company on web, our team on website, about company website, back end front, web site about, website implementation, web site is, website with services, software required for web development, navigate website, web dev app, web services in web development, make web design, about web application development, software company design, website friendly, digital it web, about us design website, backend for web development, front end front, software development and web design, branding your website, design user friendly, any website design, web to design, website and development, difference between web development and front end development, design to development, digital design and, website in development, design development services, a solution company, difference between front end development and back end development, in house website, web end, any web site, front end for web application, site back end, we need a website, front end development platforms, end to end web application development, we make digital, digital needs services, web application front end design, web software development services, about us design, cms web development services, and web design, we make software, web design house, services design website, we on web, web development user experience, web app homepage design, into the website, web design digital, web design i, friendly website, user friendly design, homepage development, we as web, it and web design, in web design, i web design, efficient website, you websites, make the web, software and website development company, about our website, web app business, web app what is, css3 javascript, enterprise web application development, latest web design software, make it web, services in website design, a web design, digital it solution, end coding, web design is, js for front end development, web in web, website backend technologies, software product website, back end site, user friendly web, website under development, web app development technologies, web app layout, web design and user experience, design and develop, the user experience, website provide, backend of web development, web development systems, front end app, company of design, e web design, home web design, technologies for front end development, web & app development company, as web design, our services in website, web design for, website design company services, you are design, site to make websites, our clients website, our clients website design, difference between back end and front end web development, website for app design, front end website design ideas, front end and back end application, front end back end application, sites digital, web design by, look website, design & development services, web to application, company website layout, fully functional website, software company web design, corporate page design, website in website, that web company, web app layout ideas, back and development, latest in web design, difference between front end and back end web development, services design for website, user friendly site, website to website, our site, sites development, for web designing, functional websites, web dev team, website who we are, app back end, web development services blogs, for website development, website designed and developed by, a front end, app in website, integration in website, web app what is it."} description={"Devocra offers expert web development services globally. Our team builds custom websites and digital solutions to elevate your business online."}> 
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
        </CommonLayout>
    )
}
export default WebDevelopment