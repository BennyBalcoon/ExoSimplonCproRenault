import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice-b5",
  templateUrl: "./exercice-b5.component.html",
  styleUrls: ["./exercice-b5.component.css"],
})
export class ExerciceB5Component implements OnInit {
  public keyCodeInput: number;
  public coordX: number;
  public coordY: number;

  constructor() {}

  ngOnInit(): void {}

  getKeyCode(event: KeyboardEvent) {
    this.keyCodeInput = event.keyCode;
  }

  follow(x: number, y: number) {
    this.coordX = x;
    this.coordY = y;
  }
}
