import { Pilot } from "./Types"

export const getMockDataIdentifiers = (pilots: Pilot[]) => {
    return pilots.map(pilot => pilot.number);
}