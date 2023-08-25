import CountryIcon from "./CountryIcon"
import { logoHandler } from "../Utils/TeamLogoHandler";
import { Team, Pilot } from "../Utils/Types";
import { useContext } from "react";
import { Context } from "./Context";

const PilotCard = ({firstName, lastName, number, team, points, country, image}: Pilot) => {
   const { increasePoints, decreasePoints } = useContext(Context);

   const increase = () => increasePoints(number);
   const decrease = () => decreasePoints(number);
   
   return (
      <div className="bg-white w-[65%] flex flex-row justify-between items-center mx-auto mt-[3%] rounded-[15px]">
         <img className="w-[30%]" src={logoHandler(team as Team)}></img>
         <img className="w-[42.4%]" src={image}></img>
         <div className="flex flex-col justify-center items-center gap-5 mr-5 w-[27%]">
            <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-black">
               <p className="text-xl font-bold">1</p>
            </div>
            <p className="text-2xl font-bold">{`${firstName} ${lastName}`}</p>
            <span className="flex justify-center items-center gap-3">
               <span className="text-2xl">
                  <CountryIcon country={country} />
               </span>
               <p className="text-lg font-bold">{number}</p>
            </span>
            <div>
               <p className="text-lg font-bold">{`Points: ${points}`}</p>
               <div className="flex justify-center items-center gap-2 mt-1">
                  <button
                     className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-black"
                     onClick={increase}
                  >
                     <span className="font-bold mb-[10%]">+</span>
                  </button>
                  <button
                     className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-black"
                     onClick={decrease}
                  >
                     <span className="font-bold mb-[10%]">-</span>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default PilotCard;
