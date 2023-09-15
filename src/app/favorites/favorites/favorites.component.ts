import { Component, OnInit } from '@angular/core';
import { FavoriteStoreService } from '../favorite-store.service';
import { Store, select } from '@ngrx/store';
import { MovieOverview } from 'src/app/movies/models/MovieOverview';
import { Observable } from 'rxjs';
import { MoviesStore } from 'src/app/store';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  favoriteObservable$!: Observable<{ movies: Array<MovieOverview> }>;
  favoriteList: Array<MovieOverview> = [];

  constructor(
    public favoriteStore: FavoriteStoreService,
    private store: Store<{ favorites: MoviesStore }>
    ) {}

  ngOnInit(): void {
    this.favoriteObservable$ = this.store.pipe(select('favorites'));

    this.favoriteObservable$.subscribe((data) => {
      this.favoriteList = this.favoriteList.concat(data.movies)
    });
  }
}