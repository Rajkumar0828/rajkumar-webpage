/**
 * 
 * @copyright 2024 RAJKUMAR RAMANATHAN
 * @license Apache-2.0
 */


import React from 'react'
import SkillCard from './SkillCard';


const skillItem = [
    {
      imgSrc: '/images/.net.png',
      label: 'Dotnet',
      desc: 'WebApi'
    },
    {
      imgSrc: '/images/ef-logo.png',
      label: 'Entity Framework',
      desc: 'Webapi using ADO.NET'
    },
    {
      imgSrc: '/images/EF-CORE.png',
      label: 'EntityFramwork core',
      desc: 'ASP .Net Core'
    },
    {
      imgSrc: '/images/nunitpng.png',
      label: 'N UNIT',
      desc: 'Testing'
    },
    {
      imgSrc: '/images/seleinum.jfif',
      label: 'Selenium',
      desc: 'Automation Testing'
    },
    {
      imgSrc: '/images/Javascript.png',
      label: 'Javascript',
      desc: 'Javascript using ES6'
    },
    {
      imgSrc: '/images/React.png',
      label: 'React',
      desc: 'React with Typescript'
    },
    {
      imgSrc: '/images/mongodb.png',
      label: 'MongoDB',
      desc: 'Database'
    },
    {
      imgSrc: '/images/Express js.png',
      label: 'Express JS',
      desc: 'Node with Express'
    },
    {
      imgSrc: '/images/Tailwindcss.png',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/Azure.png',
      label: 'Azure Cloud',
      desc: 'Cloud Computing'
    },
    {
      imgSrc: '/images/devops.png',
      label: 'DevOps',
      desc: 'Build and Deployment'
    },
    {
      imgSrc: '/images/Jenkins.png',
      label: 'Jenkins',
      desc: 'CI/CD'
    },
    {
      imgSrc: '/images/Datascience.jfif',
      label: ' DataScience & ML',
      desc: 'AI'
    },
    {
      imgSrc: '/images/kaggle.png',
      label: 'Kaggle',
      desc: 'Datasets and GPUs'
    },
  ];



const Talent = () => {
  return (
   <section className="section">
    <div className="container">
        <h2 className="headline-2 reveal-up">
        Essential Tools I use
        </h2>

        <p className=" text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
        Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.

        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] reveal-up">

            {
                skillItem.map(({imgSrc, label, desc}, key)=>
                (
                   <SkillCard
                     key={key}
                     imgSrc={imgSrc}
                     label ={label}
                     desc ={desc}
                     classes="reveal-up"
                   
                   />
                ))
            }
        </div>
    </div>

   </section>
  )
}

export default Talent