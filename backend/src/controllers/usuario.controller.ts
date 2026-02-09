import { Response, Request } from "express";
import bcrypt from "bcrypt";
import { crearUsuario, traerContraseña } from "../model/usuarios.model";
import jwt from "jsonwebtoken"

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

    const token = jwt.sign(
      {
        email: email,
      }, process.env.JWT_SECRET!, { expiresIn: "1h" }

    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Error en el login" });
  }
}
