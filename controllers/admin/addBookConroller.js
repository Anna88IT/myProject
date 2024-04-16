import express from "express";
import {addBook} from "../../services/admin/addBookSevice.js"
const router = express.Router();

router.use(express.json())

router.post("/", async (req, res) => {
    console.log(req.body)
    const newbook = {
        title: req.body.title,
        author: req.body.author,
        date: req.body.date,
        language: req.body.language,
        genre: req.body.genre,
        description: req.body.description
    };

    try {
        console.log(newbook, "newbook");
        const book = await addBook(newbook);
        console.log(book)
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

export default router;