import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { Noun } from "../../api/models/noun.model"

@Injectable()
export class NounsService {
    constructor(private http: Http) {
    }

    public getAllNounsAsync(): Observable<Noun[]> {
        return this.http
            .get("api/nouns")
            .map((nouns: Response) => {
                return nouns.json();
            });
    }
}