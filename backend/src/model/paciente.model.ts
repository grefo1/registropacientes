import {pool} from "../config/coneccion";

export const findAll = async() =>  {
    const[rows] = await pool.query("SELECT * FROM usuarios");
    return rows;
}