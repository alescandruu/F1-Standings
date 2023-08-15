import Pilot from "./Components/Pilot";
import Team from "./Components/Team";
import backgroundImage from "./track.jpg";
import { mockData } from "./MockData";

function App() {
   return (
      <div
         style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
         }}
         className="flex justify-end h-screen w-screen overflow-x-hidden"
      >
         <div className="w-[30%] text-center mt-10 fixed left-20">
            <Team />
         </div>
         <div className="w-[60%] text-center mt-10">
            <div className="flex flex-col">
               {mockData.map((pilot) => (
                  <Pilot
                     firstName={pilot.firstName}
                     lastname={pilot.lastName}
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
