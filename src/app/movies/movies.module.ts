import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MovieImageComponent } from './movie-image/movie-image.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MoviesListComponent,
    MovieDetailsComponent,
    MovieItemComponent,
    MovieImageComponent
  ],
  exports: [
    MoviesListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class MoviesModule { }
