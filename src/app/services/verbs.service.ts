import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Verb } from '../../api/entities/verb.entity';

@Injectable()
export class VerbsService {
    private static RestPath: string = 'rest/verbs';

    constructor(private http: HttpService) {
    }

    public getAllVerbs(): Promise<Verb[]> {
        return this.http.get(VerbsService.RestPath);
    }
    
    public getVerb(id: number): Promise<Verb> {
        return this.http.get(VerbsService.RestPath + '/' + id);
    }

    public addVerb(verb: Verb): Promise<void> {
        return this.http.authPost(VerbsService.RestPath, verb);
    }
}