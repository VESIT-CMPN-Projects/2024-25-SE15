import mongoose, { get } from "mongoose";
import { MarketOpportunity } from "../models/market_opportunity.model.js";
import { Skill } from "../models/skill.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getSkillMarketOpportunities = asyncHandler(async (req, res) => {
    //TODO: Get all market opportunities for a skill
    const { skillId } = req.params;
});

export { getSkillMarketOpportunities };