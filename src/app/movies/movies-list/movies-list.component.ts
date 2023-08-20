import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from '../services/movies-api.service';
import { MovieOverview } from '../models/MovieOverview';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  public movies: Array<MovieOverview> = [];

  constructor(private moviesApiService: MoviesApiService) {}

  ngOnInit(): void {
    console.log("1. chamou getPopularMovies do componente")
    this.moviesApiService.getPopularMovies().subscribe((movies) => {
      console.log("4. chegou resposta")    
      this.movies = movies;
    })
  }
}
