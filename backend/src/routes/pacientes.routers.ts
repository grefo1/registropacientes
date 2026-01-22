import { getPacientes, getPacientePorId, ingresarPaciente } from "../controllers/pacientes.controllers";
import { Router } from "express"

const router = Router();

router.get("/", getPacientes);
router.get("/:id", getPacientePorId);
router.post("/", ingresarPaciente);

export default router;
