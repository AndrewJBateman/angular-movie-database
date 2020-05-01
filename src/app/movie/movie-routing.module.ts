import { AddMovieComponent } from "./add-movie/add-movie.component";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";

const routes: Routes = [
  {
    path: "",
    component: MovieListComponent,
  },
  {
    path: "add",
    component: AddMovieComponent,
  },
  {
    path: ":id",
    component: MovieDetailComponent,
  },
];

// it is specified that these are child routes
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieRoutingModule {}
