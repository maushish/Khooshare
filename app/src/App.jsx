import React from "react"
import Nav from "./components/Nav"
import Herosection from "./components/Herosection"
import { Routes, Route } from "react-router-dom"
import Support from "./components/Support"
import Transaction from "./components/Transaction"


const  App = ()=>
{
  return(
    <>
    
      <Nav/>
      <Routes>
        <Route path="/" element={<Herosection/>}/>
        <Route path="/Support" element={<Support/>}/>
        <Route path="/Transaction" element={<Transaction/>}/>




      </Routes>
     
  
    </>

  )
}
export default App