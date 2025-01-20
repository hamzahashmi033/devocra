import React from "react";
import CommonLayout from "@/components/layout/CommonLayout";
import ServiceDetailsMain from "@/components/containers/service-details/ServiceDetailsMain";
import ServiceDetailsBanner from "@/components/layout/banner/ServiceDetailsBanner";
import UxProcess from "@/components/containers/service-details/UxProcess";
import CtaTwo from "@/components/containers/service-details/CtaTwo";
const mainDesc = [
    'At Devocra , we make it our core business to bring you top-notch DevOps Engineering services that can help take your software development and operations to another level in terms of effectiveness, flexibility, and dependability. It is imperative that to maintain the speed and innovation in software delivery that has today become the heart of business, DevOps are a must. Through our specialists, organizational processes are optimized,repetitive tasks are automated, and development and operation are aligned to steadily and efficiently issue outputs.', 'Devocra utilises DevOps to allow companies to apply a structure for efficient transition from app creation to operations. To this end, we promote enabling effective collaboration and subsequent process optimization that increases the frequency and consistency of the release of quality applications and ultimately facilitate organizations’ achievement of their objectives within the shortest time possible. At Devocra, we apply the successful DevOps practices along with the applicable tools and technologies to enhance the organization. We aim at ensuring that businesses achieve the delivery of robust applications with low risks andhigh velocity.',
];
const desc1 = [
    "CI and CD are the fundamental techniques used in the development of modern software. These practices minimize the roles of hand craft in code changes and their deployment to production thus enhancing software delivery speeds. As your dedicated CI/CD service provider, we offer you customized CI/CD solutions that fit your project needs at Devocra as our CI/CD process is optimized to develop, test and deploy applications easily.", "Our CI/CD solutions provide that any code changes will be built and tested with the automated system and deployed to the main environment efficiently. This in turn results in shorter feedback loops, fewer integration problems and higher quality software. Taking advantage of the CI/CD pipeline, we ensure faster releases and less time spent on downtime, while keeping things consistent and reliable."
]
const desc2 = [
    "Infrastructure as Code or IaC is one of the important principles of DevOps that actually allows dealing with infrastructure either through code. We at Devocra also apply IaC tools like Terraform, Ansible and CloudFormation for setting up, configuring and managing your cloud environment. This means you can build and manage your infrastructure at a larger size with less differentiation between your development, staging, and production environments.", "Our Infrastructure as Code (IaC) solutions enable us to reduce human interference, improve security and smooth the construction, and maintenance processes. Whether you want to build a new environment, extend the infrastructure using automated templates or scale up your resources, our IaC approach makes sure that your systems are constantly updated, immutable and performant."
]
const desc3 = [
    "Containerization has transformed how applications are built, deployed as well as managed. Application and their dependencies should be consolidated into these units as it will create portability and future scalability needs. At Devocra, we use Docker and Kubernetes as two of the ways to make the most of application deployment and expansion.", "With Kubernetes orchestration we control containerized applications as a set of distributed objects that are self-sufficient and automatically deployable, scalable, and monitored. Our solutions allow you to reach high levels of availability together with fault tolerance and efficient use of resources. In both cases, with microservices or monolithic applications, the containerization, as well as orchestration, make the applications reliable, easily scalable, andeasily to deliver."
]
const desc4 = [
    "We also find that cloud computing provide some fundamental characteristics like flexibility, scalability and reliability and it is the basic infrastructure for today’s application. Devocra offers a full range of cloud migration and cloud optimization services aimed at improving companies’ performance and reducing their problems. Our services primarily involve engaging with leading Cloud Managed Service Providers such as AWS, Azure and G Suite to provide the most innovative Cloud Computing and Automation solutions to your business.", "When ITIL Best is utilised to automate cloud provisioning, configuration, and management, you are assured that the infrastructure is malleable, inexpensive and simple to govern. Organizations can utilize our cloud automation services to make work processes leaner, more efficient and less expensive. If you require automating new cloud deployments, managing vast volumes of infrastructure, or improving security and compliance, Devocra’s cloud computing solutions allow your business to perform at its peak while maximising on cost saving."
]
const desc5 = [
    "Logging and monitoring in the modern-day development world, in a constantly evolving ecosystem, can help detect and solve problems before getting to the users. At Devocra, we ensure you have an enhanced monitoring and logging system to help you monitor and analyse your applications and infrastructure instantly. With Prometheus, Grafana, ELK Stack, and Datadog, your systems are always optimized so they could perform efficiently at all times.", "Through monitoring and logging services, we give you complete insight into your applications; allow you capture specific metrics, identify problems and make corrective actions as needed. This worthy approach will help keep downtime to a bare minimum so thatthe reliability of the software and the satisfaction of the users of the applications are achieved."
]
const DevOps = () => {
    return (
        <CommonLayout header={2} footer={1} video={false} title={"aaa"} keywords={"abc"} description={"abcd"}>
            <ServiceDetailsBanner title={"DevOps Engineering"} breadcrumb={"DevOps Engineering"} />
            <ServiceDetailsMain mainHead={"DevOps Engineering at Devocra"} mainDesc={mainDesc} head1={"Continuous Integration and Continuous Deployment (CI/CD)"} desc1={desc1}
                head2={"Infrastructure as Code (IaC)"} desc2={desc2}
                head3={"Containerization and container orchestration"} desc3={desc3}
                head4={"Cloud Computing and Automation"} desc4={desc4}
                head5={"Monitoring and Logging"} desc5={desc5}
                img1={"/images/devops/3.png"}
                img2={"/images/devops/2.svg"}
                img4={"/images/devops/4.svg"}
                img5={"/images/devops/5.png"}
                img3={"/images/devops/6.svg"}
            />
            <UxProcess />
            <CtaTwo />
        </CommonLayout>
    )
}
export default DevOps