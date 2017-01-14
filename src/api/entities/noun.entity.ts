import { Table, Column, PrimaryGeneratedColumn } from "typeorm";

export enum Gender {
    Masculine,
    Feminine
}

@Table()
export class Noun {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    gender: Gender;

    @Column()
    english: string;

    @Column()
    spanish: string;
}