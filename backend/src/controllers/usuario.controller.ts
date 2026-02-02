import { Response, Request } from "express";
import bcrypt from "bcrypt";
import { crearUsuario, traerContraseña } from "../model/usuarios.model";

export async function registroAuth(req: Request, res: Response) {
  const { email, contraseña } = req.body;
  try {
    const hashContraseña = await bcrypt.hash(contraseña, 10);
    await crearUsuario(email, hashContraseña);
    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ error: "Error al crear Usuario" });
  }
}

export async function loginAuth(req: Request, res: Response) {
  const { email, contraseña } = req.body;

  try {
    const contraseñaDb = await traerContraseña(email);

    if (!contraseñaDb) {
      return res.status(400).json({ error: "El usuario no existe" });
    }

    const ok = await bcrypt.compare(contraseña, contraseñaDb);

    console.log(ok);

    if (!ok) {
      return res.status(401).json({ error: "Contraseña incorrecta" });
    }

    res.json({ ok: true });
    console.log(ok);
  } catch (error) {
    res.status(500).json({ error: "Error en el login" });
  }
}
