import { useRef, useState, useEffect } from 'react';
import Slider from './slider';
import BarChart from './barchart';
import { FaCheck } from "react-icons/fa";

type FooterProps = {
    goals: boolean[];  
    setGoals: React.Dispatch<React.SetStateAction<boolean[]>>;
  };

export default function FirsPage({ goals,setGoals}: FooterProps) {
  
    const completedCount = goals.filter((goal) => goal === true).length;
  return (
    <><div className="flex flex-row gap-4 m-4 px-4 py-2 bg-gradient-to-r from-[#78A5CF] to-[#187BD8] rounded-2xl">
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

      <Slider goals={goals} setGoals={setGoals} />
      <div className="bg-[#282828] flex flex-col gap-4 mt-4 mx-4 rounded-lg pt-4 pb-4">
        <div className="w-11/12 h-auto mx-auto">
          <BarChart />
        </div>
      </div>
      </>  );
}
