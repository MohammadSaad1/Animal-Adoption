import { Gender, Status, Type } from "../entities/Animal";
import { Levels } from "../entities/Cat";

export interface PartialUpdateAnimal {
    id?: number
    type?: Type
    name?: string
    sex?: Gender
    breed?: string
    birth?: string
    photo?: string
    status?: Status
    note?: string
    meowsPerDay?: number;
    fluffynessLevel?: Levels;
    goodBoy?: boolean
    tailLength?: number
}