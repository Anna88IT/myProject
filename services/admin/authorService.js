import {authors} from "../../db/authorSchema.js";

export async function addAuthor(author) {
    try {
        return await authors.create(author);
    } catch (error) {
        throw new Error("Could not create genre")
    }
}

export async function getAllAuthors() {
    try {
        return await authors.find();
    } catch (err) {
        throw new Error("Could not get authors")
    }
}