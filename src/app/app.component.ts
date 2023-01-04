import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<app-navbar></app-navbar>

  <main>
    <router-outlet></router-outlet>
  </main>`,
})
export class AppComponent {
  title = "angular-movie-database";
}
