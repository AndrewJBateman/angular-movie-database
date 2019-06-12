import { MovieRoutingModule } from './movie-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  declarations: [MovieListComponent],
  imports: [CommonModule, MovieRoutingModule]
})
export class MovieModule { }
