import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-exercice-c2",
  templateUrl: "./exercice-c2.component.html",
  styleUrls: ["./exercice-c2.component.css"],
})
export class ExerciceC2Component implements OnInit {
  public utilisateur: { nom: string; prenom: string; email: string; age: number } = {
    nom: "",
    prenom: "",
    email: "",
    age: null,
  };

  public utilisateurs: { nom: string; prenom: string; email: string; age: number }[] = [];

  constructor() {}

  ngOnInit(): void {}

  register(form) {
    console.log(form.status);
    if (form.status == "VALID") {
      this.utilisateurs.push(this.utilisateur);
    }
  }
}
