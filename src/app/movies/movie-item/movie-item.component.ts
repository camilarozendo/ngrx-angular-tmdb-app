import { Component, Input } from '@angular/core';
import { MovieOverview } from '../models/MovieOverview';
import { FavoriteStoreService } from 'src/app/favorites/favorite-store.service';
import { Store } from '@ngrx/store';
import { addFavorite } from 'src/app/store/actions/favorite.action';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {
  @Input() movie!: MovieOverview;

  constructor(
    private favoriteStore: FavoriteStoreService,
    private store: Store,
  ) {}

  addToFavorite() {
    // this.favoriteStore.addMovie(this.movie);
    this.store.dispatch(addFavorite({ movie: this.movie }))
  }
}
