import { Injectable, EventEmitter } from '@angular/core';

export enum FilterState
{
    Enabled,
    Disabled
}

@Injectable()
export class ToolbarService {
    public filterStateSource = new EventEmitter<FilterState>();

    set filterState(value: FilterState) {
        this.filterStateSource.next(value);
    }
    
    public filterSource = new EventEmitter<string>();

    public onFilterChanged(value: string) {
        this.filterSource.next(value);
    }
}