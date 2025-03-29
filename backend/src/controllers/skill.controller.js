import mongoose, { isValidObjectId } from "mongoose";
import { Skill } from "../models/skill.model.js";

import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getAllSkills = asyncHandler(async (req, res) => {
  try {
    const skills = await Skill.find({});
    return res
      .status(200)
      .json(new ApiResponse(200, skills, "Skills fetched successfully"));
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});

const getSkillById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    throw new ApiError(400, "Skill ID is required");
  }

  if (!isValidObjectId(id)) {
    throw new ApiError(400, "Invalid Skill ID");
  }

  try {
    const skill = await Skill.findById(id);

    if (!skill) {
      throw new ApiError(404, "Skill not found");
    }

    return res
      .status(200)
      .json(new ApiResponse(200, skill, "Skill fetched successfully"));
  } catch (error) {
    throw new ApiError(500, error.message);
  }
});

export {
    getAllSkills,
    getSkillById,
}
