import { Component } from '@angular/core';
import { ConjunctionsService } from '../services/conjunctions.service';
import { UtilsService } from '../services/utils.service';
import { Conjunction } from '../../api/entities/conjunction.entity';

@Component({
  selector: 'add-conjunction-form',
  templateUrl: 'views/add-conjunction.form.html'
})
export class AddConjunctionForm {
    private english: string = '';
    private spanish: string = '';

    constructor(private conjunctionsService: ConjunctionsService,
                private utils: UtilsService) {
    }

    public async submitAsync(): Promise<void>
    {
        const conjunction: Conjunction = {
          'id': undefined,
          'english': this.english.trim().toLowerCase(),
          'spanish': this.spanish.trim().toLowerCase()
        };
          
        await this.conjunctionsService.addConjunctionAsync(conjunction);

        this.utils.toast('Added word \'' + this.english + '\' \'' + this.spanish + '\'');
    }    
}