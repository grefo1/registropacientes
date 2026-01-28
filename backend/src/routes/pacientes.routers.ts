import { getPacientes, getPacientePorId, ingresarPaciente, borrarPacienteId } from "../controllers/pacientes.controllers";
import { Router } from "express"

const router = Router();

router.get("/pacientes", getPacientes);
router.get("/pacientes/:id", getPacientePorId);
router.post("/pacientes", ingresarPaciente);
router.delete("/pacientes/:id", borrarPacienteId);

export default router;
