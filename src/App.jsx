import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import List from './components/List';
import data from './data';
function App() {
 
  return (
    <>
    <Navbar />
    <Hero />
    <List data= {data}/>
    </>
  )
}

export default App
