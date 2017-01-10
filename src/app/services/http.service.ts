import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class HttpService {
    constructor(private http: Http) {
    }

    public getAsync(url: string): Promise<any> {
        return this.http
                .get(url)
                .map((res: Response) => {
                    return res.json();
                })
                .toPromise();
    }
    
    public postAsync(url: string, body: any): Promise<any> {
        let bodyString = JSON.stringify(body);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http
                .post(url, bodyString, options)
                .map((res: Response) => {
                    if (res.arrayBuffer().byteLength != 0) {
                        // Call json() only when the response has a body
                        return res.json();
                    }
                })
                .toPromise();
    }
}