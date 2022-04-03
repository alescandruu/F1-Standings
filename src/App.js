import { useEffect, useState } from "react";
import "./App.css";
import Pilot from "./components/Pilot";
import { mockData } from "./mockData";

function App() {
   const [pilots, setPilots] = useState(mockData);

   useEffect(() => {
      let sortedPilots = pilots.sort(function (a, b) {
         return b.points - a.points;
      });
      console.log(sortedPilots);
   });

   return (
      <div className="App">
         {pilots.map((pilot, index) => (
            <Pilot
               key={index+1}
               position={index + 1}
               name={pilot.firstName + " " + pilot.lastName}
               team={pilot.team}
               points={pilot.points}

            />
         ))}
      </div>
   );
}

export default App;
