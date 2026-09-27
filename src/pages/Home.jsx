import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Project from '../components/Project'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Project />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}

export default Home