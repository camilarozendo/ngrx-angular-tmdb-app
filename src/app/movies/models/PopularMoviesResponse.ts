import { MovieOverview } from "./MovieOverview"

export interface PopularMoviesResponse {
    page: number
    results: Array<MovieOverview>
    total_pages: number
    total_results: number
}