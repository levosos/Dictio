import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Adjective } from '../../api/entities/adjective.entity';

@Injectable()
export class AdjectivesService {
    private static RestPath: string = 'rest/adjectives';

    constructor(private http: HttpService) {
    }

    public getAllAdjectives(): Promise<Adjective[]> {
        return this.http.get(AdjectivesService.RestPath);
    }
    
    public addAdjective(adjective: Adjective): Promise<void> {
        return this.http.authPost(AdjectivesService.RestPath, adjective);
    }
}