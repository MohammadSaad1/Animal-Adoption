import axios, { AxiosResponse } from "axios";
import { Animal } from "../entities/Animal";

const url = "http://localhost:3000/animals";

export const getAnimals = (): Promise<AxiosResponse<Animal[]>> => {
  return axios.get(url);
};

export const patchAnimal = (id: string): Promise<AxiosResponse<Animal>> => {
  return axios.patch(url);
};
