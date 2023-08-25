import { Team } from "./Types";
const root =
   "https://raw.githubusercontent.com/alescandruu/Formula1Standing/master/src/images/";

export const logoHandler = (team: Team): string => {
   switch (team) {
      case "Mercedes AMG F1":
         return root + "mercedesLogo.png";
      case "ALFA ROMEO RACING":
         return root + "alfaLogo.png";
      case "RED BULL RACING":
         return root + "redBullLogo.png";
      case "MCLAREN RACING":
         return root + "mclarenLogo.png";
      case "ALPINE F1":
         return root + "alpineLogo.png";
      case "ASTON MARTIN F1 TEAM":
         return root + "astonMartinLogo.png";
      case "SCUDERIA FERRARI":
         return root + "ferrariLogo.png";
      case "SCUDERIA ALPHA TAURI":
         return root + "alphaTauriLogo.png";
      case "WILLIAMS RACING":
         return root + "williamsLogo.png";
      case "HAAS F1":
         return root + "haasLogo.png";
      default:
         return root;
   }
};
