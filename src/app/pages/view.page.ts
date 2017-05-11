import { OnInit, OnDestroy } from '@angular/core';
import { ToolbarService, FilterState } from '../services/toolbar.service';
import { Utils } from '../services/utils.service';

export abstract class ViewPage<T> implements OnInit, OnDestroy {
  private subscription: any;

  private cache: T[];
  protected members: T[];
  
  constructor(private toolbarService: ToolbarService) {
    this.subscription = toolbarService.filterSource.subscribe(filter => {
      this.members = this.cache.filter(member => Utils.contains(member, filter));
    });
  }
  
  public async ngOnInit(): Promise<void> {
    this.toolbarService.filterState = FilterState.Disabled;
    this.members = this.cache = await this.init();
    this.toolbarService.filterState = FilterState.Active;
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
    this.toolbarService.filterState = FilterState.Hidden;
  }

  protected abstract init(): Promise<T[]>;
}