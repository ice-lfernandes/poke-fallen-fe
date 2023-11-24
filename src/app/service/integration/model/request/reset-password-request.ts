export class ResetPasswordRequest {
    password!: string

    constructor(password: string) {
        this.password = password
    }
}
