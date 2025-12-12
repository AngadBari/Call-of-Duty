import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import NavBar from './components/NavBar'
import Features from './components/Features'
import Footer from './components/Footer'



const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
    <NavBar/>
    <Hero/>
    <About/>
    <Features/>
    <Footer/>
    </main>
  )
}

export default App