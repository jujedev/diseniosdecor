import React from "react";
import Navbar from "./components/Navbar";


function App() {

  return (
    <div className="relative h-screen">
        <Navbar />
        <div className="pt-16 h-full">
          <img src="../public/images/cocina/cocina_1.jpg" className="h-full object-cover w-full"/>
        </div>
    </div>
  )
}

export default App
