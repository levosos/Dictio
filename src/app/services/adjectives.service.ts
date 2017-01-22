import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Adjective } from '../../api/entities/adjective.entity';

@Injectable()
export class AdjectivesService {
    private static RestPath: string = 'rest/adjectives';

    constructor(private http: HttpService) {
    }

    public getAllAdjectivesAsync(): Promise<Adjective[]> {
        return this.http.getAsync(AdjectivesService.RestPath);
    }
    
    public addAdjectiveAsync(adjective: Adjective): Promise<void> {
        return this.http.authPostAsync(AdjectivesService.RestPath, adjective);
    }
}