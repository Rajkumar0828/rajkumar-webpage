/**
 * 
 * @copyright 2024 RAJKUMAR RAMANATHAN
 * @license Apache-2.0
 */


import React from 'react'


const aboutItems = [
    {
      label: 'Project done',
      number: 5
    },
    {
      label: 'Years of experience',
      number: 1.5
    }
  ];

const About = () => {
  return (
   <section
       id="about"
       className="section"

   >
  
    <div className="container">

        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
            <p className="text-zinc-300 mb-4 md:mb-8 
            md:text-xl md:max-w-[60ch]">
             
            Welcome! I&apos;m RAJKUMAR, a dedicated and versatile SDET Engineer with a strong foundation in .NET technologies, including C#, and proficiency in Python, Java, and C++. Currently, I specialize in developing robust software solutions using agile methodologies and an enhanced version of DevOps.

        </p>
        <div className="flex flex-wrap items-center gap-4 md:gap-7">

            {
               aboutItems.map(({label, number},key)=>(
                <div key={key}>
                    <div className="flex items-center md:mb-2">
                        <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                        <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                    </div>
                    <p className="text-sm text-zinc-400">{label}</p>
                </div>
               )) 
            }
            <img src="images/RZ.jpeg" 
            alt="Logo" 
            width={100}
            height={100}
            className="ml-auto md:w-[110px] md:h-[40px]" 
            
            />
        </div>
        </div>
    </div>

   </section>
  )
}

export default About