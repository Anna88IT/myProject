import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const authorSchema = new Schema({
    firstname: String,
    lastname: String,
    birthdate: Date,
    deathdate: Date
});

export const authors = mongoose.model("author", authorSchema);