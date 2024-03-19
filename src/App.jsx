import { useState } from 'react'
import './App.css'
import Brand from './components/brand/Brand'
import Cta from './components/cta/Cta'
import Navbar from './components/navbar/Navbar'
import Blog from './containers/blog/Blog'
import Features from './containers/features/Features'
import Footer from './containers/footer/Footer'
import Header from './containers/header/Header'
import Possibility from './containers/possiblilty/Possibility'
import What from './containers/whatGPT3/What'
import Bard from './components/bard/Bard'
import Main from './components/main/Main'

function App() {

  return (
    <div className="">
    <div className="gradient__bg">
      {/* <Navbar></Navbar>
      <Header></Header>
      <Brand></Brand>
      <What></What>
      <Features></Features>
      <Possibility></Possibility>
      <Cta></Cta>
      <Blog></Blog>
      <Footer></Footer> */}
    </div>
    <div className="second">
    <Bard></Bard>
    <Main></Main>
    </div>
    </div>

  )
}

export default App
