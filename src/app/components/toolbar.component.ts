import { Component, OnDestroy } from '@angular/core';
import { TokenService } from '../services/token.service';
import { ToolbarService, FilterState } from '../services/toolbar.service';

@Component({
  selector: 'dictio-toolbar',
  templateUrl: 'views/toolbar.component.html'
})
export class ToolbarComponent implements OnDestroy {
    private subscription: any;

    FilterState = FilterState;
    private filterState: FilterState = FilterState.Hidden;

    constructor(private toolbarService: ToolbarService,
                private tokenService: TokenService) {
        this.subscription = toolbarService.filterStateSource.subscribe(filterState => {
            this.filterState = filterState;
        });
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    private filter(pattern: string) {
        this.toolbarService.onFilterChanged(pattern);
    }
}