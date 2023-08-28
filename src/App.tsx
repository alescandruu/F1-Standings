import backgroundImage from "./track.jpg";
import { useContext, useEffect } from "react";
import PilotCard from "./Components/PilotCard";
import TeamCard from "./Components/TeamCard";
import { Context } from "./Components/Context";

function App() {
   const { data } = useContext(Context);

   return (
      <div
         style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
         }}
         className="flex justify-end h-screen w-screen overflow-x-hidden"
      >
         <div className="w-[30%] text-center mt-10 fixed left-20">
            <TeamCard />
         </div>
         <div className="w-[60%] text-center mt-10">
            <div className="flex flex-col">
               {data.map((pilot) => (
                  <PilotCard
                     firstName={pilot.firstName}
                     lastName={pilot.lastName}
                     number={pilot.number}
                     points={pilot.points}
                     country={pilot.country}
                     team={pilot.team}
                     image={pilot.image}
                  />
               ))}
            </div>
         </div>
      </div>
   );
}

export default App;
