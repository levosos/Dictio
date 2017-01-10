export class Credentials {
    constructor(
        private _username: string, 
        private _password: string) {
    }

    get username(): string {
        return this._username.trim().toLowerCase();
    }

    get password(): string {
        return this._password.trim();
    }
}