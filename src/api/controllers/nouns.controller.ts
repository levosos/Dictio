import { JsonController, Get } from "routing-controllers";
import { Gender } from "../models/globals.model";
import { Noun } from "../models/noun.model";

@JsonController("/nouns")
export class NounsController {
    @Get("/")
    public async getAllNounsAsync(): Promise<Noun[]> {
        return Promise.resolve([{favorite: false, english: "Hello", spanish: "World", gender: Gender.Male}]);
    }
}