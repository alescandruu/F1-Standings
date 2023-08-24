export type Pilot = {
   firstName: string;
   lastname: string;
   number: number;
   team: string;
   points: number;
   country: string;
   image: string;
};

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
