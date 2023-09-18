import CountryIcon from "./CountryIcon";
import { logoHandler } from "../Utils/TeamLogoHandler";
import { Team, PilotStats } from "../Utils/Types";

const PilotCard = ({
   firstName,
   lastName,
   number,
   team,
   points,
   country,
   image,
   position,
}: PilotStats) => {
   return (
      <div className="bg-white w-[65%] flex flex-row justify-between items-center mx-auto mt-[3%] rounded-[15px]">
         <img className="w-[30%]" src={logoHandler(team as Team)}></img>
         <img className="w-[42.4%]" src={image}></img>
         <div className="flex flex-col justify-center items-center gap-5 mr-5 w-[27%]">
            <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-black">
               <p className="text-xl font-bold">{position}</p>
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
            </div>
         </div>
      </div>
   );
};

export default PilotCard;
