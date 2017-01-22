import { Component } from '@angular/core';
import { NounsService } from '../services/nouns.service';
import { UtilsService } from '../services/utils.service';
import { Noun, Gender } from '../../api/entities/noun.entity';

@Component({
  selector: 'add-noun-form',
  templateUrl: 'views/add-noun.form.html'
})
export class AddNounForm {
    private Gender = Gender;
    
    private gender: Gender = Gender.Masculine;
    private english: string = '';
    private spanish: string = '';
    private countable: boolean = true;

    constructor(private nounsService: NounsService,
                private utils: UtilsService) {
    }

    public async submitAsync(): Promise<void>
    {
        const noun: Noun = {
          'id': undefined,
          'gender': this.gender,
          'english': this.english.trim().toLowerCase(),
          'spanish': this.spanish.trim().toLowerCase(),
          'countable': this.countable
        };
          
        await this.nounsService.addNounAsync(noun);

        this.utils.toast('Added noun \'' + this.english + '\' \'' + this.spanish + '\'');
    }    
}