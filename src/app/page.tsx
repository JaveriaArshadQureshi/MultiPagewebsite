'use client';
import HeroSection from "./components/HeroSection";
import AOS from  'aos';
import 'aos/dist/aos.css';
import  { useEffect } from 'react'
import Product from "./components/Product";





export default function Home() {
  useEffect(() => {
    AOS.init({
      easing:"ease-out-back",
      duration: 1200,
      delay:100,
      mirror: true,
      anchorPlacement:"bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      
    <HeroSection />
    <Product />
    
    
    </div>
  );
}
