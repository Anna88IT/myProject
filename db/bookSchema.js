import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const bookSchema = new Schema({
    title: String,
    author: String,
    date: String,
    language: String,
    genre: {
        type: Schema.Types.ObjectId,
        ref: "genre"
    },
    description: String,
    img: String

});

export const books = mongoose.model("Books", bookSchema);
