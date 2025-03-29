import { Router } from "express";
import { getSkillSteps } from "../controllers/step.controller.js";

const router = Router();

router.get("/:skillId", getSkillSteps);

export default router;
