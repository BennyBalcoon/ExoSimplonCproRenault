import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice-b3",
  templateUrl: "./exercice-b3.component.html",
  styleUrls: ["./exercice-b3.component.css"],
})
export class ExerciceB3Component implements OnInit {
  public nombre: number = 0;
  public incOrDec: boolean;
  public limitInc: number = 10;
  public limitDec: number = 0;

  public increase() {
    if (this.nombre >= this.limitInc) {
      this.incOrDec = true;
    }
    if (this.nombre <= this.limitDec) {
      this.incOrDec = false;
    }
    this.incOrDec ? this.nombre-- : this.nombre++;
  }

  constructor() {}

  ngOnInit(): void {}
}
