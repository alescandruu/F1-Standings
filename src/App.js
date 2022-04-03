import { useEffect, useState } from "react";
import "./App.css";
import Pilot from "./components/Pilot";
import { mockData } from "./mockData";
// import Standings from "./components/Standings";

function App() {
   const [data, setData] = useState(mockData);

   data.sort(function (a, b) {
      return b.points - a.points;
   });

   const addPoints = (pilotNumber, operation) => {
      const newData = data.map((pilot) => {
         if(pilot.number === pilotNumber && operation === "increase") {
            pilot.points ++;
         } else if(pilot.number === pilotNumber && operation === "decrease" && pilot.points > 0) {
            pilot.points --;
         }
         return pilot;
      })
      setData(newData);
   }

   return (
      <div className="App">
         {/* <Standings pilots={pilots} /> */}
         <div className="standings">
            {data.map((pilot, index) => (
               <Pilot
                  key={pilot.number}
                  position={index + 1}
                  name={pilot.firstName + " " + pilot.lastName}
                  team={pilot.team}
                  points={pilot.points}
                  increaseFunc={() => addPoints(pilot.number, "increase")}
                  decreaseFunc={() => addPoints(pilot.number, "decrease")}
               />
            ))}
         </div>
      </div>
   );
}

export default App;
