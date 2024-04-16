import {books} from "../../db/bookSchema.js";

export async function addBook(book) {
    try {
        console.log(books, "schema")
        return await books.create(book)
    } catch (err) {
        throw new Error("Could not add books")
    }

}