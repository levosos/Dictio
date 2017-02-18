import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dictio-filter-toolbar',
  templateUrl: 'views/filter-toolbar.component.html'
})
export class FilterToolbarComponent {
    @Output('filter') filterEvent: EventEmitter<string> = new EventEmitter<string>();

    private filter(pattern: string) {
        this.filterEvent.emit(pattern);
    }
}