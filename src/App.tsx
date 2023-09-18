import backgroundImage from "./track.jpg";
import { useContext } from "react";
import PilotCard from "./Components/PilotCard";
import TeamCard from "./Components/TeamCard";
import { Context } from "./Components/Context";
import SortableStandings from "./Components/SortableStandings";

function App() {
   const { generalStandings } = useContext(Context);

   return (
      <div
         style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
         }}
         className="flex justify-end h-screen w-screen overflow-x-hidden"
      >
         <div className="w-[30%] text-center mt-0 fixed left-20">
            <TeamCard />
            <SortableStandings />
         </div>
         <div className="w-[60%] text-center mt-10">
            <div className="flex flex-col">
               {generalStandings.map((pilot, index) => (
                  <PilotCard
                     key={pilot.number}
                     firstName={pilot.firstName}
                     lastName={pilot.lastName}
                     number={pilot.number}
                     points={pilot.points}
                     country={pilot.country}
                     team={pilot.team}
                     image={pilot.image}
                     position={index+1}
                  />
               ))}
            </div>
         </div>
      </div>
   );
}

export default App;
