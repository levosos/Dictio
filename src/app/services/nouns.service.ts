import { Injectable } from "@angular/core";
import { HttpService } from "./http.service"
import { Noun } from "../../api/models/noun.model"

@Injectable()
export class NounsService {
    constructor(private http: HttpService) {
    }

    public getAllNouns(): Promise<Noun[]> {
        return this.http.get("rest/nouns");
    }
    
    public addNoun(noun: Noun): Promise<void> {
        return this.http.post("rest/nouns", noun);
    }
}