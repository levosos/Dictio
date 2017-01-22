import { Table, Column, PrimaryGeneratedColumn } from "typeorm";

@Table()
export class Adjective {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    english: string;

    @Column()
    spanish: string;

    @Column()
    formable: boolean;
}