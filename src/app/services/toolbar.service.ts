import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export enum FilterState
{
    Active,
    Disabled,
    Hidden
}

@Injectable()
export class ToolbarService {
    private filterStateSource = new Subject<FilterState>();
    public filterState$ = this.filterStateSource.asObservable();

    set filterState(value: FilterState) {
        this.filterStateSource.next(value);
    }
    
    private filterSource = new Subject<string>();
    public filter$ = this.filterSource.asObservable();

    public onFilterChanged(value: string) {
        this.filterSource.next(value);
    }
}