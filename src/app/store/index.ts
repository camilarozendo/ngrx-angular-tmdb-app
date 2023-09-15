import { MovieOverview } from "../movies/models/MovieOverview";

export interface MoviesStore {
    movies: Array<MovieOverview>;
}

export const initialState: MoviesStore = {
    movies: [],
};