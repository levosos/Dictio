import { Gender } from "./globals.model";
import { Type } from "class-transformer"

export class Noun {
    @Type(() => Boolean)
    favorite: boolean;
    gender: Gender;
    english: string;
    spanish: string;
}