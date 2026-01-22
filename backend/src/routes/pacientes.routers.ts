import { getPacientes, getPacientePorId } from "../controllers/pacientes.controllers";
import { Router } from "express"

const router = Router();

router.get("/", getPacientes);
router.get("/:id", getPacientePorId);

export default router;
