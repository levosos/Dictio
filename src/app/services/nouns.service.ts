import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";
import { Noun } from "../../api/models/noun.model"

@Injectable()
export class NounsService {
    constructor(private http: Http) {
    }

    public getAllNouns(): Observable<Noun[]> {
        return this.http
            .get("rest/nouns")
            .map((nouns: Response) => {
                return nouns.json();
            });
    }
    
    public addNoun(noun: Noun): Observable<void> {
        let bodyString = JSON.stringify(noun);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        return this.http
            .post("rest/nouns", bodyString, options)
            .map(()=>{})
    }
}