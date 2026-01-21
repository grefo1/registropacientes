import "dotenv/config"
import express, { json, Request, Response } from "express";
import pacientes from "./routes/pacientes.routers";


const app = express();
const port: number = 3000;

app.use(express.json())

app.use("/user", pacientes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hola mundo desde back-end")

})

export default app;

app.listen(port, () => {
  console.log(`Servidor corriendo en localhots:${port}`)
})
  