import { Router } from "express";
import { getSkillMarketOpportunities } from "../controllers/market_opportunity.controller.js";

const router = Router();

router.get("/:skillId", getSkillMarketOpportunities);

export default router;
