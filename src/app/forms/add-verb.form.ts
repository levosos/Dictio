import { Component } from '@angular/core';
import { VerbsService } from '../services/verbs.service';
import { UtilsService } from '../services/utils.service';
import { Verb } from '../../api/entities/verb.entity';

@Component({
  selector: 'add-verb-form',
  templateUrl: 'views/add-verb.form.html'
})
export class AddVerbForm {
    private english: string = '';
    private spanish: string = '';

    constructor(private verbsService: VerbsService,
                private utils: UtilsService) {
    }

    public async submit(): Promise<void>
    {
        const verb: Verb = {
          'id': undefined,
          'infinitive': this.spanish.trim().toLowerCase(),
          'english': this.english.trim().toLowerCase(),
          'participle': undefined,
          'gerund': undefined,
          'tenses': undefined
        };
          
        await this.verbsService.addVerb(verb);

        this.utils.toast('Added verb \'' + this.english + '\' \'' + this.spanish + '\'');
    }    
}