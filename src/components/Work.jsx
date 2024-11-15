/**
 * 
 * @copyright 2024 RAJKUMAR RAMANATHAN
 * @license Apache-2.0
 */


import React from 'react'
import ProjectCard from './ProjectCard';
const works = [
    {
      imgSrc: 'images/Heart disease data.jpeg',
      title: 'Visualizing and Predicting Heart Disease using Interactive Dashboard ',
      tags: ['IBM WATSON', 'COGNOS', 'KNN'],
      
    },
    {
      imgSrc: 'images/BMTNN.jpeg',
      title: 'Sentiment Analysis Using Blended Multilingustic System',
      tags: ['WSD', 'TNN'],
      
    },
    {
      imgSrc: 'images/Online survey.jpeg',
      title: 'Online Survey System',
      tags: ['Development', 'API','Docker','Jenkins'],
      
    },
    {
      imgSrc: 'images/LXP.jpeg',
      title: 'Learning Experience Platform',
      tags: ['Web-api', 'Development','Dotnet'],
      
    },
    
  ];

const Work = () => {
  return (
   <section  id="work" className="section">
    <div className="container">
           <h2 className="headline-2 mb-6 reveal-up">
           My portfolio highlights
           </h2>

           <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] reveal-up">
            {works.map(({imgSrc, title, tags}, key)=>(
                <ProjectCard
                   key={key}
                   imgSrc={imgSrc}
                   title = {title}
                   tags = {tags}
                   classes="reveal-up"
                />
              
              ))}

           </div>
    </div>
   </section>
  )
}

export default Work