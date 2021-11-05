export default class User {
    constructor(data) {
        this.id = data['id'];
        this.username = data['username'] 
        this.email = data['email'];
    }

    toJson = () => ({
        id: this.id,
        username: this.username,
        email: this.email,
    });
}