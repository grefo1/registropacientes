
import express, { Request, Response } from "express";
const app = express();
const port: number = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hola mundo desde back-end")

})

app.listen(port, () => {
  console.log(`Servidor corriendo en localhots:${port}`)
})
