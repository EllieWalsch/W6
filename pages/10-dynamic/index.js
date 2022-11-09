import { getUsers } from "./api.service.js";

const data = await getUsers();

console.log(data);
