import {genres} from "../../db/genresSchema.js";

export async function addGenre(genre) {
    try {
        return await genres.create(genre);
    } catch (error) {
        throw new Error("Could not create genre")
    }
}

export async function getAllGenres() {
    try {
        return await genres.find();
    } catch (err) {
        throw new Error("Could not get genres")
    }
}