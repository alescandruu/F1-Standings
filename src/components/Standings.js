import React from "react";
import Pilot from "./Pilot";

function Standings(props) {
   const { pilots } = props;

   return (
      <div className="standigs">
         {pilots.map((pilot, index) => (
            <Pilot
               key={index + 1}
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
