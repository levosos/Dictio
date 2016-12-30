import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";
import { Noun } from "../../api/models/noun.model"
import { plainToClass } from "class-transformer"
import 'rxjs/Rx';

@Injectable()
export class NounsService {
    constructor(private http: Http) {
    }

    public getAllNouns(): Promise<Noun[]> {
        return this.http
                .get("rest/nouns")
                .map((res: Response) => {
                    return plainToClass(Noun, res.json());
                })
                .toPromise();
    }
    
    public addNoun(noun: Noun): Promise<any> {
        let bodyString = JSON.stringify(noun);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http
                .post("rest/nouns", bodyString, options)
                .toPromise();
    }
}