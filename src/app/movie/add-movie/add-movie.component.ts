import { MovieService } from "./../services/movie.service";
import { Component, OnInit } from "@angular/core";
import { UntypedFormGroup, UntypedFormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-movie",
  templateUrl: "./add-movie.component.html",
  styleUrls: ["./add-movie.component.scss"],
})
export class AddMovieComponent implements OnInit {
  movieForm = new UntypedFormGroup({
    name: new UntypedFormControl("", [Validators.required]),
    image: new UntypedFormControl("", [Validators.required]),
    genre: new UntypedFormControl("", [Validators.required]),
    releaseYear: new UntypedFormControl("", [Validators.required]),
  });

  constructor(
    private router: Router,
    private movieService: MovieService,
  ) {}

  ngOnInit() {
  }

  addMovie() {
    if (this.movieForm.valid) {
      this.movieService.addMovie(this.movieForm.value).subscribe((res) => {
        this.movieForm.reset();
        this.router.navigate(["/"]);
      });
    }
  }
}
