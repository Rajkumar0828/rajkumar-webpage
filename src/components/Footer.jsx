/**
 * 
 * @copyright 2024 RAJKUMAR RAMANATHAN
 * @license Apache-2.0
 */

import React from 'react'

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
    <div className="flex items-center justify-between pt-10 mb-8">
      <a href="/" className="logo reveal-up">

        <img src="images/favicon.ico" width={40} height={40} alt="Logo" className="" />
      </a>

      <p className=" text-zinc-500 text-sm reveal-up">  

        &copy; 2024 <span className="text-zinc-200"> RAJKUMAR RAMANATHAN</span>
      </p>

    </div>
    </div>
    </footer>
  )
}

export default Footer