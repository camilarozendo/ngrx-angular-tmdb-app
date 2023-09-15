import { Injectable } from "@angular/core";
import { MoviesApiService } from "../services/movies-api.service";

@Injectable({
    providedIn: "root"
})
export class CustomMoviesResolver {
    constructor(
        private moviesApiService: MoviesApiService,
    ) {}

    getPopularMovies() {
        return this.moviesApiService.getPopularMovies();
    }
}