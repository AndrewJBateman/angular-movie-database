import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  // use decorator @Input so we can access the
  @Input() movie: Movie;

  constructor() { }

  ngOnInit() {
  }

}
