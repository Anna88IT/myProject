import express from "express";
import {addGenre} from "../../services/admin/genresService.js"
import {getAllGenres} from "../../services/admin/genresService.js";
const router = express.Router();

router.use(express.urlencoded({extended: true}));
router.use(express.json())

router.post("/", async (req, res) => {
console.log(req.body)
    const newGenre = {
        genre: req.body.genre
    } ;

    try {
        const genre = await addGenre(newGenre);
        console.log(newGenre, "controller");
        console.log(genre, "service");

        res.status(201).json(genre);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.get("/", async (req, res) => {
    try {
        const genres = await getAllGenres();
        res.status(200).json(genres);
    } catch (err) {
        res.status(404).json({message: err.message})
    }
})

export default router;