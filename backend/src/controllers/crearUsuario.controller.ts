import { Response, Request } from "express";
import bcrypt from "bcrypt";
import crearUsuario from "../model/crearUsuario.model";

async function registroAuth(req: Request, res: Response) {
  const { email, contraseña } = req.body;

  const hashContraseña = await bcrypt.hash(contraseña, 10);

  await crearUsuario(email, hashContraseña);

  res.json({ ok: true });
}

export default registroAuth;
