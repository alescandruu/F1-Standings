import { useBestTeamHandler } from "../Utils/useBestTeamHandler";
import { logoHandler } from "../Utils/TeamLogoHandler";
import { Team } from "../Utils/Types";

const TeamCard = () => {
   const {name, points, firstPilotName, firstPilotImage, secondPilotName, secondPilotImage} = useBestTeamHandler();


   return (
      <div className="bg-white w-[120%] flex flex-row justify-between mx-auto mt-[50%] rounded-[12px]">
         <img className="w-[27%]" src={logoHandler(name as Team)}></img>
         <div className="flex flex-col justify-between">
            <p className="text-base font-bold">{`Total points: ${points}`}</p>
            <div className="flex justify-around">
               <div className="flex flex-col justify-center items-center">
                  <p className="text-base font-bold">{firstPilotName}</p>
                  <img className="w-[75%]" src={firstPilotImage}></img>
               </div>
               <div className="flex flex-col justify-between items-center">
                  <p className="text-base font-bold">{secondPilotName}</p>
                  <img className="w-[75%]" src={secondPilotImage}></img>
               </div>
            </div>
         </div>
      </div>
   );
}

export default TeamCard;
