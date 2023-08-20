import { Component, Input } from '@angular/core';
import { MovieOverview } from '../models/MovieOverview';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {
  @Input() movie!: MovieOverview;
}
