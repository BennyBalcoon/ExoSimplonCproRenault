import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice-a1",
  templateUrl: "./exercice-a1.component.html",
  styleUrls: ["./exercice-a1.component.css"],
})
export class ExerciceA1Component implements OnInit {
  public x: number = 4;
  public y: number = 192;

  calcul(): number {
    return (3 * this.x + 2 - 43 * this.x * (9 * this.y + 6)) / (2 * this.y - 7);
  }

  constructor() {}

  ngOnInit(): void {}
}
