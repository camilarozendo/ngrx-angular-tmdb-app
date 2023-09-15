import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss']
})
export class SearchMoviesComponent {
    @Output() onSearch = new EventEmitter<string>();
    @Output() onFormReset = new EventEmitter();

    searchQuery = '';

    onInputQuery() {
        this.onSearch.emit(this.searchQuery);
    }

    onSearchReset() {
        this.onFormReset.emit();
    }
}
