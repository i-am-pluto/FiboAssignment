"use client";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  BarElement,
  LinearScale,
  BarController,
} from "chart.js";

Chart.register(CategoryScale, BarElement, LinearScale, BarController);






const HomePage = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [goals, setGoals] = useState([false, false, false, false, false]);

  console.log(goals);

  const completedCount = goals.filter((goal) => goal === true).length;

  const data = {
    labels: ["28/4", "30/4", "2/5", "5/5", "11/5", "15/5", "22/5"],
    datasets: [
      {
        label: "Percentage",
        data: [92, 100, 98, 90, 84, 82, 80],
        backgroundColor: "rgb(90,146,203)",
        barThickness: 15,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const, // Ensuring the value is one of the specified allowed types
      },
      title: {
        display: true,
        text: "Performance Chart",
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // This will hide the grid lines for the x-axis
        },
      },
      y: {
        grid: {
          display: false, // This will hide the grid lines for the y-axis
        },
      },
    },
  };

  const [left, setLeft] = useState(16); 

  return (
    <div className="bg-[#212121] h-screen w-screen m-0 p-0">
      <div className="flex flex-row gap-4 m-4 px-4 py-2 bg-gradient-to-r from-[#78A5CF] to-[#187BD8] rounded-2xl">
        <div className="flex flex-shrink justify-center items-center">
          <img src="imgs/progress.png" className="h-12 w-12 mx-2" />
        </div>
        <div className="flex flex-col flex-grow gap-1">
          <p className="text-white">Your Daily Goal Almost Done</p>
          <p className="text-slate-300">
            {completedCount} of {goals.length} completed
          </p>
          <div className="relative h-7 mt-2">
            <div className="absolute left-0 top-0 w-full h-[3px] bg-[#4595E0]"></div>
            <div
              className="absolute left-0 top-0 bg-white h-[3px]"
              style={{ width: `${(completedCount * 100) / goals.length}%` }}
            ></div>
            <p className="absolute right-0 bottom-0 text-white">
              {(completedCount * 100) / 5}%
            </p>
          </div>
        </div>
      </div>
      <div className="flex-row flex justify-between mx-4 my-6">
        <p className="text-base text-white">Today's Goal</p>
        <div className="flex justify-center items-center h-7 w-7">
          <img
            src="https://s3-alpha-sig.figma.com/img/210a/8de5/6f295743678d95c92f172e86e2102679?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lqaScr0cZULLFRy0Rhb10SJBfTyMah78dAgRkLCntQYtTPPbaXppBnjp-6pO2pcozux3hIpAs0Sz1kLhPS-7L97KnHDk0RJDph-OVM-zYJwZmBPyz5Pjb6~RVNjvuQowImy2T-T4GKCWTGaMdZcX06vOysrW6OwWEALnDO7P5NdT~ffeNF6l2Pk9wE-DlNznoDnrovqnTcWp8AFDg8NN--lbW2srl4WxwOjL2I2nGNSp03VAcRJkQuj0uoFQAY4T2qItw3wHiv2XxXT9nrxJynbWuVpocKQs06YSVYliERKCjPnBM5bia6Lh3ACdLj4rVaN8bAmlW7nIWLlKGnSmTQ__"
            alt="Descriptive Text for Image"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 mx-4">
        {[
          {
            icon: "imgs/weight.png",
            text: "Workout for 20 mins",
            color: `#9E4CB8`,
          },
          {
            icon: "imgs/fire.png",
            text: "Read book for 15 mins",
            color: "#D15439",
          },
          {
            icon: "imgs/steps.png",
            text: "30 mins walk",
            color: "#81B47D",
          },
          {
            icon: "imgs/moon.png",
            text: "Sleep at 11 sharp",
            color: "#63A7A7",
          },
          {
            icon: "imgs/drop.png",
            text: "Drink 3L water",
            color: "#5A92CB",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#282828] flex flex-row justify-between gap-2 items-center p-2 rounded-lg"
          >
            <div className="flex justify-center items-center m-2 p-3 rounded-lg bg-[#3D3D3D]">
              <img src={item.icon} />
            </div>
            <div className="flex-grow">
              <p className="text-white">{item.text}</p>
            </div>
            <button
              style={{
                backgroundColor: goals[index] ? item.color : "#282828",
                borderColor: goals[index] ? "transparent" : "white",
                border: "1px solid",
              }}
              className={`p-3 rounded-lg`}
              onClick={() => {
                console.log("clicked");
                setGoals((prevGoals) => {
                  const newGoals = [...prevGoals]; // Make a copy of the previous goals array
                  newGoals[index] = !newGoals[index]; // Toggle the boolean at the specific index
                  console.log(newGoals); // Log the new array to see the change
                  return newGoals; // Return the new array to update the state
                });
              }}
            >
              <FaCheck />
            </button>
          </div>
        ))}
      </div>
      <div className="relative bg-[#D15439] h-12 rounded-full px-4 flex items-center mx-4 my-6 overflow-hidden">
      {/* Track button as a draggable circle */}
      <div
        className="absolute bg-white text-[#D15439] rounded-full h-10 w-10 flex items-center justify-center cursor-pointer select-none"
        style={{ left: `${left}px` }}
        draggable="true"
        onDrag={(event) => {
          if (event.clientX - 50 > 16 && event.clientX - 50 < 260) { // Assuming container width minus padding
            setLeft(event.clientX - 50);
          }
        }}
        onDragEnd={() => setLeft(16)} // Reset position on drag end
      >
        <span className="text-xs font-semibold uppercase">Track</span>
      </div>
      {/* Swipe text */}
      <p className="text-white text-sm ml-14">Swipe to track all</p>
      {/* Chevron icons */}
      <span className="text-white text-lg ml-auto">»»»</span>
    </div>


      <div className="bg-[#282828] flex flex-col gap-4 mt-4 mx-4 rounded-lg pt-4 pb-4">
        <div className="w-11/12 h-auto mx-auto">
          <Bar data={data} options={options} />
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 p-4 flex justify-between bg-[#242424]">
        {[
          {
            icon1: "redIcons/page1.png",
            icon2: "icons/page1.png",
            name: "Page 1",
          },
          {
            icon1: "redIcons/page2.png",
            icon2: "icons/page2.png",
            name: "Page 2",
          },
          {
            icon1: "redIcons/page3.png",
            icon2: "icons/page3.png",
            name: "Page 3",
          },
          {
            icon1: "redIcons/page4.png",
            icon2: "icons/page4.png",
            name: "Page 4",
          },
        ].map((item, index) => (
          <div
            className="flex flex-col gap-1 items-center"
            onClick={() => setPageIndex(index)}
          >
            <img
              src={pageIndex === index ? item.icon1 : item.icon2}
              className="w-5 h-5" // This sets the width and height to 4rem (64px by 64px)
              alt="Descriptive Text"
            />
            <p
              className={`text-sm ${
                pageIndex === index ? "text-[#D15439]" : "text-[#6C6C6C]"
              }`}
            >
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
