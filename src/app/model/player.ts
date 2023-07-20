import { Login } from "./login";

export class Player {

    name: String | undefined
    username: String | undefined
    playerId: String | undefined
    loginData: Login

    constructor() {
        this.loginData = new Login();
    }
}
