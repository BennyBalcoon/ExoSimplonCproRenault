import { Component } from "@angular/core";
import { ExerciceA1Component } from "./exercices/1-expressions/exercice-a1/exercice-a1.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public titre = "Exercices Angular";
}
