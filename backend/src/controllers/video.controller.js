import mongoose from "mongoose";
import { Video } from "../models/video.model.js";
import { Skill } from "../models/skill.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getSkillVideos = asyncHandler(async (req, res) => {
  //TODO: Get all videos for a skill
  const { skillId } = req.params;
});

export { getSkillVideos };
