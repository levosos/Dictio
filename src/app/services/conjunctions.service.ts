import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Conjunction } from '../../api/entities/conjunction.entity';

@Injectable()
export class ConjunctionsService {
    private static RestPath: string = 'rest/conjunctions';

    constructor(private http: HttpService) {
    }

    public getAllConjunctionsAsync(): Promise<Conjunction[]> {
        return this.http.getAsync(ConjunctionsService.RestPath);
    }
    
    public addConjunctionAsync(conjunction: Conjunction): Promise<void> {
        return this.http.authPostAsync(ConjunctionsService.RestPath, conjunction);
    }
}