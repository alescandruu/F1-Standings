export type Pilot = {
   firstName: string;
   lastName: string;
   number: number;
   team: string;
   points: number;
   image: string;
   country: string;
};

export type PilotStats = Pilot & {
   position: number;
}

export type Team =
   | "Mercedes AMG F1"
   | "RED BULL RACING"
   | "MCLAREN RACING"
   | "ALPINE F1"
   | "ASTON MARTIN F1 TEAM"
   | "SCUDERIA FERRARI"
   | "SCUDERIA ALPHA TAURI"
   | "ALFA ROMEO RACING"
   | "HAAS F1"
   | "WILLIAMS RACING";

export type ContextData = {
   generalStandings: Pilot[];
   raceStandings: Pilot[];
   // increasePoints: any;
   // decreasePoints: any;
};

export type TeamStats = {
   name: string;
   points: number;
};

export type BestTeamStats = {
   name: string;
   points: number;
   firstPilotName: string;
   firstPilotImage: string;
   secondPilotName: string;
   secondPilotImage: string;
}