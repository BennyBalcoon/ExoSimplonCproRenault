import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice-a5",
  templateUrl: "./exercice-a5.component.html",
  styleUrls: ["./exercice-a5.component.css"],
})
export class ExerciceA5Component implements OnInit {
  public classe = {
    nom: "Serdaigle",
    options: "potions",
    inscrits: [
      {
        prenom: "Bob",
        nom: "Spencer",
        age: 14,
      },
      {
        prenom: "Jane",
        nom: "Doe",
        age: 16,
      },
      {
        prenom: "Bill",
        nom: "Clinton",
        age: 13,
      },
    ],
  };

  nbEleves() {
    return this.classe.inscrits.length;
  }

  constructor() {}

  ngOnInit(): void {}
}
