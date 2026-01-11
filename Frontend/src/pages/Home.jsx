import FuturisticHero from '@/components/blocks/hero-futuristic'
import React from 'react'
import Hero from "@/components/ui/saa-s-template";
import { PremiumTestimonials } from '@/components/ui/premium-testimonials';
import Footer4Col  from "@/components/ui/footer-column";
import GetInTouch from "@/Components/GetInTouch";

const Home = () => {
  return (
    <div>
      <FuturisticHero />
      <Hero />
      <PremiumTestimonials/>
      <GetInTouch/>
      <hr />
      <Footer4Col/>
    </div>
  )
}

export default Home