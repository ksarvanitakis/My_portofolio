import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Experience from './components/exprerience/Experience'
import Nav from './components/nav/Nav'
import Portofolio from './components/portofolio/Portofolio'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'




const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portofolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App