import React from "react";
import Layout from "@/components/layout/Layout";
import ServiceDetailsMain from "@/components/containers/service-details/ServiceDetailsMain";
import ServiceDetailsBanner from "@/components/layout/banner/ServiceDetailsBanner";
import UxProcess from "@/components/containers/service-details/UxProcess";
import CtaTwo from "@/components/containers/service-details/CtaTwo";
const mainDesc = [
    'At Devocra for instance, we pride ourselves in offering lasting solutions that are improved by Artificial Intelligence (AI) aimed at improving organizational operations. Working with you in mind, our technologies adapt to your needs and help you gain an edge over the competition,make better decisions, and improve your clients’ experience. Having experience in both AI system implementation for large corporate and AI application development, we have the ability to help you bring your concept into existence.', 'AI is quickly becoming pervasive in the market across all industries it applies to, and at Devocra, we develop intelligent artificially intelligence that is efficient and feasible for business applications. I am proud to lead a talented team, who applies the state-of-the-art AImethods to create innovative intelligent systems that enhance productivity, automate operations and deliver value. Specialized on customization and performance we enable you to achieve the full potential of AI for your business ahead as the world becomes more and more driven by technology.',
];
const desc1 = [
    "The generative AI working can be explained as AI that is capable of creating new, original content from the learned information. At Devocra, we make use of generative AI to develop best solutions for different fields and sectors. From realistic depictions in domain such as imagery and video to generating quality text and written content, generative AI is disrupting creativity for commerce. The offerings are designed to assist corporations in creating customized content in large volume, making them more efficient while slashing their time spent on crafting them by hand", "We help businesses bring content that reflects their voice and successfully reach their audiences and manage marketing efforts. Whether for specific images, articles written by artificial intelligence, or music compositions, Devocra has the solution for your company, offering generative AI to take you to the next level in a competitive market."
]
const desc2 = [
    "Retraining of the models is one of the critical processes when dealing with the application of machine intelligence. When it comes to Devocra, we are a team of AI experts that focuses on optimizing pre-trained models for your particular business needsfor your specific use case. Our team of data scientists collaborates with our clients to learn more about their objectives and refine the models to guarantee they give accurate and dependable outcomes.", "By introducing fine-tuning methodology in case of AI models, we are learning how to retune the models to work on other data sets, solve certain type of business problems and also, how to make the existing models more accurate for classification, recommendation and prediction purposes. It also ensures that organisations obtain better benefits from their AI systems through enhanced decisions by improving the results."
]
const desc3 = [
    "CAI supporters can hardly imagine that smart AI assistants are changing the interaction of companies with customers and personnel. Therefore at Devocra we build smart Virtual Assistants to improve customer relations, reduce workload, and offer prompt support. Such AI solutions are intended for creating servers that comprehend the user search queries as well as offer recommendations and help to manage diverse business procedures.", "With the adoption of a smart AI assistant into your business environment, business operations enhance, and customer responses hasten, and satisfaction increases. Whether you are using them for ticketing solutions, scheduling processes, or lead generation, our smart AI-enabled assistants are adaptable to your desired assignments to improve productivity and create excellent user experience."
]
const desc4 = [
    "NLP is a subfield of AI, that mainly deal with the way computers can understand and respond or interact with natural and natural language. We focused on NLP technologies at Devocra; therefore, we have created as well as further refined Large Language Models (LLM) that can analyze, comprehend, and produce text in a human-like manner. Whether you have to gather customers’ opinions and classify them, to learn insights from huge datasets or build conversation agents to interact with customers, we apply NLP to identify patterns in a high volume of unprocessed data.", "Our NLP solutions can be used to help the company’s cut down on the time it takes to perform or complete various textual tasks, increase the accuracy of sentiment analysis, and provide customers with better experiences in their interactions with chatbots or virtual assistants. Devocra’s powerful NLP tools bring the realistic understanding of natural language to your business processes, helping create better decision-making and increase customers’ satisfaction."
]
const desc5 = [
    "Automated optimization applies the concept of AI by utilizing brand new patterns derived from information to enhance procedures and activities, manage resources more proficiently. In today’s world at Devocra, we offer our clients automated optimization solutions that enables them to cut unnecessary expenses and increase productivity. Obviously, employing AI means leveraging big data, navigating cause-and-effect relationships and even simulatingin order to achieve the best results, automating certain business processes and detecting inefficiencies that hinder your business from developing at its best.", "Organizations can implement our automation optimization solutions in multiple arras including supply chain, digital marketing etc. Our AI optimization solutions can help you reduce complexities, drive efficiency and effectiveness in your procedural or business management decisions in the quickest of time and with ease."
]
const ArtificialIntelligence = () => {
    return (
        <Layout header={2} footer={1} video={false}>
            <ServiceDetailsBanner title={"Artificial Intelligence"} breadcrumb={"Artificial Intelligence"} />
            <ServiceDetailsMain mainHead={"Artificial  Intelligence at Devocra"} mainDesc={mainDesc} head1={"Generative AI"} desc1={desc1}
                head2={"AI Model Fine-Tuning"} desc2={desc2}
                head3={"Smart AI Assistant"} desc3={desc3}
                head4={"Natural Language Processing (LLM)"} desc4={desc4}
                head5={"Automated Optimization"} desc5={desc5}
            />
            <UxProcess />
            <CtaTwo />
        </Layout>
    )
}
export default ArtificialIntelligence