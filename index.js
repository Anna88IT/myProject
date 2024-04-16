import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import addBookController from "./controllers/admin/addBookConroller.js"
import genresController from "./controllers/admin/genresController.js"
import authorController from "./controllers/admin/authorController.js"
import languageController from "./controllers/admin/languageController.js"
dotenv.config();

const app = express();
const port = process.env.PORT || 3002;
const mongoUrl = process.env.MONGODB;

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }
    next();
});

mongoose.connect(mongoUrl)
    .then(() => console.log("MongoDG connected"))
    .catch((err) => console.error(err, "mongoDB didn't connected"));

app.use("/admin/book", addBookController);
app.use("/admin/genre", genresController);
app.use("/admin/author", authorController);
app.use("/admin/language", languageController);


app.listen(port, () => {
    console.log(`the server is listening to port ${port}`);
})