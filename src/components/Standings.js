import React from "react";
import Pilot from "./Pilot";
import "./standings.css";

function Standings(props) {
   const { pilots } = props;

   pilots.sort(function (a, b) {
      return b.points - a.points;
   });

   return (
      <div className="standings">
         {pilots.map((pilot, index) => (
            <Pilot
               key={pilot.number}
               position={index + 1}
               name={pilot.firstName + " " + pilot.lastName}
               team={pilot.team}
               points={pilot.points}
            />
         ))}
      </div>
   );
}

export default Standings;
