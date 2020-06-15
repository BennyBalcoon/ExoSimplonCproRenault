import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice-b6",
  templateUrl: "./exercice-b6.component.html",
  styleUrls: ["./exercice-b6.component.css"],
})
export class ExerciceB6Component implements OnInit {
  public newsletter: boolean;
  public cgu: boolean;
  public valide: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  checkNewsletter(isChecked: boolean) {
    this.newsletter = isChecked;
    this.valide = !(this.newsletter && this.cgu);
  }

  checkCGU(isChecked: boolean) {
    this.cgu = isChecked;
    this.valide = !(this.newsletter && this.cgu);
  }
}
