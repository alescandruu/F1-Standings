import { Context } from "../Components/Context";
import { useContext, useMemo } from "react";
import { Pilot, TeamStats, BestTeamStats } from "./Types";

export const useBestTeamHandler = () => {
   const { data } = useContext(Context);

   const bestTeam = useMemo(() => {
    const teamStats: TeamStats[] = [];

    data.forEach(( pilot:Pilot ) => {
        const index = teamStats.findIndex(team => team.name === pilot.team);
        if(index >= 0) {
            teamStats[index].points += pilot.points;
            return;
        }
        const newteam: TeamStats = {
           name: pilot.team,
           points: pilot.points,
        };
        teamStats.push(newteam);
    })
    
    teamStats.sort((a, b) => b.points - a.points);
    
    const pilots = data.filter(pilot => {
        if(pilot.team === teamStats[0].name) return pilot;
    })

    const bestTeam: BestTeamStats = {
       name: teamStats[0].name,
       points: teamStats[0].points,
       firstPilotName: `${pilots[0]?.firstName} ${pilots[0]?.lastName}`,
       firstPilotImage: pilots[0]?.image || '',
       secondPilotName: `${pilots[1]?.firstName} ${pilots[1]?.lastName}`,
       secondPilotImage: pilots[1]?.image || ''
    };

    return bestTeam;
   }, [data]);

   return bestTeam;
};
