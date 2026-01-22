import express, { Request, Response } from "express";
import { findAll, findPaciente, ingresarPacienteModel } from "../model/paciente.model";

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

  if (isNaN(id)) {
    return res.status(400).json({ error: "ID invalido" })
  }

  try {
    const pacientes = await findPaciente(id)
    res.json(pacientes)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener pacietes" })
  }
}

export const ingresarPaciente = async (req: Request, res: Response) => {
  const { nombre, nombre2, apellido, domicilio, usCoop } = req.body;

  if (!nombre || !apellido || !domicilio || !usCoop) {
    return res.status(400).json({ error: "Faltan datos obligatorios" });
  }

  try {
    const paciente = await ingresarPacienteModel({
      nombre,
      nombre2,
      apellido,
      domicilio,
      usCoop,
    })

    res.status(201).json(paciente);
  } catch (error) {
    res.status(500).json({ error: "Error al crear paciente" });
  }
}
