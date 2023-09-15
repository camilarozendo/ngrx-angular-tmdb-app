import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { MovieOverview } from "../movies/models/MovieOverview";

@Injectable({
    providedIn: "root"
})

export class FavoriteStoreService {
    favoriteList$ = new BehaviorSubject<Array<MovieOverview>>([]);

    addMovie(movie: MovieOverview) {
        this.favoriteList$.next([...this.favoriteList$.getValue(), movie]);
    }
}