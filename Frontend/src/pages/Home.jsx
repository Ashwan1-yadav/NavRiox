import FuturisticHero from '@/components/blocks/hero-futuristic'
import React from 'react'
import Hero from "@/components/ui/saa-s-template";
import { PremiumTestimonials } from '@/components/ui/premium-testimonials';
import { PricingCard } from '@/components/ui/dark-gradient-pricing';


const Home = () => {
  return (
    <div>
      <FuturisticHero />
      <Hero />
      <PremiumTestimonials/>
    </div>
  )
}

export default Home