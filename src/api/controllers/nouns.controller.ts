import { JsonController, Get, Post, Body, UndefinedResultCode } from "routing-controllers";
import { Gender } from "../models/globals.model";
import { Noun } from "../models/noun.model";

@JsonController("/nouns")
export class NounsController {
    @Get("/")
    @UndefinedResultCode(500)
    public getAllNounsAsync(): Promise<Noun[]> {
        return Promise.resolve([
            {favorite: false, english: "Hello", spanish: "World", gender: Gender.Male},
            {favorite: true, english: "Was", spanish: "UPP", gender: Gender.Female}
            ]);
    }

    @Post("/")
    @UndefinedResultCode(202)
    public addNoun(@Body({ required: true }) noun: Noun): void {
        noun.english = noun.english.trim().toLowerCase();
        noun.spanish = noun.spanish.trim().toLowerCase();

        console.log("Adding a noun [" + 
        noun.english + "] [" + 
        noun.spanish + "] " + 
        (noun.favorite ? "[Favorite] " : "[Not favorite] ") + 
        (noun.gender == Gender.Male ? "[Male]" : "[Female]"));
    }
}