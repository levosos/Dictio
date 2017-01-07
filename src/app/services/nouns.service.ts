import { Injectable } from "@angular/core";
import { HttpService } from "./http.service"
import { Noun } from "../../api/models/noun.model"

@Injectable()
export class NounsService {
    constructor(private http: HttpService) {
    }

    public getAllNounsAsync(): Promise<Noun[]> {
        return this.http.getAsync("rest/nouns");
    }
    
    public addNounAsync(noun: Noun): Promise<void> {
        return this.http.postAsync("rest/nouns", noun);
    }
}