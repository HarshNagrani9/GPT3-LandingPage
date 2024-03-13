import { useState } from 'react'
import './App.css'
import Article from './components/article/Article'
import Brand from './components/brand/Brand'
import Cta from './components/cta/Cta'
import Feature from './components/feature/Feature'
import Navbar from './components/navbar/Navbar'
import Blog from './containers/blog/Blog'
import Features from './containers/features/Features'
import Footer from './containers/footer/Footer'
import Header from './containers/header/Header'
import Possibility from './containers/possiblilty/Possibility'
import What from './containers/whatGPT3/What'

function App() {

  return (
    <div className="gradient__bg">
      <Navbar></Navbar>
      <Header></Header>
      <Brand></Brand>
      <What></What>
      <Features></Features>
      <Possibility></Possibility>
      <Cta></Cta>
      <Blog></Blog>
      <Footer></Footer>
    </div>

  )
}

export default App
