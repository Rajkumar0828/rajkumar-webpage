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
      number: 3
    }
  ];

const companyLogos = [
    {
      src: 'images/RZ.jpeg',
      alt: 'Relevantz logo',
      className: 'w-[150px] h-[52px] md:w-[170px] md:h-[60px] object-contain'
    },
    {
      src: 'images/RLE.png',
      alt: 'Second company logo',
      className: 'w-[150px] h-[52px] md:w-[170px] md:h-[60px] object-contain'
    },
    {
      src: 'images/Ford logo.jpg',
      alt: 'Third company logo',
      className: 'w-[130px] h-[52px] md:w-[150px] md:h-[60px] object-contain'
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
             
            Welcome! I&apos;m RAJKUMAR, a Signature Polyglot SDET Engineer specialized in Machine Learning inculdes computer vision, NLP, and real-time AI systems — from model training to production deployment. Currently, I specialize in developing robust software solutions using agile methodologies and an enhanced version of DevOps and MLops.

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
            {/* <img src="images/RZ.jpeg" 
            alt="Logo" 
            width={100}
            height={100}
            className="ml-auto md:w-[110px] md:h-[40px]" 
            
            /> */}
        </div>

        <div className="mt-8 md:mt-12">
            <p className="text-sm text-zinc-400 mb-3 md:mb-4">
                Companies I&apos;ve worked with
            </p>
            <div className="flex items-center justify-start gap-4 md:gap-6 rounded-xl bg-white p-4 md:p-5 shadow-sm border border-zinc-200 w-fit max-w-full overflow-x-auto">
                {companyLogos.map(({ src, alt, className }, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={alt}
                        width={170}
                        height={60}
                        className={`${className} rounded-md bg-white`}
                    />
                ))}
            </div>
        </div>
       

        </div>
    </div>

   </section>
  )
}

export default About