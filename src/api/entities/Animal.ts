import { Cat } from "./Cat";
import { Dog } from "./Dog";

type Gender = "male" | "female";
type Status = "adopted" | "unadopted" | "booked";

export interface Animal {
  id: number;
  type: Cat | Dog;
  name: string;
  sex: Gender;
  breed: string;
  birth: string;
  photo: string;
  status: Status;
  note?: string;
}
