import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PopularMoviesResponse } from '../models/PopularMoviesResponse';
import { Movie } from '../models/Movie';
import { Observable, map, retry } from 'rxjs';
import { MovieOverview } from '../models/MovieOverview';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGNjNTQ4NTg0NzA4NGM4MjgzMTZhNjhhNWYzMjAxNyIsInN1YiI6IjYzM2I1Y2U4NmQwMDBjMDA3YWY5ZmI0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CcAluTSFYUH_0kAFFKCO1NEh5uHBtCYN3IEozwR-OBM'
  }
};

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

  constructor(private http: HttpClient) { }

 getPopularMovies(): Observable<Array<MovieOverview>> {
    console.log("2. chamou getPopularMovies")
    return this.http.get<PopularMoviesResponse>("movie/popular")
      .pipe(
        map(data => data.results),
        retry(3)
      );
  }

  getMovieDetail(movieId: number): Observable<Movie> {
    return this.http.get<Movie>(`movie/${movieId}`);
  }
}
