import { createReducer, on } from "@ngrx/store";
import { initialState } from "..";
import { addFavorite, removeFavorite } from "../actions/favorite.action";

export const favoriteReducer = createReducer(
    initialState,
    // Adicionar favoritos
    on(addFavorite, (state, { movie }) => ({
        ...state,
        movies: [...state.movies, movie]
    })),
    // Remover favoritos
    on(removeFavorite, (state, { movie }) => ({
        ...state,
        movies: state.movies.filter((m) => m.id != movie.id), 
    }))
)