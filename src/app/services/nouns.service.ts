import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";
import { Noun } from "../../api/models/noun.model"

@Injectable()
export class NounsService {
    constructor(private http: Http) {
    }

    public getAllNouns(): Promise<Noun[]> {
        return new Promise(resolve => { 
            this.http
                .get("rest/nouns")
                .subscribe(res => resolve(res.json()))
        });
    }
    
    public addNoun(noun: Noun): Promise<any> {
        let bodyString = JSON.stringify(noun);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return new Promise(resolve => {
            this.http
                .post("rest/nouns", bodyString, options)
                .subscribe(res => resolve())
            });
    }
}