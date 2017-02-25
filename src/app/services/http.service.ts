import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class HttpService {
    constructor(private http: Http,
                private authHttp: AuthHttp) {
    }

    public get(url: string): Promise<any> {
        return this.http
                .get(url)
                .map((res: Response) => {
                    return res.json();
                })
                .toPromise();
    }
    
    public post(url: string, body: any): Promise<any> {
        return this.postImp(this.http, url, body);
    }

    public authPost(url: string, body: any): Promise<any> {
        return this.postImp(this.authHttp, url, body);
    }

    private postImp(service: any, url: string, body: any): Promise<any> {
        let bodyString = JSON.stringify(body);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return service
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