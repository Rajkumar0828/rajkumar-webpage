/**
 * 
 * @copyright 2024 RAJKUMAR RAMANATHAN
 * @license Apache-2.0
 */


import React from 'react'
import { ButtonPrimary, ButtonOutline } from './Button';
import '../index.css'

const Hero = () => {
  return (
    <section id='home' className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">

        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box  rounded-lg">
              <img src="/images/Rajkumar Ramanathan_11987.jpg"
                width={35}
                height={35}
                alt="rajkumar" className="img-cover" />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>

              Working at Relevantz
            </div>
          </div>
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch]
        lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Crafting a modern technology for the future
          </h2>

          {/* <div className="flex items-center gap-3">

            <ButtonPrimary
              label="Download CV"
              icon="download"
            />

            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"

            />
          </div> */}


          <div className="flex items-center gap-3">
            <a
              href="public/RajkumarRamanathanResume.pdf" // Replace with the actual path to your resume file
              download
              className="btn btn-primary flex items-center gap-2"
            >
              Download CV
              <span className="material-symbols-rounded" aria-hidden="true">
                download
              </span>
            </a>
            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>


        </div>

        <div className="hidden lg:flex justify-center">
          <figure className="w-full max-w-[280px] ml-auto
    bg-gradient-to-t from-sky-400 via-25% via-sky-400/40
    to-65% rounded-[60px] overflow-hidden">
            <img src="images/Rajkumar2.jpg"
              width={256}
              height={400}
              alt="Rajkumar"
              className="w-full" />
          </figure>
        </div>


      </div>

    </section>
  )
}
export default Hero;