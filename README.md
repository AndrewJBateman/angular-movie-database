# Angular Movie Database

* App using Angular 8, to create a movie database. So far this has a home screen with all movies list using their images. Each image redirects to a detail page with movie details lists using data-binding.

*** Note: to open web links in a new window use: _ctrl+click on link_**

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* Dummy backend used to store json movie data.

## Screenshots

![Example screenshot](./img/home.png).

## Technologies

* [Angular v8.0.0](https://angular.io/)

* [Angular CLI v8.0.1](https://cli.angular.io/).

* [RxJS Library v6.4.2](https://angular.io/guide/rx-library) used to [subscribe](http://reactivex.io/documentation/operators/subscribe.html) to the API data [observable](http://reactivex.io/documentation/observable.html).

* [json-server v0.15.0](https://www.npmjs.com/package/json-server) used to get a fake API.

## Setup

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app does automatically reload if you change any of the source files.

Run `npm run api` for a local json server. Navigate to `http://localhost:3000/`.

## Code Examples

* `movie-list.component.html` extract

```html
<!--if there are movies then show them in the DOM-->
<ul *ngIf="movies$ | async as movies; else loading" [@listAnimation]="movies">
  <li *ngFor="let movie of movies">
    <a [routerLink]="movie.id">
      <img [src]="movie.image" />
    </a>
  </li>
</ul>

<ng-template #loading>
  <ul [@listAnimation]="loadingMovies.length">
    <li *ngFor="let movie of loadingMovies" [@listAnimation]="loadingMovies.length">
      <img src="/assets/movie.png" />
    </li>
  </ul>
</ng-template>
```

## Features

* BrowserAnimations used to add some animation to the movie details loading.

* Working backend on port 3000 was very easy to setup and run.

## Status & To-Do List

* Status: Working home and movie detail pages. The Add movie page does not add a movie to the database.

* To-Do: fix issues. Add a back button from detail page.

## Inspiration

* [Paul Halliday Youtube video: FREE Angular 8 Course - Learn Angular 8, RxJS, HttpClient, Smart/Presentational Components](https://www.youtube.com/watch?v=OcwwahqeASw)

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
