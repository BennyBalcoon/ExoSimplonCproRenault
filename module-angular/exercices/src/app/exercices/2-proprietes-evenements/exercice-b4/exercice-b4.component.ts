import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice-b4",
  templateUrl: "./exercice-b4.component.html",
  styleUrls: ["./exercice-b4.component.css"],
})
export class ExerciceB4Component implements OnInit {
  public rubriqueActive: number;

  constructor() {}

  ngOnInit(): void {}

  premiereMethode(numRubrique: number): number {
    return (this.rubriqueActive = numRubrique);
  }

  secondeMethode(numRubrique: number): boolean {
    return this.rubriqueActive == numRubrique;
  }
}
