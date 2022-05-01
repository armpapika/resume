import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Exp from './components/exp/Exp'
import Services from './components/services/Services'
import Ican from './components/ican/Ican'
import Test from './components/test/Test'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Services />
        <Exp />
        <Ican />
        <Test />
        <Contact />
        <Footer />
       
    </>
  )
}

export default App