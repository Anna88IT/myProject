export class UsersDto {
    constructor(firstName, lastName, email, password, age, userType) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.age = age;
        this.userType = userType;
    }
}