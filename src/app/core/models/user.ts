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
    public role!: Role; 
    public first_Name!: string;
    public last_Name!: string;
    public email!: string;
    public authToken!: string;
}

export enum Role {
    User = 'User',
    Admin = 'Admin',
    Customer ='Customer'
}
