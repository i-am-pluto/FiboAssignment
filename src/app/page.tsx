"use client";
import React, { useState, useRef, DragEvent,TouchEvent } from "react";
import { FaCheck } from "react-icons/fa";
import BarChart from "../components/barchart";
import Slider from "../components/slider";
import Footer from "../components/footer";
import FirstPage from "../components/firstpage";

const HomePage = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [goals, setGoals] = useState([false, false, false, false, false]);

  console.log(goals);



  
  
  return (
    <div className="bg-[#212121] h-screen w-full m-0 p-0">
      {pageIndex===0 ?(<FirstPage goals={goals} setGoals={setGoals}/>):(
        <>
          {/* Display for pageIndex 1 */}
          <div className="flex h-full items-center justify-center">
            <p className="text-white text-xl">Page {pageIndex+1}</p>
          </div>
        </>
      )}
      <div style={{ height: '8rem', visibility: 'hidden' }}></div>  
      <Footer pageIndex={pageIndex} setPageIndex={setPageIndex}/>
    </div>
  );
};

export default HomePage;


