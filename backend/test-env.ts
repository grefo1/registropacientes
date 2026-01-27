import dotenv from "dotenv";

dotenv.config({ path: "/home/grefo/proyecto/backend/.env" });

console.log("DB_USER =", process.env.DB_USER);
console.log("DB_HOST =", process.env.DB_HOST);

