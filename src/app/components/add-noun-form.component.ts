import { Component } from '@angular/core';
import { NounsService } from '../services/nouns.service';
import { Gender } from '../../api/models/globals.model';
import { Noun } from '../../api/models/noun.model';

@Component({
  selector: 'add-noun-form',
  templateUrl: 'views/add-noun-form.html'
})
export class AddNounFormComponent {
    private Gender = Gender;
    
    private favorite: boolean = true;
    private gender: Gender = Gender.Male;
    private english: string = '';
    private spanish: string = '';

    constructor(private nounsService: NounsService) {
    }

    public async submitAsync(): Promise<void>
    {
        let noun = new Noun(
          this.favorite, 
          this.gender, 
          this.english, 
          this.spanish);
          
        await this.nounsService.addNounAsync(noun);
    }    
}