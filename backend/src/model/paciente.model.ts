import { pool } from "../config/coneccion";
import { ResultSetHeader } from "mysql2";

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

export const ingresarPacienteModel = async (data: {
  nombre: string;
  nombre2?: string;
  apellido: string;
  domicilio: string;
  usCoop: number;
}) => {
  const { nombre, nombre2, apellido, domicilio, usCoop } = data;

  const [result] = await pool.query<ResultSetHeader>(
    "INSERT INTO usuarios (nombre, nombre2, apellido, domicilio, usCoop) VALUES (?,?,?,?,?)",
    [nombre, nombre2, apellido, domicilio, usCoop]
  );

  return {
    id: result.insertId,
    nombre,
    nombre2,
    apellido,
    domicilio,
    usCoop,
  };
};
