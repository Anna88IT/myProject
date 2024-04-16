import mongoose from "mongoose";

const Schema = mongoose.Schema;

const genreSchema = new Schema({
    genre: String
})

export const genres = mongoose.model("Genres", genreSchema);