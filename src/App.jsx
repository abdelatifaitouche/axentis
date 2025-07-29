import { useState } from 'react'
import Box from './Box'
import gsap from 'gsap'
import {ScrollTrigger , SplitText} from 'gsap/all'
import Navbar from './components/NavBar'
import Hero from './components/Hero'
import AboutUs from './components/Aboutus'
import Services from './components/Services'
import Team from './components/Team'

gsap.registerPlugin(ScrollTrigger , SplitText)


function App() {


  return (
  <main className='w-full overflow-x-hidden bg-gradient-to-b from-black via-gray-900/50 to-black'>
    <Navbar/>
    <Hero/>
    <AboutUs/>
    <Services/>
    <Team/>
    

   

   
 
  </main>
  )
}

export default App
