import express from "express";
import {addLanguage} from "../../services/admin/languageService.js"
import {getAllLanguages} from "../../services/admin/languageService.js";

const router = express.Router();

router.use(express.urlencoded({extended: true}));
router.use(express.json())

router.post("/", async (req, res) => {
console.log(req.body)
    const newLanguage = {
        language: req.body.language
    } ;

    try {
        const language = await addLanguage(newLanguage);
        console.log(newLanguage, "controller");
        console.log(language, "service");

        res.status(201).json(language);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.get("/", async (req, res) => {
    try {
        const languages = await getAllLanguages();
        res.status(200).json(languages);
    } catch (err) {
        res.status(404).json({message: err.message})
    }
})

export default router;