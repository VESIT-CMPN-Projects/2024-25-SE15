import mongoose, { Schema } from "mongoose";

const marketOpportunitySchema = new Schema({
    skill: {
        type: Schema.Types.ObjectId,
        ref: "Skill",
    },
    title : {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    //and other fields
});

export const MarketOpportunity = mongoose.model("MarketOpportunity", marketOpportunitySchema);