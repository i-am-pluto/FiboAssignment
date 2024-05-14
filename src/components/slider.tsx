import { useRef, useState, useEffect } from 'react';

type SliderProps = {
    goals: boolean[];  
    setGoals: React.Dispatch<React.SetStateAction<boolean[]>>;
  };

export default function Slider({ goals, setGoals }: SliderProps) {
  const [left, setLeft] = useState<number>(16); 
  const containerRef = useRef<HTMLDivElement>(null);  

  const updatePosition = (clientX: number) => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const newLeft = Math.min(
        Math.max(0, clientX - containerRect.left),  
        containerRect.width - 40  // Prevent moving past the right boundary, assuming 40px is the draggable circle's width
      );
      setLeft(newLeft);

      // Check if the slider is at the right end
      if (newLeft >= containerRect.width - 40) {
        setGoals(goals.map(() => true)); // Set all goals to true when the slider reaches the right end
      }
    }
  };

  const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
    updatePosition(event.clientX);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    event.preventDefault();  // Prevent the default touch screen scrolling behavior
    updatePosition(event.touches[0].clientX);
  };

  const handleDragEnd = () => {
    setLeft(16);  // Reset position on drag end or touch end
  };

  return (
    <div ref={containerRef} className="relative bg-[#D15439] h-12 rounded-full px-4 flex justify-between items-center mx-4 my-6 overflow-hidden">
      {/* Draggable "Track" button */}
      <div
        className="absolute bg-white text-[#D15439] rounded-full h-10 w-10 flex items-center justify-center cursor-pointer select-none"
        style={{ left: `${left}px` }}
        draggable="true"
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
      >
        <span className="text-xs font-semibold uppercase text-[7.5px]">Track</span>
      </div>
      {/* Centered text */}
      <p className="text-white text-sm flex-grow text-center">Swipe to track all</p>
      {/* Invisible spacers and icons */}
      
      <div className="flex items-center space-x-2 ml-[-5vw] w-[40px]">
        <img src="imgs/arrow3.png" alt="Arrow 1" className="h-3 w-3" />
        <img src="imgs/arrow2.png" alt="Arrow 2" className="h-3 w-3" />
        <img src="imgs/arrow1.png" alt="Arrow 3" className="h-3 w-3" />
      </div>
    </div>
  );
}
