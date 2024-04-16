import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const authorSchema = new Schema({
    language: String
});

export const languages = mongoose.model("language", authorSchema);