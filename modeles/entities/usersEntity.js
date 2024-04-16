import "../../db/users.js";
export class UsersEntity {
    constructor(id, firstName, lastName, email, password, age, userType, regDate) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.age = age;
        this.userType = userType;
        this.regDate = regDate;
    }
}
