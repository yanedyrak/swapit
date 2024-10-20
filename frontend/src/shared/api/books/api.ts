import { baseInstance } from "../base";

export const getBooks = async () => (await baseInstance.get("/books", {})).data;
