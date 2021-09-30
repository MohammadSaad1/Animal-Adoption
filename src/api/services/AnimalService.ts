import axios, { AxiosResponse } from "axios";
import { Animal } from "../entities/Animal";
import { PartialUpdateAnimal } from "../requests/PartialUpdateAnimal";

const root = "http://localhost:3000/animals";

export const getAnimals = (): Promise<AxiosResponse<Animal[]>> => {
  return axios.get(getRootEndpoint());
};

export const partialUpdateAnimal = (id: number, request: PartialUpdateAnimal): Promise<AxiosResponse<Animal>> => {
  return axios.patch(getRootEndpoint(id), request);
};

export const deleteAnimal = (id: number): Promise<AxiosResponse<void>> => {
  return axios.delete(getRootEndpoint(id));
};

const getRootEndpoint = (branch?: string | number) => {
  if (branch) {
    return `${root}/${branch}`
  }

  return root
}