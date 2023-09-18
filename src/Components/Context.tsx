import { createContext, useState, ReactNode } from "react";
import { mockData } from "../MockData";
import { ContextData } from "../Utils/Types";

mockData.sort((x, y) => y.points - x.points);

const DefaultContextData: ContextData = {
   generalStandings: [],
   raceStandings: [],
   // increasePoints: {},
   // decreasePoints: {},
};

export const Context = createContext(DefaultContextData);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
   const [generalStandings, setGeneralStandings] = useState(mockData);
   const [raceStandings, setRaceStandings] = useState(mockData);

   // const increasePoints = (number: number) => {
   //    const newData = data
   //       .map((pilot) => {
   //          if (pilot.number === number)
   //             return { ...pilot, points: pilot.points + 1 };
   //          return pilot;
   //       })
   //       .sort((x, y) => y.points - x.points);
   //    setData(newData);
   // };

   // const decreasePoints = (number: number) => {
   //    const newData = data
   //       .map((pilot) => {
   //          if (pilot.number === number)
   //             return { ...pilot, points: pilot.points - 1 };
   //          return pilot;
   //       })
   //       .sort((x, y) => y.points - x.points);
   //    setData(newData);
   //    setData(newData);
   // };

   return (
      <Context.Provider value={{ generalStandings, raceStandings }}>
         {children}
      </Context.Provider>
   );
};
