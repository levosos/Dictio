import { Component } from '@angular/core';
import { NounsService } from "../services/nouns.service"
import { Gender } from "../../api/models/globals.model"
import { Noun } from "../../api/models/noun.model"

@Component({
  selector: 'add-noun-form',
  templateUrl: 'views/add-noun-form.html'
})
export class AddNounFormComponent {
    private Gender = Gender;
    
    private favorite: boolean = true;
    private gender: Gender = Gender.Male;
    private english: string = "";
    private spanish: string = "";

    constructor(private nounsService: NounsService) {
    }

    public async submit(): Promise<void>
    {
        await this.nounsService
          .addNoun({
            favorite: this.favorite,
            gender: this.gender, 
            english: this.english.trim().toLowerCase(), 
            spanish: this.spanish.trim().toLowerCase()});
    }    
}