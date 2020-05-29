import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice-a2",
  templateUrl: "./exercice-a2.component.html",
  styleUrls: ["./exercice-a2.component.css"],
})
export class ExerciceA2Component implements OnInit {
  public promotions = [2015, 2016, 2017, 2018, 2019];

  public classe = {
    name: "Poufsouffle",
    specialite: "magie",
    nbEleves: 12,
  };

  constructor() {}

  ngOnInit(): void {}
}
