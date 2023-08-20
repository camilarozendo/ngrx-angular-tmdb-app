import { Routes } from "@angular/router";
import { MoviesListComponent } from "../movies/movies-list/movies-list.component";
import { MovieDetailsComponent } from "../movies/movie-details/movie-details.component";

export const routes: Routes = [
    {
        path: "",
        component: MoviesListComponent
    },
    {
        path: "movie/:id",
        component: MovieDetailsComponent
    }
]