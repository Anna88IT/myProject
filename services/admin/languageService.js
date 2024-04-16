import {languages} from "../../db/languageSchema.js";

export async function addLanguage(language) {
    try {
        return await languages.create(language);
    } catch (error) {
        throw new Error("Could not create genre")
    }
}

export async function getAllLanguages() {
    try {
        return await languages.find();
    } catch (err) {
        throw new Error("Could not get languages")
    }
}