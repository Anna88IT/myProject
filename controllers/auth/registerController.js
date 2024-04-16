import {createUser} from "../../services/auth/registerService.js";
import {UsersDto} from "../../modeles/dto/usersDto.js";

export const registerUser = async (req, res) => {
    const {firstName, lastName, email, password, age, userType} = req.body;
    const userDTO = new UsersDto(firstName, lastName, email, password, age, userType);

    await createUser(userDTO, (err, newUser) => {
        if (err) {
            console.error('Error registering user: ' + err.message);
            res.status(500).send('Error registering user.');
            return;
        }
        console.log('User registered successfully.');
        res.status(200).send(newUser);
    });
}