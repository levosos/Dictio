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
    
    private noun: Noun = {
      favorite: true,
      gender: Gender.Male,
      english: "",
      spanish: ""
    }

    constructor(private nounsService: NounsService) {
    }

    public async submit(): Promise<void>
    {
        await this.nounsService.addNoun(this.noun);
    }    
}