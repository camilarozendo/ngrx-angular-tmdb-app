import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesApiService } from '../services/movies-api.service';
import { Movie } from '../models/Movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie = {} as Movie;

  constructor(
    private route: ActivatedRoute, 
    private moviesApiService: MoviesApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.fetchMovies(id)
    });
  }

  fetchMovies(movieId: number) {
    this.moviesApiService.getMovieDetail(movieId).subscribe((result) => {
      this.movie = result;
    });
  }
}
