import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Verb } from '../../api/entities/verb.entity';

@Injectable()
export class VerbsService {
    private static RestPath: string = 'rest/verbs';

    constructor(private http: HttpService) {
    }

    public getAllVerbsAsync(): Promise<Verb[]> {
        return this.http.getAsync(VerbsService.RestPath);
    }
    
    public getVerbAsync(id: number): Promise<Verb> {
        return this.http.getAsync(VerbsService.RestPath + '/' + id);
    }
}