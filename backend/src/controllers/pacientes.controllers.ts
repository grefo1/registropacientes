import express, { Request, Response } from "express";
import { findAll, findPaciente } from "../model/paciente.model";

export const getPacientes = async (req: Request, res: Response) => {
  try {
    const pacientes = await findAll();
    res.json(pacientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener pacientes" })
  }
}

export const getPacientePorId = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  try {
    const pacientes = await findPaciente(id)
    res.json(pacientes)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener pacietes" })
  }
}
