import { Table, Column, PrimaryGeneratedColumn } from "typeorm";

export enum Role {
    User,
    Admin
}

@Table()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;
    
    @Column()
    password: string;
    
    @Column()
    role: Role;
}