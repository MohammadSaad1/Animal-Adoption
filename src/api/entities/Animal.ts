type Gender = "Male" | "Female";
type Status = "Adopted" | "Unadopted" | "Booked";
type Type = "Cat" | "Dog";

export interface Animal {
  id: number;
  type: Type
  name: string;
  sex: Gender;
  breed: string;
  birth: string;
  photo: string;
  status: Status;
  note?: string;
}
