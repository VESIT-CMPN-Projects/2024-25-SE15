import { Router } from "express";
import {
    getAllSkills,
    getSkillById,
} from "../controllers/skill.controller.js";


const router = Router();

router.route("/").get(getAllSkills);
router.route("/:id").get(getSkillById);

export default router;