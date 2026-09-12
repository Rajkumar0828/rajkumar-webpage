/**
 * 
 * @copyright 2024 RAJKUMAR RAMANATHAN
 * @license Apache-2.0
 */


import React from 'react'
import SkillCard from './SkillCard';


const skillItem = [
     {
      imgSrc: 'images/Python.png',
      label: 'Python',
      desc: 'Programming Language'
    },
     {
      imgSrc: 'images/Fastapi.png',
      label: 'FastAPI',
      desc: 'Web Framework'
    },
    {
      imgSrc: 'images/Dotnet.png',
      label: 'Dotnet',
      desc: 'WebApi'
    },
    {
      imgSrc: 'images/ef-logo.png',
      label: 'Entity Framework',
      desc: 'Webapi using ADO.NET'
    },
    {
      imgSrc: 'images/EF-CORE.png',
      label: 'Entity Framework Core',
      desc: 'ASP .Net Core'
    },
    {
      imgSrc: 'images/nunitpng.png',
      label: 'N UNIT',
      desc: 'Testing'
    },
    {
      imgSrc: 'images/seleinum.jfif',
      label: 'Selenium',
      desc: 'Automation Testing'
    },
    {
      imgSrc: 'images/Mlflow.png',
      label: 'ML Flow',
      desc: 'Model Deployment'
    },
    {
      imgSrc: 'images/React.png',
      label: 'React',
      desc: 'React with Typescript'
    },
    {
      imgSrc: 'images/mongodb.png',
      label: 'MongoDB',
      desc: 'Database'
    },
     {
      imgSrc: 'images/Cassendra.png',
      label: 'Cassandra',
      desc: 'NoSQL Database'
    },
    {
      imgSrc: 'images/Hasi Corp Vault.png',
      label: 'HashiCorp Vault',
      desc: 'Secrets Management'
    },
    {
      imgSrc: 'images/Tailwindcss.png',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
    {
      imgSrc: 'images/Azure.png',
      label: 'Azure Cloud',
      desc: 'Cloud Computing'
    },
    {
      imgSrc: 'images/Jenkins.png',
      label: 'DevOps',
      desc: 'Build and Deployment'
    },
     {
      imgSrc: 'images/Argocd.png',
      label: 'ArgoCD',
      desc: 'GitOps Continuous Delivery'
    },
    {
      imgSrc: 'images/Datascience.jfif',
      label: ' DataScience & ML',
      desc: 'AI'
    },
    {
      imgSrc: 'images/kaggle.png',
      label: 'Kaggle',
      desc: 'Datasets and GPUs'
    },
     {
      imgSrc: 'images/hashicorp-terraform-logo.png',
      label: 'HashiCorp Terraform',
      desc: 'Infrastructure as Code'
    },
     {
      imgSrc: 'images/redis.png',
      label: 'Redis',
      desc: 'In-Memory Data Structure Store'
    },
     {
      imgSrc: 'images/Ansible.png',
      label: 'Ansible',
      desc: 'Automation'
    },
     {
      imgSrc: 'images/istio.jpeg',
      label: 'Istio',
      desc: 'Service Mesh'
    },
     {
      imgSrc: 'images/Jaeger.png',
      label: 'Jaeger',
      desc: 'Distributed Tracing'
    },
     {
      imgSrc: 'images/KrakenD.png',
      label: 'KrakenD',
      desc: 'API Gateway'
    },
     {
      imgSrc: 'images/kubernetes.png',
      label: 'Kubernetes',
      desc: 'Container Orchestration'
    },
     {
      imgSrc: 'images/OpenTelementry.png',
      label: 'OpenTelemetry',
      desc: 'Observability'
    },
     {
      imgSrc: 'images/opensearch.png',
      label: 'OpenSearch',
      desc: 'Search Engine'
    },
     {
      imgSrc: 'images/Prometheus.png',
      label: 'Prometheus',
      desc: 'Monitoring'
    },
    
     {
      imgSrc: 'images/Grafana.png',
      label: 'Grafana',
      desc: 'Data Visualization'
    },
     {
      imgSrc: 'images/Rancher.png',
      label: 'Rancher',
      desc: 'Kubernetes Management'
    },
     {
      imgSrc: 'images/KEDA.png',
      label: 'KEDA',
      desc: 'Kubernetes Event-Driven Autoscaling'
    },
     {
      imgSrc: 'images/KATA.png',
      label: 'KATA',
      desc: 'Container Runtime'
    },
    
  ];



const Talent = () => {
  const marqueeItems = [...skillItem, ...skillItem];

  return (
   <section className="section">
    <div className="container">
        <h2 className="headline-2 reveal-up">
        Essential Tools I use
        </h2>

        <p className=" text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
        Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.

        </p>

        <div className="marquee-shell reveal-up">
          <div className="marquee-track">
            {marqueeItems.map(({imgSrc, label, desc}, key) => (
              <SkillCard
                key={`${label}-${key}`}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                classes="min-w-[260px] shrink-0"
              />
            ))}
          </div>
        </div>
    </div>

   </section>
  )
}

export default Talent