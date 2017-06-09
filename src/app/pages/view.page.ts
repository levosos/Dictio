import { OnInit, OnDestroy } from '@angular/core';
import { ToolbarService, FilterState } from '../services/toolbar.service';
import * as utils from '../utils/utils';

export abstract class ViewPage<T> implements OnInit, OnDestroy {
  private subscription: any;

  private cache: T[];
  protected members: T[];
  
  constructor(private toolbarService: ToolbarService) {
    this.subscription = toolbarService.filterSource.subscribe(filter => {
      this.members = this.cache.filter(member => utils.contains(member, filter));
    });
  }
  
  public async ngOnInit(): Promise<void> {
    this.members = this.cache = await this.init();
    this.toolbarService.filterState = FilterState.Enabled;
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
    this.toolbarService.filterState = FilterState.Disabled;
  }

  protected abstract init(): Promise<T[]>;
}