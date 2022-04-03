import React from "react";
import "./Pilot.css";

function Pilot(props) {
   const {
      bestTeam,
      position,
      teamName,
      firstPilot,
      secondPilot,
      team,
      number,
      country,
      points,
      increaseFunc,
      decreaseFunc,
   } = props;

   return (
      <>
         {bestTeam ? (
            <div className="bestTeamCard">
               <p>{team}</p>
               <p>{teamName}</p>
               <p>{firstPilot}</p>
               <p>{secondPilot}</p>
               <p>{points}</p>
            </div>
         ) : (
            <div className="racer">
               <p>{position}</p>
               <p>{firstPilot}</p>
               <p>{team}</p>
               <p>{number}</p>
               <p>{country}</p>
               <p>{points}</p>
               <button onClick={increaseFunc}>+</button>
               <button onClick={decreaseFunc}>-</button>
            </div>
         )}
      </>
   );
}

export default Pilot;
