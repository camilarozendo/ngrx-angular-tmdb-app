import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesApiResponse } from '../models/MoviesApiResponse';
import { Movie } from '../models/Movie';
import { Observable, map, retry } from 'rxjs';
import { MovieOverview } from '../models/MovieOverview';

@Injectable({
  providedIn: 'root',
})
export class MoviesApiService {
  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<Array<MovieOverview>> {
    console.log("2. Chamou getPopularMovies");

    return this.http.get<MoviesApiResponse>("movie/popular")
        .pipe(
            map(data => {
                console.log("4. Transforma dados");

                return data.results
            }),
            retry(3)
        );
  }

  getMovieDetail(movieId: number): Observable<Movie> {
    return this.http.get<Movie>(`movie/${movieId}`);
  }

  searchMovieByTitle(movieTitle: string): Observable<Array<MovieOverview>> {
    return this.http.get<MoviesApiResponse>(`search/movie?query=${movieTitle}`)
        .pipe(
            map(data => data.results)
        )
  }
}