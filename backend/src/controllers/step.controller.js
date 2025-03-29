import mongoose, { get } from "mongoose";
import { Step } from "../models/Step.model.js";
import { Skill } from "../models/skill.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getSkillSteps = asyncHandler(async (req, res) => {
    //TODO: Get all steps for a skill
    const { skillId } = req.params;
});

export { getSkillSteps };