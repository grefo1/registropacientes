import express, { Request, Response } from "express";

export const getPacientes = (req: Request, res: Response) => {
  res.json({ message: " Lista usuarios" });
}

export const getInfoPacientes = (req: Request, res: Response) => {
  res.json({ message: "Info pacientes" });
}
