import bcrypt from "bcrypt";
import {db} from "../../config/db.js";
import {UsersEntity} from "../../modeles/entities/usersEntity.js";

export const createUser = async (user, callback) => {
    const hash = await bcrypt.hash(user.password, 10);
    console.log(hash, "hash");
    user.password = hash;

    db.query('INSERT INTO users SET ?', user, (err, result) => {
        if (err) {
            return callback(err);
        }
        const insertedId = result.insertId;
        const newUser = new UsersEntity(insertedId, user.username, user.password);
        callback(null, newUser);

    });
}
