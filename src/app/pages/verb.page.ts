import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VerbsService } from '../services/verbs.service';
import { Primitive } from '../../api/entities/primitive.entity';
import { Verb } from '../../api/entities/verb.entity';

@Component({
  selector: 'dictio-primitive',
  template: '<p>{{caption}} <b><font [color]="primitive.irregular ? \'red\' : \'black\'">{{primitive.word}}</font></b></p>'
})
export class PrimitiveComponent {
  @Input() primitive: Primitive;
  @Input() caption: string;
}

@Component({
  templateUrl: 'views/verb.page.html'
})
export class VerbPage implements OnInit {
  private sub: any;
  private verb: Verb;

  constructor(private verbsService: VerbsService, 
              private router: ActivatedRoute) {
  }

  public ngOnInit() {
      this.sub = this.router.params.subscribe(params => {
          const id = params['id'];
          this.verbsService.getVerbAsync(id).then(verb => this.verb = verb);
    });
  }

  ngOnDestroy() {
      this.sub.unsubscribe();
  }
}