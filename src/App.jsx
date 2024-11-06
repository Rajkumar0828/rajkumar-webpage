/**
 * 
 * @copyright 2024 RAJKUMAR RAMANATHAN
 * @license Apache-2.0
 */

/**
 * 
 * node modules
 */


import {ReactLenis} from 'lenis/react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

/**
 * 
 * Register gsap plugins
 */

gsap.registerPlugin(useGSAP,ScrollTrigger);

/**
 * 
 * components
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Talent from "./components/Talent";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './index.css';
const App = () => {

  useGSAP(() =>{

    const elements = gsap.utils.toArray('.reveal-up');

    elements.forEach((element)=>{
       gsap.to(element,{
        ScrollTrigger: {
           trigger : element,
           start: '-200 bottom',
           end: 'bottom 80%',
           scrub: true
           
        },
        y: 0,
        opacity:1,
        duration: 1,
        ease: 'power2.out'
       })
    })
  })

  return (
    <ReactLenis root>
     <Header/>
     <main>
      <Hero/>
      <About/>
       <Talent/>
       <Work/>
       <Contact/>

     </main>
   
     <Footer/>

     </ReactLenis>
  )


}

export default App;