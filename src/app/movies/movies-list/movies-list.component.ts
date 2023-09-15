import { Component } from '@angular/core';
import { MoviesApiService } from '../services/movies-api.service';
import { MovieOverview } from '../models/MovieOverview';
import { ActivatedRoute } from '@angular/router';
import { FavoriteStoreService } from 'src/app/favorites/favorite-store.service';

@Component({
    selector: 'app-movies-list',
    templateUrl: './movies-list.component.html',
    styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent {
    public movies: Array<MovieOverview> = [];
    public popularMovies: Array<MovieOverview> = [];

    constructor(
        private moviesApiService: MoviesApiService,
        private route: ActivatedRoute,
        private favoriteStore: FavoriteStoreService
    ) {
        this.route.data.subscribe((data) => {
            this.movies = data['popularMovies'];
            this.popularMovies = data['popularMovies']
        });

        this.favoriteStore.favoriteList$.subscribe((data) => {
            console.log("Recebemos novos dados", data);
        });
    }

    onMoviesSearch(query: string) {
        this.moviesApiService.searchMovieByTitle(query).subscribe((movies) => {
            this.movies = movies;
        });
    }

    onSearchReset() {
        this.movies = this.popularMovies;
    }
}
