import "dotenv/config";
import express, { json, Request, Response } from "express";
import pacientes from "./routes/pacientes.routers";
import cors from "cors";

const app = express();
const port: number = 3000;

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
}));

app.use("/", pacientes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hola mundo desde back-end")

})

app.listen(port, () => {
  console.log(`Servidor corriendo en localhots:${port}`)
})

