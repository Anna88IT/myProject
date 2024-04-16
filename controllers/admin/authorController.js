import express from "express";
import {addAuthor} from "../../services/admin/authorService.js"
import {getAllAuthors} from "../../services/admin/authorService.js";
const router = express.Router();

router.use(express.urlencoded({extended: true}));
router.use(express.json())

router.post("/", async (req, res) => {
console.log(req.body)
    const newAuthor = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        birthdate: req.body.birthdate,
        deathdate: req.body.deathdate
    } ;

    try {
        const author = await addAuthor(newAuthor);
        console.log(newAuthor, "controller");
        console.log(author, "service");

        res.status(201).json(author);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.get("/", async (req, res) => {
    try {
        const authors = await getAllAuthors();
        res.status(200).json(authors);
    } catch (err) {
        res.status(404).json({message: err.message})
    }
})

export default router;