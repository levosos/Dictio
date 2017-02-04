import { Table, Column, PrimaryGeneratedColumn } from "typeorm";

@Table()
export class Conjunction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    english: string;

    @Column()
    spanish: string;
}