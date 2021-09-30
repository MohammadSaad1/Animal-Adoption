import { en } from "./en";

// Cant handle nestation nor props... yet :D 
export const getText = (path: string | number) => en[path]?? path