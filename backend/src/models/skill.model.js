import mongoose, { Schema } from "mongoose";

const skillSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,    // URL to the thumbnail image
        required: true,
    },    
});

export const Skill = mongoose.model("Skill", skillSchema);
