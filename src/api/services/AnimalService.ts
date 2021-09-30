import axios, { AxiosResponse } from "axios";
import { Animal } from "../entities/Animal";
import { PartialUpdateAnimal } from "../requests/PartialUpdateAnimal";
import { applyOptions, Options } from "../support/applyOptions";

const root = "http://localhost:3000/animals";

export const getAnimals = (options?: Options): Promise<AxiosResponse<Animal[]>> => {
  return axios.get(getRootEndpoint('', options));
};

export const partialUpdateAnimal = (id: number, request: PartialUpdateAnimal): Promise<AxiosResponse<Animal>> => {
  return axios.patch(getRootEndpoint(id), request);
};

export const deleteAnimal = (id: number): Promise<AxiosResponse<void>> => {
  return axios.delete(getRootEndpoint(id));
};

const getRootEndpoint = (branch?: string | number, options?: Options) => {
  if (branch) {
    return  applyOptions(`${root}/${branch}`, options)
  }

  return applyOptions(root, options)
}