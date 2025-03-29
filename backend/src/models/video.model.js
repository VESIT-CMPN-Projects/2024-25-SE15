import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema({
    skill: {
        type: Schema.Types.ObjectId,
        ref: "Skill",
    },
    video: {
        type: String, // URL to the video
        required: true,
    },
    //and other fields
});

export const Video = mongoose.model("Video", videoSchema);