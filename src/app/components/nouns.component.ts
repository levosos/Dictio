import { Component, OnInit } from '@angular/core';
import { NounsService } from "../services/nouns.service"
import { Noun } from "../../api/models/noun.model"

@Component({
  templateUrl: 'views/nouns.html'
})
export class NounsComponent implements OnInit {
  private nouns: Noun[];

  constructor(private nounsService: NounsService) {
  }
  
  public ngOnInit(): void {
    this.nounsService
      .getAllNouns()
      .subscribe((nouns: Noun[]) => {
          this.nouns = nouns;
      });
  }
}