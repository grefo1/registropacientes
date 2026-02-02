import { pool } from "../config/coneccion";

export const crearUsuario = async (email: string, contraseñaHash: string) => {
  await pool.query("INSERT INTO usuariosAuth(email, contraseña) VALUES (?,?)", [
    email,
    contraseñaHash,
  ]);
};

export const traerContraseña = async (email: string) => {
  try {
    const [rows]: any = await pool.query(
      "SELECT contraseña FROM usuariosAuth WHERE email = ?",
      [email]
    );

    if (rows.length === 0) return null;

    return rows[0].contraseña;
  } catch (error) {
    console.error({ error: "No se puede traer el email" });
  }
};
