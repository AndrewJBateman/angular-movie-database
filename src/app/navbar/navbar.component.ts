import { NavbarService } from "./services/navbar.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  title$ = this.navbarService.title;

  constructor(public navbarService: NavbarService, public router: Router) {}

  ngOnInit() {}
}
