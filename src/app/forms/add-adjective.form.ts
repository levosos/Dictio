import { Component } from '@angular/core';
import { AdjectivesService } from '../services/adjectives.service';
import { UtilsService } from '../services/utils.service';
import { Adjective } from '../../api/entities/adjective.entity';

@Component({
  selector: 'add-adjective-form',
  templateUrl: 'views/add-adjective.form.html'
})
export class AddAdjectiveForm {
    private english: string = '';
    private spanish: string = '';
    private formable: boolean = true;

    constructor(private adjectivesService: AdjectivesService,
                private utils: UtilsService) {
    }

    public async submitAsync(): Promise<void>
    {
        const adjective: Adjective = {
          'id': undefined,
          'english': this.english.trim().toLowerCase(),
          'spanish': this.spanish.trim().toLowerCase(),
          'formable': this.formable
        };
          
        await this.adjectivesService.addAdjectiveAsync(adjective);

        this.utils.toast('Added adjective \'' + this.english + '\' \'' + this.spanish + '\'');
    }    
}