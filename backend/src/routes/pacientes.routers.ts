import {
  getPacientes,
  getPacientePorId,
  ingresarPaciente,
  borrarPacienteId,
} from "../controllers/pacientes.controllers";
import registroAuth from "../controllers/crearUsuario.controller";
import { Router } from "express";

const router = Router();

router.get("/pacientes", getPacientes);
router.get("/pacientes/:id", getPacientePorId);
router.post("/pacientes", ingresarPaciente);
router.delete("/pacientes/:id", borrarPacienteId);
router.post("/register", registroAuth);

export default router;
