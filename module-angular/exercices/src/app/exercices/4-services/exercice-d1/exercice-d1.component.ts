import { Component, OnInit } from "@angular/core";
import { CouleursService } from "./couleurs.service";

@Component({
  selector: "app-exercice-d1",
  templateUrl: "./exercice-d1.component.html",
  styleUrls: ["./exercice-d1.component.css"],
})
export class ExerciceD1Component implements OnInit {
  private colorService: CouleursService;
  public randomColor: string;

  constructor(service: CouleursService) {
    this.colorService = service;
  }

  ngOnInit(): void {}

  createDiv() {
    this.randomColor = this.colorService.getRandomColor();
  }
}
