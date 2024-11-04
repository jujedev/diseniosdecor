import React from "react";
import Navbar from "./components/Navbar";
import CarouselComponent from "./components/CarouselComponent";

import { CarouselData } from "./mockData/data";

function App() {

  return (
    <>
      <Navbar />
      <div>
        <CarouselComponent images={CarouselData}/>
      </div>
      
    </>
  )
}

export default App
