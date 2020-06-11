import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice-a8",
  templateUrl: "./exercice-a8.component.html",
  styleUrls: ["./exercice-a8.component.css"],
})
export class ExerciceA8Component implements OnInit {
  public cars = [
    {
      model: "twingo",
      puissance: "tranquille",
      prix: 7000,
      annee: 2004,
    },
    {
      model: "clio",
      puissance: "pêchu",
      prix: 8500,
      annee: 2009,
    },
    {
      model: "nevada",
      puissance: "pepere",
      prix: 10000,
      annee: 2001,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
