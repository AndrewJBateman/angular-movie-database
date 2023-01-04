import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Movie } from "../models/movie.model";
import { MovieService } from "./../services/movie.service";
import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
} from "@angular/animations";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.scss"],
  animations: [
    trigger("listAnimation", [
      transition("* <=> *", [
        query(
          ":enter",
          [
            style({ opacity: 0, transform: "translateY(-50px)" }),
            stagger(
              "50mS",
              animate(
                "500mS ease-in",
                style({ opacity: 1, transform: "translateY(0px" })
              )
            ),
          ],
          { optional: true }
        ),
        query(
          ":leave",
          [animate("500ms", style({ opacity: 0, transform: "rotate(90deg)" }))],
          {
            optional: true,
          }
        ),
      ]),
    ]),
  ],
})
export class MovieListComponent implements OnInit {
  movies$: Observable<Movie[]>;
  loadingMovies: Array<number>;

  // inject movie & navbar services
  constructor(
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.loadingMovies = new Array(9).fill(0).map((n, index) => index);

    this.movies$ = this.movieService.getMoviesFromHttp();
  }
}
