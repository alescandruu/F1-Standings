import React from 'react'

function PointsController() {
  return (
     <div className="flex justify-center items-center gap-2 mt-1">
        <button className="w-6 h-6 rounded-full bg-white flex justify-center items-center">
           <span className="text-stone-500 font-bold mb-[10%]">+</span>
        </button>
        <button className="w-6 h-6 rounded-full bg-white flex justify-center items-center">
           <span className="text-stone-500 font-bold mb-[10%]">-</span>
        </button>
     </div>
  );
}

export default PointsController