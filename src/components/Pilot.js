import React from "react";
import "./Racer.css";

function Pilot(props) {
   const { position, name, team, number, country, points, increaseFunc, decreaseFunc } = props;

   return (
      <div className="racer">
         <p>{position}</p>
         <p>{name}</p>
         <p>{team}</p>
         <p>{number}</p>
         <p>{country}</p>
         <p>{points}</p>
         <button onClick={increaseFunc}>+</button>
         <button onClick={decreaseFunc}>-</button>
      </div>
   );
}

export default Pilot;
