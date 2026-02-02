import { pool } from "../config/coneccion";

const crearUsuario = async (email: string, contraseñaHash: string) => {
  await pool.query("INSERT INTO usuariosAuth(email, contraseña) VALUES (?,?)", [
    email,
    contraseñaHash,
  ]);
};

export default crearUsuario;
