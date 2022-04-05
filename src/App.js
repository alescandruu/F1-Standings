import React from 'react'
import { useEffect, useState } from "react";
import "./App.css";
import Pilot from "./components/Pilot";
import { mockData } from "./mockData";
import logo from "./images/logo.png";

const sortFunc = (a,b) => {
   return b.points - a.points;
};

function App() {
   const [data, setData] = useState(mockData.sort(sortFunc));

   const bestTeam = () => {
      let teams = data.map((item, lastIndex) => {
         let firstIndex = data.findIndex((pilot) => pilot.team === item.team);
         if (firstIndex < lastIndex) {
            let team = {
               name: item.team,
               first: firstIndex,
               last: lastIndex,
               points: data[firstIndex].points + data[lastIndex].points,
            };
            return team;
         }
      });
      const filteredTeams = teams.filter(function (elem) {
         return elem !== undefined;
      });
      filteredTeams.sort(function (a, b) {
         return b.points - a.points;
      });
      return filteredTeams[0];
   };

   const addPoints = (pilotNumber, operation) => {
      const newData = data.map((pilot) => {
         if (pilot.number === pilotNumber && operation === "increase") {
            pilot.points += 5;
         } else if (pilot.number === pilotNumber && operation === "decrease") {
            pilot.points -= 5;
         }
         return pilot;
      });
      setData(newData);
      setTimeout(() => {const newData = data.sort(sortFunc); setData(newData)}, 900);
   };


   return (
      <div className="App">
         <img src={logo} alt="" className="f1Logo" />
          <Pilot
            key={'bestTeamCard'}
            bestTeam={true}
            teamName={bestTeam().name}
            firstPilotImage={data[bestTeam().first].image}
            secondPilotImage={data[bestTeam().last].image}
            firstPilot={data[bestTeam().first].firstName + " " + data[bestTeam().first].lastName}
            secondPilot={data[bestTeam().last].firstName + " " + data[bestTeam().last].lastName}
            points={bestTeam().points}
         />
         <div className="standings">
            {data.map((pilot, index) => (
               <Pilot
                  key={pilot.number}
                  bestTeam={false}
                  position={index + 1}
                  firstPilot={pilot.firstName + " " + pilot.lastName}
                  team={pilot.team}
                  firstPilotImage={pilot.image}
                  country={pilot.country}
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
