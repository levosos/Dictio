import { OnInit, Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'dictio-app',
  templateUrl: 'views/app.component.html'
})
export class AppComponent implements OnInit { 
  private sub: any;

  constructor(private title: Title,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.sub = this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe(event => this.onRouteChanged(event));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private onRouteChanged(data: any) {
    let title = 'Dictio';

    if ('title' in data) {
      title += ' | ' + data['title'];
    }
    
    this.title.setTitle(title);
  }
}