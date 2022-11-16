export class login {
    constructor(
        public email: string,
        public password: string
    ) { }
}

export declare interface Register {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export class user {
    public id!: string;
    public first_Name: string | undefined;
    public last_Name: string | undefined;
    public email: string | undefined;
    public password_Hash: string | undefined;
    public authToken: string | undefined;
    public created_On: string | undefined;
}

