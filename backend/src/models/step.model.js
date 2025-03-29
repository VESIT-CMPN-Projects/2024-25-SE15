import mongoose, { Schema } from "mongoose";

const stepSchema = new Schema({
    skill: {
        type: Schema.Types.ObjectId,
        ref: "Skill",
    },
    stepNumber: {
        type: Number,
        required: true,
    },
    image: {
        type: String, // URL to the image
        required: true,
    },
    //and other fields
});

export const Step = mongoose.model("Step", stepSchema);