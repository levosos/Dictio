import { Component } from '@angular/core';
import { NounsService } from '../services/nouns.service';
import { Noun, Gender } from '../../api/entities/noun.entity';

@Component({
  selector: 'add-noun-form',
  templateUrl: 'views/add-noun-form.html'
})
export class AddNounFormComponent {
    private Gender = Gender;
    
    private gender: Gender = Gender.Masculine;
    private english: string = '';
    private spanish: string = '';

    constructor(private nounsService: NounsService) {
    }

    public async submitAsync(): Promise<void>
    {
        const noun: Noun = {
          'id': undefined,
          'gender': this.gender,
          'english': this.english.trim().toLowerCase(),
          'spanish': this.spanish.trim().toLowerCase()
        };
          
        await this.nounsService.addNounAsync(noun);
    }    
}