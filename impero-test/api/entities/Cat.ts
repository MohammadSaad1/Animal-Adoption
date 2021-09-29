import { Animal } from "./Animal";

type Levels = 1 | 2 | 3 | 4;

export interface Cat extends Animal {
  meowsPerDay: number;
  fluffynessLevel: Levels;
}
