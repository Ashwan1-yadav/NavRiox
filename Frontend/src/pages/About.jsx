import React from 'react'
import { About3 } from "@/components/ui/about-3";
import { Navbar5 } from '../components/ui/navbar-5';


const About = () => {
  return (
    <div>
      <Navbar5/>
      <div className='px-12'>
      <About3/>
      </div>
    </div>
  )
}

export default About