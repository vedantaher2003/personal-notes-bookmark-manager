import mongoose from "mongoose";


const noteSchema = new mongoose.Schema({
title: { type: String, required: true },
content: String,
tags: [String],
favorite: { type: Boolean, default: false }
}, { timestamps: true });


export default mongoose.model("Note", noteSchema);
