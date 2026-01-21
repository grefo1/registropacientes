import express, { Request, Response } from "express";
import { findAll } from "../model/paciente.model";

export const getPacientes = async (req: Request, res: Response) => {
  try {
    const pacientes = await findAll();
    res.json(pacientes);
  } catch (error){
    console.error(error);
    res.status(500).json({error:"Error al obtener pacientes"})
  }
  
}

export const getInfoPacientes = (req: Request, res: Response) => {
  res.json({ message: "Info pacientes" });
}
