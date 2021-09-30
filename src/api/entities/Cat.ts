import { Animal } from "./Animal";

export type Levels = 1 | 2 | 3 | 4;

export interface Cat extends Animal {
  meowsPerDay: number;
  fluffynessLevel: Levels;
}
