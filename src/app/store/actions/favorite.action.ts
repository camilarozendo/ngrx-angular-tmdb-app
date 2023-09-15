import { createAction, props } from "@ngrx/store";
import { MovieOverview } from "src/app/movies/models/MovieOverview";

export const addFavorite = createAction(
    '[Movies] Add Favorite',
    props<{ movie: MovieOverview }>()
);

export const removeFavorite = createAction(
    '[Movies] Remove Favorite',
    props<{ movie: MovieOverview }>()
);