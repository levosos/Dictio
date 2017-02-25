import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Conjunction } from '../../api/entities/conjunction.entity';

@Injectable()
export class ConjunctionsService {
    private static RestPath: string = 'rest/conjunctions';

    constructor(private http: HttpService) {
    }

    public getAllConjunctions(): Promise<Conjunction[]> {
        return this.http.get(ConjunctionsService.RestPath);
    }
    
    public addConjunction(conjunction: Conjunction): Promise<void> {
        return this.http.authPost(ConjunctionsService.RestPath, conjunction);
    }
}