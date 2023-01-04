import { MovieService } from "./../services/movie.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { Movie } from "../models/movie.model";

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.scss"],
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  id: number;
  movie: Movie;
  movieSub$: Subscription;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get("id");
    this.movieSub$ = this.movieService
      .movieFromHttp(this.id)
      .subscribe((movie) => {
        this.movie = movie;
      });
  }

  ngOnDestroy(): void {
    this.movieSub$.unsubscribe();
  }
}
