import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-image',
  templateUrl: './movie-image.component.html',
  styleUrls: ['./movie-image.component.scss']
})
export class MovieImageComponent {
 @Input() path!: string;
 @Input() size: number = 200;
}
