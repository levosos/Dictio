import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Noun } from '../../api/entities/noun.entity';

@Injectable()
export class NounsService {
    private static RestPath: string = 'rest/nouns';

    constructor(private http: HttpService) {
    }

    public getAllNouns(): Promise<Noun[]> {
        return this.http.get(NounsService.RestPath);
    }
    
    public addNoun(noun: Noun): Promise<void> {
        return this.http.authPost(NounsService.RestPath, noun);
    }
}