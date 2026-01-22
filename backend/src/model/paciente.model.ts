import { pool } from "../config/coneccion";

export const findAll = async () => {
  const [rows] = await pool.query("SELECT * FROM usuarios");
  return rows;
}

export const findPaciente = async (id: number) => {
  const [rows] = await pool.query(
    "SELECT * FROM usuarios WHERE id = ?",
    [id]
  );
  return rows;
}
