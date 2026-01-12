import { getPacientes, getInfoPacientes } from "../controllers/pacientes.controllers";
import { Router } from "express"

const router = Router();

router.get("/", getPacientes);
router.get("/info", getInfoPacientes);

export default router;
